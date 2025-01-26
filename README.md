# Dragon Repeller

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This is a **browser-based RPG game** where players gain experience, fight monsters, collect gold, and upgrade weapons. The game state can be saved and loaded using a backend server to preserve progress.

---

## Features
- Interactive gameplay with inventory management.
- Player stats including XP, health, gold, and weapons.
- Save and load game progress via a RESTful API.
- Simple UI for accessibility.

---

## Installation

### Prerequisites
- **Node.js** (for running the backend server).
- A modern browser (for running the frontend).

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/game-repo.git
    cd game-repo
    ```
2. Install dependencies for the backend:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    node app.js
    ```
4. Open the `index.html` file in your browser to start the game.
Or simply click [here](http://localhost:5000/) to access the running server on your machine.

---

## How to Play
1. Launch the game by opening the `index.html` file in your browser.
2. Follow the on-screen instructions to:
   - Fight monsters and gain XP.
   - Collect gold and upgrade weapons.
   - Save your progress using the **Save Game** button.
3. To load a saved game:
   - Enter your game ID and click **Load Game**.

---

## API Endpoints

### Save Game
**Endpoint:** `POST /save`

**Request Body (JSON):**
```json
{
  "xp": 100,
  "health": 80,
  "gold": 50,
  "currentWeapon": "Sword",
  "inventory": ["Shield", "Potion"],
  "fighting": false,
  "monsterHealth": 0
}
```

**Response (JSON):**
```json
{
  "gameId": "12345"
}
```

### Load Game
**Endpoint:** `GET /load/:gameId`

**Response (JSON):**
```json
{
  "xp": 100,
  "health": 80,
  "gold": 50,
  "currentWeapon": "Sword",
  "inventory": ["Shield", "Potion"],
  "fighting": false,
  "monsterHealth": 0
}
```

---

## Development

### Frontend
- All the frontend code resides in `index.html`, `style.css`, and `script.js`.
- Modify `script.js` for gameplay logic and API integration.

### Backend
- The backend is built with **Express.js** and is located in `app.js`.
- Middleware used:
  - `cors`: To handle cross-origin requests.
  - `express.json`: For parsing JSON payloads.

### Running Tests
- Use **Postman** or similar tools to test the API endpoints.

---

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your message here"
    ```
4. Push your branch:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request.

---
Note: This project is only made for educational purposes.
