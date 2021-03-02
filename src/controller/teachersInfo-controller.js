var teachersInfo = require('../model/teachersInfo-model');

// Adding Teacher's Info
exports.addTeachersInfo = (req, res) => {
    teachersInfo.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(400).json({ 'msg': err })
        }
        if (user) {
            return res.status(400).json({ 'msg': "Error! It already exist" })
        }
        let addTeacher = teachersInfo(req.body);
        addTeacher.save((err, user) => {
            if (err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(200).json(user);
        })
    })
}

// Viewing Teacher's Info
exports.viewTeachersInfo = (req, res) => {
    teachersInfo.findById({ _id: req.body.id }, (err, teacher) => {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: teacher });
    })
}

// Update Teacher's Info
exports.updateTeachersInfo = (req, res) => { 
    teachersInfo.findByIdAndUpdate({_id: req.body._id})
}
