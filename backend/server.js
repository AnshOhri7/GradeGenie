const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/home', (req, res) => {
  res.json({ message: 'Welcome to the Home API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});