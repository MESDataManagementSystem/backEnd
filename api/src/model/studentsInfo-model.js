var mongoose = require('mongoose');

studentsInfoSchema = new mongoose.Schema({
    studentLastName: {type: String, required: "Student's last name is required."},
    studentFirstName: {type: String, required: "Student's first name is required."},
    studentNameExtn:{type: String, required: false},
    studentMiddleName: {type: String, required: false},
    studentLRN: {type: Number, required: "Student's LRN is required."},
    studentBirthdate: {type: Date, required: "Student's date of birth is required."},
    studentSex: {type: String, required: "Student's sex is required."},
    studentCredentialPresentedForGrade: { type: [String], required: "Student's credentials presented for grade is required."},
    studentNameOfSchoolFromKinder:{ type: String, required: "Student's name of school from kinder is required."},
    studentSchoolId: {type: Number, required: "Student's school ID during kinder is required."},
    studentSchoolAddress: {type: String, required: true, trim: true},
    studentPeptPasserRating: {type: Number, required: true, trim: true},
    studentDateOfxamination: {type: Date, required: true, trim: true},
    studentOthers: {type: [String], required: false},
    studentNameAdressOfTestingCenter: {type: String, required: true, trim: true},
    studentRemark: {type: Number, required: true, trim: true}
})

module.exports = mongoose.model("StudentInfo", studentsInfoSchema);