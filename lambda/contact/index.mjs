import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.AWS_REGION ?? "us-east-1" });

// Simple in-memory rate limiter: max 5 requests per IP per 15 minutes
const rateLimitMap = new Map();
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) ?? { count: 0, resetAt: now + WINDOW_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + WINDOW_MS;
  }
  entry.count += 1;
  rateLimitMap.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

function corsHeaders(origin) {
  const allowed = process.env.ALLOWED_ORIGIN ?? "*";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export const handler = async (event) => {
  const origin = event.headers?.origin ?? "";
  const headers = corsHeaders(origin);

  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const ip =
    event.requestContext?.http?.sourceIp ??
    event.headers?.["x-forwarded-for"]?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({ error: "Too many requests. Please try again later." }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid request body." }),
    };
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "name, email and message are required." }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid email address." }),
    };
  }

  try {
    await ses.send(
      new SendEmailCommand({
        Source: process.env.SES_FROM_EMAIL,
        Destination: { ToAddresses: [process.env.SES_TO_EMAIL] },
        Message: {
          Subject: { Data: `Portfolio contact from ${name}` },
          Body: {
            Text: {
              Data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            },
          },
        },
        ReplyToAddresses: [email],
      })
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  } catch {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send message. Please try again." }),
    };
  }
};
