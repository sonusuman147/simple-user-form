require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static("Public"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Save user data
app.post("/save", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.json({
      success: true,
      message: "Data Saved",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
