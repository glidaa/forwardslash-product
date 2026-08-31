const MAX_TEXT_LENGTH = 20000;
const KEY_PREFIX = "forwardslash:competition-note:";

function redisConfig() {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  };
}

async function redis(command) {
  const config = redisConfig();
  if (!config.url || !config.token) {
    const error = new Error("Notes store is not configured");
    error.code = "STORE_NOT_CONFIGURED";
    throw error;
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  if (!response.ok) throw new Error(`Notes store returned ${response.status}`);
  const payload = await response.json();
  if (payload.error) throw new Error(payload.error);
  return payload.result;
}

function validKey(value) {
  return typeof value === "string" && /^[a-z0-9-]{1,140}$/i.test(value);
}

function cleanNote(value) {
  if (!value || typeof value !== "object") return null;
  const likes = typeof value.likes === "string" ? value.likes.slice(0, MAX_TEXT_LENGTH) : "";
  const notes = typeof value.notes === "string" ? value.notes.slice(0, MAX_TEXT_LENGTH) : "";
  return {
    liked: Boolean(value.liked),
    likes,
    notes,
    updatedAt: new Date().toISOString()
  };
}

module.exports = async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method === "GET") {
    const key = request.query && request.query.key;
    if (!validKey(key)) return response.status(400).json({ error: "Invalid note key" });
    try {
      const result = await redis(["GET", KEY_PREFIX + key]);
      return response.status(200).json({ note: result ? JSON.parse(result) : null });
    } catch (error) {
      const status = error.code === "STORE_NOT_CONFIGURED" ? 501 : 500;
      return response.status(status).json({ error: error.message });
    }
  }

  if (request.method === "PUT") {
    const key = request.body && request.body.key;
    const note = cleanNote(request.body && request.body.note);
    if (!validKey(key) || !note) return response.status(400).json({ error: "Invalid note payload" });
    try {
      await redis(["SET", KEY_PREFIX + key, JSON.stringify(note)]);
      return response.status(200).json({ ok: true, note });
    } catch (error) {
      const status = error.code === "STORE_NOT_CONFIGURED" ? 501 : 500;
      return response.status(status).json({ error: error.message });
    }
  }

  response.setHeader("Allow", "GET, PUT");
  return response.status(405).json({ error: "Method not allowed" });
};
