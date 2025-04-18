import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDatabase from "./config/connectDb.js";

const app = express();

const port = process.env.PORT || 4000;
connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("Api Working fine");
});

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
