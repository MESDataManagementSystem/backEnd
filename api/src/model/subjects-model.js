var mongoose = require('mongoose');

subjects = new mongoose.Schema({
    studentId: { type: String, required: true },
    motherTongue: { type: Number, required: false },
    filipino: { type: Number, required: false },
    english: { type: Number, required: false },
    mathematics: { type: Number, required: false },
    science: { type: Number, required: false },
    aralingPanlipunan: { type: Number, required: false },
    eppTle: { type: Number, required: false },
    Mapeh: { type: Number, required: false },
    music: { type: Number, required: false },
    pe: { type: Number, required: false },
    arts: { type: Number, required: false },
    health: { type: Number, required: false },
    edukasyonSaPagpapakatao: { type: Number, required: false },
    arabicLanguage: { type: Number, required: false },
    islamicLanguage: { type: Number, required: false },
    quarter: { type: String, required: true },
    grade: { type: String, required: false },
    section: { type: String, required: false },
    currentGrade: {type: String, required: false}
})

module.exports = mongoose.model("Subjects", subjects);