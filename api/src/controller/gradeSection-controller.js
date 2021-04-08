var section = require("../model/gradeSection-model");
var subjects = require("../model/subjects-model");
var studentInfo = require('../model/studentsInfo-model');
var teachersInfo = require('../model/teachersInfo-model');
var ObjectId = require('mongodb').ObjectID;



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

exports.populationTeacher = (req, res) => {
    const todaysDate = new Date()
    const currentYear = todaysDate.getFullYear()
    var listTeachers = []
    var listNonAdvisory = []
    var listNonAdvisoryData = []
    var listAdvisoryData = [];
    var listUniqueTeachers = []
    var id = ''
    let count = 0
    let teacherAdvisory = []
    // wla pani nabutngan ug currentYear
    // section.find().sort({_id:1});
    section.findOne(
        {}, { year: 1, _id: 0 },
        { sort: { _id: -1 } },
        (err, data) => {
            console.log(data, 'current');
            if (data) {
                section.find({ year: data.year }, { _id: 0 }, (err, teachers) => {
                    teachers.forEach(teacher => {
                        count += 1
                        if (listTeachers.indexOf(JSON.stringify(teacher.adviser)) >= 0) {
                        } else {
                            listTeachers.push(JSON.stringify(teacher.adviser))
                            listAdvisoryData.push(teacher.adviser)

                        }
                    });
                    if (count === teachers.length) {

                        listUniqueTeachers.push({ advisory: listTeachers.length })
                        let countAdviser = 0;
                        listAdvisoryData.forEach(element => {
                            teachersInfo.findOne({ _id: element }, { _id: 0, lastName: 1, firstName: 1, middleName: 1, nameExt: 1, employeeNumber: 1 }, (err, teacher1) => {
                                if (err) {
                                } else {
                                    section.find({ adviser: element }, { _id: 0, gradeLevel: 1, sectionName: 1 }, (err, result) => {
                                        teacherAdvisory.push({ adviserName: teacher1, sections: result })
                                        countAdviser += 1;
                                        if (countAdviser === listAdvisoryData.length) {
                                            teachersInfo.find({ activeStatus: "yes" }, { "_id": 1 }, (err, teachers) => {
                                                listUniqueTeachers.push({ allTeachers: teachers.length })
                                                listUniqueTeachers.push({ nonAdvisory: teachers.length - listTeachers.length })
                                                var count = 0;
                                                teachers.forEach(id => {
                                                    count += 1;
                                                    if (listTeachers.indexOf(JSON.stringify(id._id)) >= 0) {
                                                    } else {
                                                        listNonAdvisory.push((id._id))
                                                    }
                                                });
                                                if (count === teachers.length) {
                                                    count1 = 1;
                                                    listNonAdvisory.forEach(elements => {
                                                        teachersInfo.findOne({ _id: elements }, { "_id": 0, lastName: 1, firstName: 1, middleName: 1, nameExt: 1, employeeNumber: 1 }, (err, ress) => {
                                                            listNonAdvisoryData.push(ress);
                                                            count1 += 1;
                                                            if (count1 == listNonAdvisory.length) {
                                                                res.send({ data: listUniqueTeachers, advisory: teacherAdvisory, nonAdvisory: listNonAdvisoryData, schoolYear: data.year });
                                                            }
                                                        })
                                                    });

                                                }

                                            })
                                        }
                                    })
                                }
                            })




                            // console.log(countAdviser, listAdvisoryData.length)
                        });

                    }
                })
            }
        });

}

