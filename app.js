
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/greet', (req, res) => {
  res.send('Hello, welcome to the Express server!');
});

// Second GET API
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Current time is: ${currentTime}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
