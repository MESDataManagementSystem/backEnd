var oldFile = require('../model/oldFiles-model')
var studentInfo = require('../model/studentsInfo-model')
var jwt = require('jsonwebtoken');
var config = require('../config/config');




// get token for section
exports.createTokenSection =(req, res) => {
    return jwt.sign({section: req.params.section}, config.jwtSecret)
}
// for old students and viewing old files
exports.viewListOfOldFiles= (function (req, res) {
    oldFile.find(function (err, studentOldfile) {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: studentOldfile });
    });
});
// sending url for the pdf
exports.viewFile = (function ( req, res){
    return res.send({status: true, data: req.body});
})

// ------------------------------------
// for current student

// add new student
exports.addStudent = (function (req, res){
    studentInfo(req.body).save((err, student) => {
        if (err) {
            return res.status(400).json({ 'msg': err })
        }
        return res.status(200).json(student);
    })
})

// view List of students in specific section
exports.viewStudents = (function (req, res){
    // jwt.sign({section: req.params.section}, config.jwtSecret);
    console.log(req.params, 'requests')

    studentInfo.find({ studentSection: req.params.section }, (err, students) => {
        if (err){
            return res.send({error:err, status: false});
        }
        return res.send({status:true, data: students})
    })
})

// find student for update form
exports.findStudent = (req, res) => {
    studentInfo.findOne({_id: req.params.id}, (err, student)=>{
        if(err){
            return res.send({error: err, status: false});
        }
        return res.send({status: true, data: student});
    })
}
// find by grade
exports.findGrade = (req, res) =>{
    console.log(req.params.grade)
    studentInfo.find({studentGrade: req.params.grade}, (err, students) =>{
        if(err){
            return res.send({error: err, status: false})
        }
        return res.send({status: true, data: students})
    })
}

// update student
exports.updateStudent = (req, res) => {
    console.log('okii dayy')
    // var studentInfo = {
    //     studentLastName:'' ,
    //     studentFirstName: '',
    //     studentNameExtn: '',
    //     studentMiddleName:'',
    //     studentLRN: '',
    //     studentBirthdate: '',
    //     studentSex: '',
    //     studentCredentialPresentedForGrade: [],
    //     studentNameOfSchoolFromKinder: '',
    //     studentSchoolId: '',
    //     studentSchoolAddress: '',
    //     studentPeptPasserRating: '',
    //     studentDateOfxamination: '',
    //     studentOthers: '',
    //     studentNameAdressOfTestingCenter: '',
    //     studentRemark: '',
    //     studentSection: ''
    //   };
    console.log(req.body);
    studentInfo.findByIdAndUpdate({_id: req.params.id}, req.body,(err, student) =>{
        if(err){
            return res.send({error: err, status: false});
        }
        return res.send({status: true, data: student});
    })
}


