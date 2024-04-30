// Import the express package
const express = require('express');

// Create an app
const app = express();

// Make sure our app can identify JSON
app.use(express.json());

// GET Request
app.get('/', function (req, res) {
  const clientIp = req.ip;
  console.log('This request came from', clientIp);
  // Server Response
  res.send('Hello World');
});

// POST Request
app.post('/', function (req, res) {
  const clientIp = req.ip;
  const body = req.body;

  console.log('This request came from', clientIp);
  console.log('Body', body);
  // Server Response
  res.json({ message: 'Thanks' });
});

app.post('/users', (req, res) => {
  const body = req.body;
  delete body.password;

  // TODO:
  // Save data received from the body in a db

  res.json({ message: 'Registration successfully', data: body });
});

app.post('/login', (req, res) => {
  const body = req.body;
  delete body.password;

  // TODO:
  // Retrived user data from the db based on what is received from the body

  res.json({ message: 'Login successful', data: body });
});

// Starting the server
app.listen(3000, function () {
  console.log('The server is up and running');
});