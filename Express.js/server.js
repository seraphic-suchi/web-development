const express = require('express');
const app = express();

// Route: GET /
app.get('/', (req, res) => {
  res.send(' Welcome to the homepage!');
});

// Route: GET /about
app.get('/about', (req, res) => {
  res.send(' This is the About page!');
});

// Route: GET /contact
app.get('/contact', (req, res) => {
  res.send(' Contact us at: hello@example.com');
});

app.get('/intern', (req, res) => {
  res.send(" I am doing my internship in Web Development!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});




