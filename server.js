const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Root route for Render health check or confirmation
app.get("/", (req, res) => {
  res.send("Flashcard Backend is Live");
});

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/flashcards", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ DB connection error", err));

// ✅ Import routes
const flashcardRoutes = require("./flashcard");
app.use("/api", flashcardRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
