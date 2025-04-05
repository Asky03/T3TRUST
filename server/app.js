const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Load environment variables from .env
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Log MONGO_URI to confirm it's loaded
console.log("✅ MONGO_URI loaded:", process.env.MONGO_URI);

// Check for MONGO_URI existence
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not found. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB (standard format)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Root route
app.get("/", (req, res) => {
  res.send("🚀 T3TRUST backend is running!");
});

// Health check route
app.get("/api/ping", (req, res) => {
  res.json({ message: "API is live!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
