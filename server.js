const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const cards = [
  // Add all 30 flashcards from your project
  { subject: "Java", question: "What is Java?", answer: "Java is a high-level, object-oriented programming language." },
  { subject: "Java", question: "What is JVM?", answer: "JVM stands for Java Virtual Machine, which runs Java bytecode." },
  // ✂️ continue adding all your cards
  { subject: "HTML", question: "What is the <img> tag?", answer: "It embeds an image in the document." }
];

// Create GET endpoint
app.get("/api/cards", (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
