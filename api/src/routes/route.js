var express = require('express'),
    routes = express.Router();

var authenticationController = require("../controller/authentication-controller");
var teachersInfoController = require("../controller/teachersInfo-controller");
var gradeSectionController = require("../controller/gradeSection-controller");

routes.get('/', (req, res) => { return res.send('Welcome Mantalongon Elementary School') }); //for testing only

routes.post('/register', authenticationController.registerUser);
routes.post('/login', authenticationController.loginUser);

routes.post('/addTeachersInfo', teachersInfoController.addTeachersInfo);
routes.put('/updateTeachersInfo/:id', teachersInfoController.updateTeachersInfo);
routes.get('/viewTeachersInfo/:id', teachersInfoController.viewTeachersInfo);
routes.get('/viewListOfTeacher', teachersInfoController.viewListOfTeachers);

routes.post('/addSection', gradeSectionController.addSection);
routes.delete('/deleteSection/:id', gradeSectionController.deleteSection);
routes.get('/viewSection/:id', gradeSectionController.viewSection);
routes.put('/updateSection/:id', gradeSectionController.updateSection);

module.exports = routes;