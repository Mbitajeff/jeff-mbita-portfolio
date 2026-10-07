import { lpush, ltrim } from "./_redis.js";

const SAFE_RE = /^[a-zA-Z0-9_-]{1,50}$/;
const BOT_RE = /bot|crawler|spider|preview|vercel|curl|scanner|facebookexternalhit|twitterbot|slackbot|whatsapp|telegram|discord/i;

function isSafeString(str, max = 50) {
  return typeof str === "string" && SAFE_RE.test(str);
}

function deviceType(ua) {
  if (!ua) return "unknown";
  return /mobile|android|iphone|ipad|ipod/i.test(ua) ? "mobile" : "desktop";
}

function timingSafeEqual(a, b) {
  // constant-time string compare
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) {
    // still iterate to avoid timing leak
    let diff = 1;
    for (let i = 0; i < Math.min(ab.length, bb.length); i++) diff |= ab[i] ^ bb[i];
    return false;
  }
  let diff = 0;
  for (let i = 0; i < ab.length; i++) diff |= ab[i] ^ bb[i];
  return diff === 0;
}

async function sendEmail(campaign, city, country, time) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;

  const nairobi = new Date(time).toLocaleString("en-KE", {
    timeZone: "Africa/Nairobi",
    dateStyle: "medium",
    timeStyle: "short",
  });

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Alerts <onboarding@resend.dev>",
      to,
      subject: `Portfolio visit: ${campaign}`,
      text: `New visit on your portfolio.\n\nCampaign: ${campaign}\nCity: ${city}\nCountry: ${country}\nTime: ${nairobi}`,
    }),
  });
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const ua = req.headers["user-agent"] || "";
    if (BOT_RE.test(ua)) {
      return res.status(200).json({ ok: true, skipped: "bot" });
    }

    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body || "{}");
    const { sessionId, type, campaign, target, path } = body;

    // Validate
    if (!["visit", "click"].includes(type)) {
      return res.status(400).json({ error: "Invalid type" });
    }
    if (!sessionId || !isSafeString(sessionId)) {
      return res.status(400).json({ error: "Invalid sessionId" });
    }
    if (campaign && !isSafeString(campaign)) {
      return res.status(400).json({ error: "Invalid campaign" });
    }
    if (target && (typeof target !== "string" || target.length > 200)) {
      return res.status(400).json({ error: "Invalid target" });
    }

    // Ignore own testing
    if (campaign === "me") {
      return res.status(200).json({ ok: true, skipped: "me" });
    }

    const country = req.headers["x-vercel-ip-country"] || "unknown";
    const rawCity = req.headers["x-vercel-ip-city"] || "unknown";
    const city = decodeURIComponent(rawCity);
    const timestamp = new Date().toISOString();
    const device = deviceType(ua);
    const referrer = req.headers["referer"] || req.headers["referrer"] || "";

    const event = {
      sessionId,
      type,
      campaign: campaign || null,
      target: target || null,
      path: path || null,
      timestamp,
      country,
      city,
      device,
      referrer,
    };

    await lpush("events", JSON.stringify(event));
    await ltrim("events", 0, 4999);

    // Email on first visit with a campaign
    if (type === "visit" && campaign) {
      sendEmail(campaign, city, country, timestamp).catch(() => {});
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("track error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
