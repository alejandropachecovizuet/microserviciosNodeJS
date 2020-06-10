let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.port || 8080
app.listen(port, () => {
    console.log("Service running on port: ", port);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let router = require('./routes/allRoutes')();
 
app.use('/api/v1', router);
module.exports = app