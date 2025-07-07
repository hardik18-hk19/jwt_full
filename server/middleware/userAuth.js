import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const token = req.cookies.token;

  console.log("🔍 Debug - Auth middleware:");
  console.log("- All cookies:", req.cookies);
  console.log("- Cookie token exists:", !!token);
  console.log(
    "- Token value (first 20 chars):",
    token ? token.substring(0, 20) + "..." : "null"
  );
  console.log("- JWT_SECRET exists:", !!process.env.JWT_SECRET);
  console.log("- Headers cookie:", req.headers.cookie);
  console.log("- Request origin:", req.headers.origin);
  console.log("- Request host:", req.headers.host);

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
