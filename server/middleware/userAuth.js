import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const token = req.cookies.token;

  console.log("🔍 Debug - Auth middleware:");
  console.log("- Cookie token exists:", !!token);
  console.log("- JWT_SECRET exists:", !!process.env.JWT_SECRET);
  console.log(
    "- Headers:",
    req.headers.cookie ? "Cookie header present" : "No cookie header"
  );

  if (!token) {
    console.log("❌ No token found in cookies");
    return res.json({
      success: false,
      message: "Not Authorized. Login Again",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token decoded successfully, userId:", tokenDecode.id);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
    } else {
      console.log("❌ No user ID in token");
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    next();
  } catch (error) {
    console.error("❌ JWT Verification Error:", error.message);
    return res.json({
      success: false,
      message: "Not Authorized. Login Again",
    });
  }
};

export default userAuth;
