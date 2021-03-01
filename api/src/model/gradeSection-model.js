var mongoose = require("mongoose");
var TeacherInfo = require("../model/teachersInfo-model");

gradeSectionSchema = new mongoose.Schema({
    gradeLevel: { type: String, required: "Grade Level is required" },
    sectionName: { type: String, required: "Section Name is required" },
    adviser: { type: mongoose.Schema.Types.ObjectId, ref: TeacherInfo, required: "Adviser's Name is required" },
    year: { type: Date, required: "School year is required" }

})

module.exports = mongoose.model('GradeSection', gradeSectionSchema);


