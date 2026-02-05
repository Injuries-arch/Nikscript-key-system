import { keys } from "./_store.js";

const DAY = 24 * 60 * 60 * 1000;

export default function handler(req, res) {
  const { key } = req.query;

  if (!key || !keys[key]) return res.send("invalid");

  if (Date.now() - keys[key].createdAt > DAY) {
    delete keys[key];
    return res.send("expired");
  }

  res.send("valid");
}
