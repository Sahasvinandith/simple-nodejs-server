const request = require('supertest');
const app = require('./server'); // Import the app instance

// We need a variable to hold the server instance
let server;

// This hook will run before all tests in this file
beforeAll((done) => {
  // Start the server and store the instance
  server = app.listen(0, () => { // Listen on a random available port (port 0)
    done(); // Call done() to signal that the async setup is complete
  });
});

// This hook will run after all tests in this file
afterAll((done) => {
  // Close the server and signal that the async teardown is complete
  server.close(done);
});

describe('GET /', () => {
  it('should return "Hello from OpenShift Node.js App!"', async () => {
    // We now use the `request` function on the server instance directly, not the app instance.
    // This makes sure we are testing against the running server.
    const res = await request(server).get('/');
    
    // Now the server is listening on a random port, so we check status and text.
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from OpenShift Node.js App!');
  });
});