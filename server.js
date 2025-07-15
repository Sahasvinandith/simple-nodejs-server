const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // This is the crucial line for port

app.get('/', (req, res) => {
  res.send('Hello from OpenShift Node.js App!');
});

// The change is here: listen on '0.0.0.0' for all interfaces
if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

module.exports = app; // Export the app for testing

// Optional: Basic error handling for robustness
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});