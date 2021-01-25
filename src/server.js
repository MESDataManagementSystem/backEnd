var port = process.env.PORT || 5000;
var config = require('../src/config/config')
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var routes = require('../src/routes/route')
var cors = require('cors');
var app = express();
var server = require('http').createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route
app.use('/api', routes);

// Connect to the Database
mongoose.connect(config .db, {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Database Connection Established Successfully!');
});
connection.on('error', (err) => {
    console.log("MongoDB Connection Error. Please Make Sure MongoDB Is Running!");
    process.exit();    
})

// Start the server
server.listen(port);
console.log('There will be dragons: http://localhost:' + port);