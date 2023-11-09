require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 


const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwtsecret = process.env.JWT_SECRET;
const saltRounds = 10; 

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log("Server running on port", port);
});

const User = require("./Models/Users");
const Message = require("./Models/Message");

const createToken = (userId) => {
  const payload = {
    userId: userId,
  };
  const token = jwt.sign(payload, jwtsecret, { expiresIn: "1h" }); 
  return token;
};

app.post("/Signup", async (req, res) => {
  const { name, email, password, image } = req.body;

  if (password.length < 8 || password.length > 11) {
    return res.status(400).json({ message: "Password must be between 8 and 11 characters long" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ name, email, password: hashedPassword, image });
    await newUser.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    console.error("Error signing up:", err);
    res.status(500).json({ message: "Error registering user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error in finding user", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/users/:userId",(req, res) => {
  const loggedInUserId = req.params.userId

  User.find({_id:{$ne:loggedInUserId}}).then((users) => {
    res.status(200).json(users);
  }).catch((err) => {
    console.error("Error retrieving users", err);
    res.status(500).json({message: "Error retrieving users"})
  })
})
