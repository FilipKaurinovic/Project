require('dotenv').config();
const express = require('express');
const checkAuth = require('./authMiddleware');

const app = express();

app.get('/', (req, res) => {
  res.send('Willkommen in deinem SSO-Backend!');
});

app.get('/protected', checkAuth, (req, res) => {
  res.send(`Hallo ${req.user.email}, du bist authentifiziert!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
