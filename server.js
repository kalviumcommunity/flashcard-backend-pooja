const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // 👈 This is needed to read JSON from POST requests

// In-memory flashcards array
const cards = [
  { subject: "Java", question: "What is Java?", answer: "Java is a high-level, object-oriented programming language." },
  { subject: "Java", question: "What is JVM?", answer: "JVM stands for Java Virtual Machine, which runs Java bytecode." },
  { subject: "HTML", question: "What is the <img> tag?", answer: "It embeds an image in the document." }
];

// ✅ GET endpoint
app.get("/api/cards", (req, res) => {
  res.json(cards);
});

// ✅ POST endpoint
app.post("/api/cards", (req, res) => {
  const { subject, question, answer } = req.body;

  // Simple validation
  if (!subject || !question || !answer) {
    return res.status(400).json({ message: "All fields (subject, question, answer) are required." });
  }

  const newCard = { subject, question, answer };
  cards.push(newCard);

  res.status(201).json({
    message: "Flashcard added successfully",
    flashcard: newCard
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
