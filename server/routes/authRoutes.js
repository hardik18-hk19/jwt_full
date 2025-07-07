import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  sendPasswordResetOtp,
  verifyEmail,
  verifyOtp,
  verifyPasswordReset,
} from "../controllers/authController.js";
import userauth from "../middleware/userAuth.js";

const authRouter = express.Router();

// Debug endpoint to check cookies
authRouter.get("/debug-cookies", (req, res) => {
  console.log("🍪 All cookies:", req.cookies);
  console.log("🍪 Token cookie:", req.cookies.token);
  console.log("📋 Headers:", req.headers.cookie);
  res.json({
    success: true,
    cookies: req.cookies,
    hasToken: !!req.cookies.token,
    headers: req.headers.cookie || "No cookie header",
  });
});

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userauth, verifyOtp);
authRouter.post("/verify-account", userauth, verifyEmail);
authRouter.post("/send-reset-otp", userauth, sendPasswordResetOtp);
authRouter.post("/password-reset", userauth, verifyPasswordReset);
authRouter.get("/is-auth", userauth, isAuthenticated);

export default authRouter;
