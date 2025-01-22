const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SAVE_FILE = 'saves.json';

// Helper function to generate random ID
function generateGameId() {
  return crypto.randomBytes(4).toString('hex');
}

// Initialize saves.json if it doesn't exist
if (!fs.existsSync(SAVE_FILE)) {
  fs.writeFileSync(SAVE_FILE, JSON.stringify({}));
}

// Save game state
function saveGame(gameState) {
  const saves = JSON.parse(fs.readFileSync(SAVE_FILE, 'utf8'));
  const gameId = generateGameId();

  saves[gameId] = {
    ...gameState,
    savedAt: new Date().toISOString()
  };
  fs.writeFileSync(SAVE_FILE, JSON.stringify(saves, null, 2));
  return gameId;
}

// Load game state
function loadGame(gameId) {
  const saves = JSON.parse(fs.readFileSync(SAVE_FILE));
  return saves[gameId] || null;
}

module.exports = { saveGame, loadGame };
