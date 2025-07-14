const express = require("express");
const router = express.Router();
const Flashcard = require("./models/Flashcard"); // ✅ model import

// ✅ GET all flashcards
router.get("/cards", async (req, res) => {
  try {
    const cards = await Flashcard.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST new flashcard
router.post("/cards", async (req, res) => {
  const { subject, question, answer } = req.body;

  if (!subject || !question || !answer) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newCard = new Flashcard({ subject, question, answer });

  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET card by ID
router.get("/cards/:id", async (req, res) => {
  try {
    const card = await Flashcard.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ PUT (update) card by ID
router.put("/cards/:id", async (req, res) => {
  try {
    const updated = await Flashcard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Card not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
