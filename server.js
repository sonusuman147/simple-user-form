require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "Public"))); // Change to "public" if your folder name is lowercase

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
  });

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});

// Save user
app.post("/save", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({
      success: true,
      message: "Data Saved Successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.send("OK");
});

// IMPORTANT: Listen on all interfaces
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
