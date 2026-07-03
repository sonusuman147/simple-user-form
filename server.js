require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "Public"))); // Change to "public" if your folder name is lowercase

// MongoDB Connection
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:");
    console.error(err.message);
    process.exit(1);
  }
}

connectDB();

// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});

// Save Data Route
app.post("/save", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(200).json({
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

// Health Check Route
app.get("/health", (req, res) => {
  res.json({
    status: "Server Running",
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});
