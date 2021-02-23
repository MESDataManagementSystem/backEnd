var express = require('express'),
    routes = express.Router();

var authenticationController = require("../controller/authentication-controller");
var teachersInfoController = require("../controller/teachersInfo-controller");
var addSectionController = require("../controller/addSection-controller");
var studentController = require('../controller/studentInfo-controller');

routes.get('/', (req, res) => { return res.send('Welcome Mantalongon Elementary School') }); //for testing only

routes.post('/register', authenticationController.registerUser);
routes.post('/login', authenticationController.loginUser);

routes.post('/addTeachersInfo', teachersInfoController.addTeachersInfo);
routes.put('/updateTeachersInfo/:id', teachersInfoController.updateTeachersInfo);
routes.get('/viewTeachersInfo/:id', teachersInfoController.viewTeachersInfo);
routes.get('/viewListOfTeacher', teachersInfoController.viewListOfTeachers);

routes.post('/addSection', addSectionController.addSection);
routes.delete('/deleteSection/:id', addSectionController.deleteSection);
routes.get('/viewSection/:id', addSectionController.viewSection);
routes.put('/updateSection/:id', addSectionController.updateSection);

routes.get('/viewListOfOldFiles', studentController.viewListOfOldFiles);
routes.post('/viewFile', studentController.viewFile);




module.exports = routes;