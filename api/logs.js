import { lrange } from "./_redis.js";

function timingSafeEqual(a, b) {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  const len = Math.max(ab.length, bb.length);
  const pa = Buffer.alloc(len);
  const pb = Buffer.alloc(len);
  ab.copy(pa);
  bb.copy(pb);
  let diff = pa.length !== pb.length ? 1 : 0;
  for (let i = 0; i < len; i++) diff |= pa[i] ^ pb[i];
  return diff === 0;
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) {
    return res.status(500).json({ error: "ADMIN_KEY not configured" });
  }

  const provided = req.headers["x-admin-key"] || "";
  if (!provided || !timingSafeEqual(provided, adminKey)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const raw = await lrange("events", 0, 999);
    const events = raw.map((item) => {
      try { return JSON.parse(item); }
      catch { return null; }
    }).filter(Boolean);

    return res.status(200).json({ events });
  } catch (err) {
    console.error("logs error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
