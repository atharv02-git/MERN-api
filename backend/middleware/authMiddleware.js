// for the Protection of routes using jwt authentication
// authorizing the token
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  // defining token
  let token;

  // checking for the authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // signing the token
      token = req.headers.authorization.split(" ")[1]; //Bearer 12312312 spliting bearer with token no

      // verifying the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Getting the user from the token
      req.user = await User.findById(decoded.id).select("-password"); //(-password) is used to separate the hashed password

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
