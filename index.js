app.get('/', (req, res) => {
  res.send('Welcome to Flashcard API!');
});
// Step 1: Import express and initialize app
const express = require('express');
const app = express();
const port = 3000;

// Step 2: Use JSON middleware (to handle POST request bodies)
app.use(express.json());

// Step 3: Temporary in-memory array to store flashcards
let flashcards = [];

// Step 4: GET API – fetch all flashcards
app.get('/api/flashcards', (req, res) => {
  res.json(flashcards);
});

// Step 5: POST API – add a new flashcard
app.post('/api/flashcards', (req, res) => {
  const { question, answer } = req.body;

  // Validation
  if (!question || !answer) {
    return res.status(400).json({ message: 'Both question and answer are required.' });
  }

  // Create new flashcard object
  const newFlashcard = {
    id: flashcards.length + 1,
    question,
    answer
  };

  // Add to the flashcards array
  flashcards.push(newFlashcard);

  // Respond with success message
  res.status(201).json({
    message: 'Flashcard added successfully',
    flashcard: newFlashcard
  });
});

// Step 6: Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
