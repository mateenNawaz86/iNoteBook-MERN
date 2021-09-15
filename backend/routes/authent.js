const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

// create secret token for new user
const JWT_SECRET = "mirani$62Mateen";

// Route 1: Create a user using: /api/authent/createUser => POST method, login NOT required
router.post(
  "/createUser",

  // check entered user validation
  [
    body("name", "Please enter a valid name").isLength({ min: 3 }),
    body("email", "Please enter a valid email address").isEmail(),
    body("password", "Please enter a password atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors return Bad request & error msg
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email address exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({
            success,
            error: "User already exists with this email address!",
          });
      }

      // Create a new user
      const salt = await bcrypt.genSalt(10);
      const scrPsw = await bcrypt.hash(req.body.password, salt);

      //create a NEW user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: scrPsw,
      });

      // return JWT = jsonToken
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);

      // send user response as a TOKEN
      success = true;
      res.json({ success, authToken });

      // console the occurs error
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("Internal error occured!");
    }
  }
);

//Route 2:  Authenticate a user using: /api/authent/login => POST method, login NOT required
router.post(
  "/login",
  [
    body("email", "Please enter a valid email address").isEmail(),
    body("password", "Please enter your password").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Please enter a valid user info!" });
      }

      // compare the password with existing password
      const pswCompare = await bcrypt.compare(password, user.password);
      if (!pswCompare) {
        return res
          .status(400)
          .json({ success, error: "Please enter a valid user info!" });
      }

      // return JWT = jsonToken
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      console.log(authToken);

      // send user response as a TOKEN
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("Internal error occured!");
    }
  }
);

// Route 3: Get user loggedIn data using: /api/authent/getUser => POST method, login required
router.post("/getUser", fetchUser, async (req, res) => {
  try {
    userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.messsage);
    res.status(500).send("Internal error occured!");
  }
});

module.exports = router;
