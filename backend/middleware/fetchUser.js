const jwt = require("jsonwebtoken");

// create secret token for new user
const JWT_SECRET = "mirani$62Mateen";

const fetchUser = (req, res, next) => {
  // get user from JWT & add user ID in req object
  const token = req.header("authent-token");
  if (!token) {
    res.status(401).send({ error: "Authenticate with valid token!" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authenticate with valid token!" });
  }
};

module.exports = fetchUser;
