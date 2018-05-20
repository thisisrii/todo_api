var express = require('express');
    app = express();
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/todoModel'), //created model here
    bodyParser = require('body-parser');

// mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/test');

console.info("CONNECTED TO DRIVER");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("HERE");

var routes = require('./api/routes/todoRoutes'); //importing the route
routes(app); //register the route

app.listen(port);

console.info("NODEMON || TODO RESTful APP API IS NOW RUNNING on PORT " + port);