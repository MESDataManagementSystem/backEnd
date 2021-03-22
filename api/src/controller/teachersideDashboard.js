// ALL TEACHER SIDE CONTROLS
var section = require("../model/gradeSection-model");

exports.findAdviser = (req, res) => {
    section.find({adviser: req.params.id}, (err, response) => {
        if(err){
            res.send({status: false, error: err})
        }
        return res.send({status: true, data: response})
    })
}