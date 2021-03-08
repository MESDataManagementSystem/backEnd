var studentInfo = require('../model/oldFiles-model')

exports.viewListOfOldFiles= (function (req, res) {
    studentInfo.find(function (err, studentOldfile) {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: studentOldfile });
    });
});

exports.viewFile = (function ( req, res){
    return res.send({status: true, data: req.body});
})

