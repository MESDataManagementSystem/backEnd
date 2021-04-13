var User = require('../model/user-model');
var teachersInfo = require('../model/teachersInfo-model');
var config = require('../config/config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
const { find } = require('../model/teachersInfo-model');


function createToken(user) {
    if (user.role === 'Teacher') {
        console.log(user)
        return jwt.sign({ id: user, username: user.username, role: user.role, adviserId: user.adviser }, config.jwtSecret, {
            expiresIn: 2000 // 86400 expires in 24 hours
        })
    }
    if (user.role === 'Admin') {
        console.log(user)
        return jwt.sign({ id: user, username: user.username, role: user.role }, config.jwtSecret, {
            expiresIn: 2000 // 86400 expires in 24 hours
        })
    }

}

// Adding Acount
exports.registerUser = (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            return res.status(400).json({ 'msg': err });
        };
        if (user) {
            return res.status(400).json({ 'msg': 'username already exists' });
        }
        let newUser = User(req.body);
        newUser.save((err, user) => {
            if (err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(201).json(user);
        })
    })
}

// Login
exports.loginUser = (req, res) => {
    console.log(req.body);
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            return res.status(400).send({ 'msg': err })
        }
        if (!user) {
            return res.status(400).json({ 'msg': 'The user does not exist' })
        }
        const isMatch = user.comparePassword(user.password, req.body.password);
        if (isMatch) {
            return res.status(200).json({
                token: createToken(user),
                data: user
            });
        } else {
            return res.status(400).json({ msg: 'The username and password don\'t match' });
        }
    });
};

// Login  Admin
exports.loginAdmin = (req, res) => {
    User.findOne({ username: req.body.username}, (err, user) => {
        if (err) {
            return res.status(400).send({ 'msg': err })
        }
        if (!user) {
            return res.status(400).json({ 'msg': 'Only Admin Have the Access' })
        }
        if (user) {
            if(user.role == 'Admin'){
                const isMatch = user.comparePassword(user.password, req.body.password);
                if (isMatch) {
                    return res.status(200).json({
                        data: user
                    });
                } else {
                    return res.status(400).json({ msg: 'The username and password don\'t match' });
                }
            }
        }
    })
}

// Show The  Credentials
exports.getCredentials = (req, res) => {
    User.findOne({ role: req.params.role }, (err, user) => {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: user });
    })
}

// Update Admin's Credentials
exports.updateCredentials = (req, res) => {
    var credentials = {
        username: req.body.username,
        password: req.body.password
    }
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(credentials.password, salt, function (err, hash) {
            credentials.password = hash
            User.findOneAndUpdate({ _id: req.params.id }, credentials, (err, user) => {
                console.log(credentials)
                if (err) {
                    return res.send({ error: err, status: false })
                }
                return res.send({ status: true, data: user });
            })
        });
    });
}

// Update Teacher's Account     
exports.updateTeacherCredentials = (req, res) => {
    var credentials = {
        username: req.body.username,
        password: req.body.password,
    }
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(credentials.password, salt, function (err, hash) {
            credentials.password = hash
            User.findOneAndUpdate({ _id: req.params.id }, credentials, (err, user) => {
                console.log(credentials)
                if (err) {
                    return res.send({ error: err, status: false })
                }
                return res.send({ status: true, data: user })
            })
        })
    })
}

// find teacher account for update form
exports.findAccount = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: user });
    })
}

// View Teacher's Account
exports.viewTeacherAccount = (function (req, res) {
    User.find({ role: req.params.role }, function (err, user) {
        if (err) {
            return res.send({ error: err, status: false });
        }
        return res.send({ status: true, data: user })
    })
})

// Removing Teacher's Account
exports.removeAccount = (function (req, res) {
    User.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "Something went wrong with the id" })
        }
        else {
            res.status(200).json({ message: "Account Deleted Successfully" })
        }
    })
})

// find specific teacher
exports.findTeacher = (req, res) => {
    teachersInfo.aggregate([
        {
            $match: { _id: ObjectId(req.params.id) }
        },
        {
            $project: { "_id": 0, lastName: 1, firstName: 1, middleName: 1 }
        }
    ], (err, response) => {
        if (err) {
            return res.send(err)
        }
        return res.send(response)
    })
}

// view no advisory teachers 
exports.teacherNoAccount = (function (req, res) {
    var teachersNoAccount = []
    teachersInfo.aggregate([
        {
            $lookup:
            {
                from: "users",
                localField: "_id",
                foreignField: "adviser",
                as: "Teachers"
            }
        }
    ], 
    (err, response) => {
        if (err) {
            return res.send(err)
        }
        response.forEach(teacher => {
            if (teacher.Teachers.length == 0 && teacher.activeStatus == 'yes') {
                console.log('wala')
                var teacher = { _id: teacher._id, firstName: teacher.firstName, middleName: teacher.middleName, lastName: teacher.lastName }
                teachersNoAccount.push(teacher)
            } else {
                console.log('naa')
            }
        });
        return res.send(teachersNoAccount);
    })
});

