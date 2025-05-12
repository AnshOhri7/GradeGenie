const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, '../gradegenie/build')));

app.get('/api/home', (req, res) => {
  res.json({ message: 'Welcome to the Home API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});