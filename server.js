import express from "express";
import { connectDB } from "./config/db.js";
import { processPayment } from "./utils/payment.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Leaky Coffee API ☕");
});

app.post("/order", async (req, res) => {
  const { coffeeType, amount } = req.body;
  await processPayment(amount);
  res.send(`Order for ${coffeeType} received!`);
});

connectDB();
app.listen(3000, () => console.log("Server running on port 3000"));
