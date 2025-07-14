const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  subject: String,
  question: String,
  answer: String,
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;
