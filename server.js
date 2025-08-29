const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Serve home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve thank you page
app.get('/Socail-post-designs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'socialpost.html'));
});

app.get('/logos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'logodesign.html'));
});

app.get('/Business-card-desgins', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'businessscards.html'));
});
app.get('/flyers-desgins', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'flyersdesign.html'));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
