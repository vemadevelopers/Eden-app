const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Serve Sign-Up Page
app.get("/signup", (req, res) => {
  res.render("signup");
});

// Handle Sign-Up Form Submission
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists! Please log in.");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    const user = new User({
      username,
      email,
      passwordHash: hashedPassword,
    });
    await user.save();

    res.send("User registered successfully!");
  } catch (error) {
    res.status(500).send("An error occurred: " + error.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});