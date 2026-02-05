import { keys } from "./_store.js";

export default function handler(req, res) {
  const key = "NIK-" + Math.random().toString(36).slice(2,10).toUpperCase();
  keys[key] = { createdAt: Date.now() };
  res.status(200).send(key);
}
