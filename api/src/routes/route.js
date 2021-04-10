var express = require('express'),
    routes = express.Router();

var authenticationController = require("../controller/authentication-controller");
var teachersInfoController = require("../controller/teachersInfo-controller");
var gradeSectionController = require("../controller/gradeSection-controller");
var studentController = require('../controller/studentInfo-controller');
var teacherSideDashboardController = require('../controller/teachersideDashboard')

routes.get('/', (req, res) => { return res.send('Welcome Mantalongon Elementary School') }); //for testing only

routes.post('/register', authenticationController.registerUser);
routes.post('/login', authenticationController.loginUser);
routes.post('/loginAdminForConfirmation', authenticationController.loginAdmin);
routes.get('/getCredentials/:role', authenticationController.getCredentials);
routes.get('/viewTeacherAccount/:role', authenticationController.viewTeacherAccount);
routes.get('/findAccount/:id', authenticationController.findAccount);
routes.put('/updateTeacherCredentials/:id', authenticationController.updateTeacherCredentials);
routes.put('/updateCredentials/:role', authenticationController.updateCredentials);
routes.delete('/removeAccount/:id', authenticationController.removeAccount);
routes.get('/findTeacher/:id',authenticationController.findTeacher );
routes.get('/findAdviser',authenticationController.teacherNoAccount );

routes.post('/addTeachersInfo', teachersInfoController.addTeachersInfo);    
routes.put('/updateTeachersInfo/:id', teachersInfoController.updateTeachersInfo);
routes.get('/viewTeachersInfo/:id', teachersInfoController.viewTeachersInfo);
routes.get('/viewListOfTeacher/:activeStatus', teachersInfoController.viewListOfTeachers);
routes.get('/findAdviser/:id', teachersInfoController.findAdviser);

routes.delete('/deleteSection/:id', gradeSectionController.deleteSection);
routes.get('/viewSection/:id', gradeSectionController.viewSection);
routes.get('/findQuarter/:id', gradeSectionController.findQuarter);
routes.put('/updateSection/:id', gradeSectionController.updateSection);
routes.post('/addSection', gradeSectionController.addSection);
routes.post('/findStudentGrades/:id', gradeSectionController.findStudentGrades);
routes.post('/updateStudentGrades/:id', gradeSectionController.updateStudentGrades);
routes.post('/addStudentGrades', gradeSectionController.addStudentGrades);

routes.get('/viewStudents/:section', studentController.viewStudents);
routes.get('/generateSection/:section', studentController.createTokenSection);
routes.get('/findStudent/:id', studentController.findStudent);
routes.get('/findGrade/:grade', studentController.findGrade);
routes.get('/viewListOfOldFiles', studentController.viewListOfOldFiles);
routes.post('/viewFile', studentController.viewFile);
routes.post('/updateStudent/:id', studentController.updateStudent);
routes.post('/addStudent', studentController.addStudent);

// for students (dashboadTeacher)
routes.get('/findAdviser/:id',teacherSideDashboardController.findAdviser);

module.exports = routes;