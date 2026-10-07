// Upstash Redis REST API helper — no extra dependencies

const url = process.env.KV_REST_API_URL;
const token = process.env.KV_REST_API_TOKEN;

async function command(args) {
  if (!url || !token) throw new Error("Redis env vars not set");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Redis error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function lpush(key, value) {
  return command(["LPUSH", key, value]);
}

export async function ltrim(key, start, stop) {
  return command(["LTRIM", key, start, stop]);
}

export async function lrange(key, start, stop) {
  const result = await command(["LRANGE", key, start, stop]);
  return result.result || [];
}
