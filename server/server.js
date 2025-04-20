import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDatabase from "./config/connectDb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 4000;
connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

//Api Endpoints
app.get("/", (req, res) => {
  res.send("Api Working fine");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
