var User = require('../model/user-model');
var config = require('../config/config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


function createToken(user) {
    return jwt.sign({ id: user.id, username: user.username, role: user.role }, config.jwtSecret, {
        expiresIn: 2000 // 86400 expires in 24 hours
    })
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
            return res.status(200).send({
                token: createToken(user)
            });
            // return res.send({status: true, user})
        } else {
            return res.status(400).json({ msg: 'The username and password don\'t match' });
        }

    });
};

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
            User.findOneAndUpdate({ role: req.params.role }, credentials, (err, user) => {
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
        adviser: req.body.adviser
    }
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(credentials.password, salt, function (err, hash) {
            credentials.password = hash
            User.findOneAndUpdate({ role: req.params.role }, credentials, (err, user) => {
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
exports.removeAccount = (function (req, res, next) {
    User.findOneAndRemove(req.params._id, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).json({ msg: data })
        }
    })
})
