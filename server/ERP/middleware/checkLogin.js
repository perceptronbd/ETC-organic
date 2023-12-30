const { verify } = require("jsonwebtoken");
require("dotenv").config();

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }
  // Extract the token from the authorization header
  const accessToken = authorization.split(" ")[1];

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const decodedToken = verify(accessToken, process.env.JWT_SECRET);
    if (decodedToken) {
      const {userId} = decodedToken;
      req.authenticated = true; 
      req.userId = userId;
      // console.log(req.userId); // Add userId to the request object

      return next();
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { checkLogin };