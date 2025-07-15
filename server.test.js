const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should respond with Hello from OpenShift Node.js App!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello from OpenShift Node.js App!', done);
  });
});
