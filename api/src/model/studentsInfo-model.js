var mongoose = require('mongoose');

studentsInfoSchema = new mongoose.Schema({
    studentLastName: { type: String, required: true },
    studentFirstName: { type: String, required: true },
    studentNameExtn: { type: String, required: false },
    studentMiddleName: { type: String, required: false },
    studentLRN: { type: Number, required: "Student's LRN is required.", unique: true },
    studentBirthdate: { type: Date, required: "Student's date of birth is required." },
    studentSex: { type: String, required: "Student's sex is required." },
    studentCredentialPresentedForGrade1: { type: [String], required: false },
    studentNameOfSchoolFromKinder: { type: String, required: false },
    studentSchoolId: { type: Number, required: false },
    studentSchoolAddress: { type: String, required: false, trim: true },
    studentPeptPasserRating: { type: Number, required: false, trim: true },
    studentDateOfxamination: { type: Date, required: false, trim: true },
    studentOthers: { type: [String], required: false },
    studentNameAdressOfTestingCenter: { type: String, required: false, trim: true },
    studentRemark: { type: Number, required: false, trim: true },
    studentSection: { type: String, required: false, trim: true },
    studentGrade: { type: String, required: false, trim: true }
})

module.exports = mongoose.model("StudentInfo", studentsInfoSchema);