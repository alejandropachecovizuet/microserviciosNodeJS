var expect = require("chai").expect;
const request = require('supertest')

const app = require('../server')
let firstid;
describe(':: Pruebas', () => {

    step('Add employee', async() => {
        const res = await request(app)
            .post('/api/v1/employees')
            .send({
                "firstName":"Nombre",
                "lastName":"apellido",
                "emailId":"fake@fake.com"
                
            });

        //console.log(res);
        expect(res.statusCode).to.eql(200)
        expect(res.body).to.be.an('object')
    });

    step('list employees', async() => {
        const res = await request(app)
            .get('/api/v1/employees');

        //console.log(res);
        expect(res.statusCode).to.eql(200)
        expect(res.body).to.be.an('array')
        firstid=res.body[0].id;
    });

    step('update employee', async() => {
        const res = await request(app)
            .put('/api/v1/employees/1')
            .send({
                "firstName":"Nombre Updated",
                "lastName":"apellido Updated",
                "emailId":"fake@fake.com"
            });

        //console.log(res);
        expect(res.statusCode).to.eql(200)
        expect(res.body).to.be.an('object')
    });

    step('update employee', async() => {
        console.log(`deleting ${firstid}...`)
        const res = await request(app)
            .delete(`/api/v1/employees/${firstid}`);

        //console.log(res);
        expect(res.statusCode).to.eql(200)
        expect(res.body).to.be.an('object')
        expect(res.body).to.eql({
            deleted: 'true'
        })
    });

});