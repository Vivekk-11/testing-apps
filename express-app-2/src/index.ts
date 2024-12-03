import express from "express";

export const app = express();

app.use(express.json());

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (!Number(a) || !Number(b)) {
    res.status(411).json({ message: "Incorrect Inputs" });
    return;
  }

  const answer = a + b;

  res.json({ answer });
});
