var express = require('express'),
    routes = express.Router();
var adminController = require("../controller/admin-controller");
routes.get('/', (req, res) => {
    return res.send('Hola Yubert Verzano Mariscal');
});

routes.post('/register', adminController.registerUser);
routes.post('/login', adminController.loginAdmin);

module.exports = routes;