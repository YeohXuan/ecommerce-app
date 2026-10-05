import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) return res.status(401).json({ message: "Unauthorized login" });
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
      return res.status(401).json({ message: "Unauthorized login" });
    next();
  } catch (error) {
    console.error("Error authenticating admin", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default adminAuth;
