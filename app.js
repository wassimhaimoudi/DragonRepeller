const express = require('express');
const path = require('path');
const cors = require('cors');
const { saveGame, loadGame } = require('./saveHandler');

const app = express();
const port = 5000;

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cors());
app.use(express.json());

// Save endpoint
app.post('/save', (req, res) => {
  try {
    console.log(req.body); // req is sent successfully with data
    const gameId = saveGame(req.body);
    res.json({ gameId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save game' });
  }
});

// Load endpoint
app.get('/load/:gameId', (req, res) => {
  try {
    const gameState = loadGame(req.params.gameId);
    if (!gameState) {
      res.status(404).json({ error: 'Game not found' });
      return;
    }
    res.json(gameState);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load game' });
  }
});

// Handle Ressource not found errors
app.all('*', (req, res) => {
  res.status(404).send(`<!DOCTYPE html>
    <p>Oops! you seem to have lost your way to the town</p>`);
});

app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});
