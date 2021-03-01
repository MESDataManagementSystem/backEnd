var section = require("../model/gradeSection-model");

exports.addSection = (req, res) => {
    console.log(req.body)
    section.findOne({ sectionName: req.body.sectionName }, (err, sections) => {
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
    console.log(req.params.id )
    section.find({gradeLevel: req.params.id })
        .populate({
            path: 'adviser',
            model: 'TeacherInfo',
            select: 'lastName firstName middleName'
        })
        .exec((err, section) => {
            if (err) {
                return res.send({ error: err, status: false });
            }
            console.log(section, "sections ");
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