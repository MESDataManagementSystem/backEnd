var express = require('express'),
    routes = express.Router();

var authenticationController = require("../controller/authentication-controller");
var teachersInfoController = require("../controller/teachersInfo-controller");
var sectionGradesController = require("../controller/gradeSection-controller");
var studentController = require('../controller/studentInfo-controller');
var gradeSectionController = require("../controller/gradeSection-controller");

routes.get('/', (req, res) => { return res.send('Welcome Mantalongon Elementary School') }); //for testing only

routes.post('/register', authenticationController.registerUser);
routes.post('/login', authenticationController.loginUser);

routes.post('/addTeachersInfo', teachersInfoController.addTeachersInfo);
routes.put('/updateTeachersInfo/:id', teachersInfoController.updateTeachersInfo);
routes.get('/viewTeachersInfo/:id', teachersInfoController.viewTeachersInfo);
routes.get('/viewListOfTeacher', teachersInfoController.viewListOfTeachers);

routes.post('/addSection', sectionGradesController.addSection);
routes.delete('/deleteSection/:id', sectionGradesController.deleteSection);
routes.get('/viewSection/:id', sectionGradesController.viewSection);
routes.put('/updateSection/:id', sectionGradesController.updateSection);
routes.get('/viewStudents/:section',studentController.viewStudents);
routes.get('/generateSection/:section', studentController.createTokenSection);
routes.get('/findGrade/:grade', studentController.findGrade);

routes.get('/viewListOfOldFiles', studentController.viewListOfOldFiles);
routes.post('/viewFile', studentController.viewFile);
routes.post('/updateStudent/:id', studentController.updateStudent );
routes.post('/addStudent',studentController.addStudent);
routes.get('/findStudent/:id', studentController.findStudent);
routes.post('/findStudentGrades/:id', sectionGradesController.findStudentGrades);
routes.post('/updateStudentGrades/:id', sectionGradesController.updateStudentGrades);
routes.post('/addStudentGrades', sectionGradesController.addStudentGrades);
routes.get('/findQuarter/:id', sectionGradesController.findQuarter);


module.exports = routes;