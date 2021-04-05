var section = require("../model/gradeSection-model");
var subjects = require("../model/subjects-model");
var studentInfo = require('../model/studentsInfo-model')


exports.addSection = (req, res) => {
    section.findOne({ sectionName: req.body.sectionName.toLowerCase() }, (err, sections) => {
        if (err) {
            return res.status(400).json({ 'msg': err })
        }
        if (sections) {
            return res.status(400).json({ 'msg': 'Section Name already exist' })
        }
        let sectionName = section(req.body)
        sectionName.save((err, sections) => {
            if (err) {
                return res.status(400).json({ 'msg': err })
            }
            return res.status(200).json(sections);
        })
    })
}

exports.viewSection = (req, res) => {
    console.log(req.params.id)
    section.find({ gradeLevel: req.params.id })
        .populate({
            path: 'adviser',
            model: 'TeacherInfo',
            select: 'lastName firstName middleName'
        })
        .exec((err, section) => {
            if (err) {
                return res.send({ error: err, status: false });
            }
            return res.send({ status: true, data: section })
        })
}

exports.deleteSection = (req, res) => {
    section.deleteOne({ _id: req.params.id }, (err, sections) => {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: sections });
    })
}

exports.updateSection = (req, res) => {
    var data = {
        gradeLevel: req.body.gradeLevel,
        sectionName: req.body.sectionName,
        adviser: req.body.adviser
    }
    section.findByIdAndUpdate({ _id: req.params.id }, data, (err, sections) => {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: sections });
    })
}

exports.findStudentGrades = (req, res) => {
    // console.log(req)
    subjects.findOne({ studentId: req.params.id, quarter: req.body.quarter, currentGrade: req.body.grade, section: req.body.section }, (err, grades) => {
        if (err) {
            return res.send({ error: err, status: false })
        }
        return res.send({ status: true, data: grades })
    })
}

exports.findQuarter = (req, res) => {
    console.log('nisulod dire', req.body)
    // id = req.body.id
    subjects.find({ studentId: req.body.id.trim(), currentGrade: req.body.grade, section: req.body.section }, (err, subjects) => {
        console.log(subjects, 'subjects');
        if (err) {
            res.send({ error: err, status: false })
        }
        return res.send({ status: true, data: subjects })
    })
}

exports.updateStudentGrades = (req, res) => {
    console.log(req.params, req.body)
    const request = req.body;
    if (request.studentId
        && request.motherTongue
        && request.filipino
        && request.english
        && request.mathematics
        && request.science
        && request.aralingPanlipunan
        && request.eppTle
        && request.music
        && request.pe
        && request.arts
        && request.health
        && request.edukasyonSaPagpapakatao
        && request.quarter) {
        subjects.findByIdAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
            if (err) {
                return res.send({ error: err, status: false })
            }
            return res.send({ status: true, data: data })
        })
    } else {
        return res.send({ status: false, msg: 'error' })
    }
}

exports.addStudentGrades = (req, res) => {
    subjects.findOne({ studentId: req.body.studentId, quarter: req.body.quarter, currentGrade: req.body.grade }, (err, grades) => {
        if (grades) {
            console.log('existing');
            return res.send({ status: false, msg: 'Can only add once!' })
        } else {
            console.log('not existing')
            subjects(req.body).save((err, grades) => {
                if (err) {
                    return res.send({ error: err, status: false });
                }
                return res.send({ status: true, data: grades });
            })
        }
    })
}

exports.proceedNextGrade = (req, res) => {
    console.log(req.body)
    subjects.find({ studentId: req.body.id, grade: req.body.grade }, (err, response) => {
        console.log(response.length, 'length of response')
        if (err) {
            return res.send({ status: false, error: err })
        }
        if (response.length === 4) {
            let count = 0;
            response.forEach(section => {
                count += 1
                section.currentGrade = req.body.grade
                subjects.findByIdAndUpdate({ _id: section._id }, section, (error, updated) => {
                    if (error) {
                        return res.send({ status: false, error: error })
                    }

                })
            });
            if (count = 4) {
                studentInfo.findOne({ _id: req.body.id }, (error, result) => {
                    if (error) {
                        res.send({ status: false, result: result })
                    }

                    if (result) {
                        result.studentSection = req.body.section
                        result.studentGrade = req.body.currentGrade
                        studentInfo.findByIdAndUpdate({ _id: req.body.id, studentGrade: req.body.grade }, result, (err, data) => {
                            if (err) {
                                res.send({ status: false, error: err })
                            }
                            if (data) {
                                res.send({ status: true, data: data })
                            }
                        })
                    }
                })
                // return res.send({ status: true, data: data })
            }

        } else {
            return res.send({ status: false, error: 'Please complete the quarters!' })
            // console.log('gwapa ko')
        }
    })

}

