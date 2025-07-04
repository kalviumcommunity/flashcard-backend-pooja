const express = require("express");
const cors = require("cors");
const flashcardsRoutes = require("./flashcards"); // Route file

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", flashcardsRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
