const express = require("express");
const router = express.Router();

// In-memory flashcards array
let cards = [
  { id: 1, subject: "Java", question: "What is Java?", answer: "Java is a high-level, object-oriented programming language." },
  { id: 2, subject: "Java", question: "What is JVM?", answer: "JVM stands for Java Virtual Machine, which runs Java bytecode." },
  { id: 3, subject: "HTML", question: "What is the <img> tag?", answer: "It embeds an image in the document." }
];

// ✅ GET all flashcards
router.get("/cards", (req, res) => {
  res.status(200).json(cards);
});

// ✅ GET by ID
router.get("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find(c => c.id === id);
  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }
  res.status(200).json(card);
});

// ✅ POST flashcard
router.post("/cards", (req, res) => {
  const { subject, question, answer } = req.body;
  if (!subject || !question || !answer) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newCard = {
    id: cards.length + 1,  // generate simple ID
    subject,
    question,
    answer
  };

  cards.push(newCard);
  res.status(201).json({ message: "Card added", card: newCard });
});

// ✅ PUT flashcard by ID
router.put("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { subject, question, answer } = req.body;
  const cardIndex = cards.findIndex(c => c.id === id);

  if (cardIndex === -1) {
    return res.status(404).json({ message: "Card not found" });
  }

  // Update the existing card
  if (subject) cards[cardIndex].subject = subject;
  if (question) cards[cardIndex].question = question;
  if (answer) cards[cardIndex].answer = answer;

  res.status(200).json({ message: "Card updated", card: cards[cardIndex] });
});

module.exports = router;
