const express = require('express'); // Import the express library
const app = express(); // Create an instance of the express application
const cors = require('cors')

app.use(cors());

const port = 3000; // Define the port number the server will listen on

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello from sahas\'s simple Express.js server!');
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});