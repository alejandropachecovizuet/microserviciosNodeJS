const request = require('supertest')
const express = require('express');
//const app = express();
//const router = require('../routes/allRoutes')();
const app = require('../server');
//let bodyParser = require('body-parser');



//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
 
//app.use('/api/v1', router);

describe('Test Suite - ', () => {
  it('Add Employee', async (done) => {
    const res = await request(app)
    .get('/api/v1/employees')
//    .expect('Content-Type', /json/)
//    .expect(200, done);
    console.log(res);
  });
});

