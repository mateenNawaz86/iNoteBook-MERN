const jwt = require("jsonwebtoken");

// create secret token for new user
const JWT_SECRET = "mirani$62Mateen";

const fetchUser = (req, res, next) => {
  // Get user detail from login token
  const token = req.header("authen-token");
  if (!token) {
    res.status(401).send({ error: "Authenticate user with valid token!" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Authenticate user with valid token!" });
  }
};

module.exports = fetchUser;
