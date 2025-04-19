import express from "express";
import {
  login,
  logout,
  register,
  verifyEmail,
  verifyOtp,
} from "../controllers/authController.js";
import userauth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userauth, verifyOtp);
authRouter.post("/verify-account", userauth, verifyEmail);

export default authRouter;
