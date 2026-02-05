import { keys } from "./_store.js";

const DAY = 24 * 60 * 60 * 1000;

export default function handler(req, res) {
  const { key } = req.query;

  if (!key || !keys[key]) {
    return res.status(200).send("invalid");
  }

  const age = Date.now() - keys[key].createdAt;

  if (age > DAY) {
    delete keys[key];
    return res.status(200).send("expired");
  }

  res.status(200).send("valid");
}
