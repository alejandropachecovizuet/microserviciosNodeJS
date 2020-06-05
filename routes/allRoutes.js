const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    let employee = require('./employee.routes')(router);
    return router;
}

module.exports = eRoutes;