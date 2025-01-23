const jwt = require("jsonwebtoken");

function getAuthPayload(token) {
  const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
  return tokenPayload;
}

function fetchAuthFromCookie(req) {
  const token = req.cookies.token;
  const tokenPayload = getAuthPayload(token);
  return tokenPayload;
}

module.exports = {
  getAuthPayload,
  fetchAuthFromCookie,
};
