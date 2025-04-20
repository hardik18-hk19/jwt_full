import express from "express";
import userauth from "../middleware/userAuth";
import { getUserData } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/data", userauth, getUserData);

export default userRouter;
