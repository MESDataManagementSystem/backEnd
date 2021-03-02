var oldFile = require('../model/oldFiles-model')
var studentInfo = require('../model/studentsInfo-model')

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
    console.log('return sa viewFile :: ', req.body);
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

exports.viewStudents = (function (req, res){
    studentInfo.find(function (err, students){
        if (err){
            return res.send({error:err, status: false});
        }
        return res.send({status:true, data: students})
    })
})


