var User = require('../model/user-model');
var config = require('../config/config');
var jwt = require('jsonwebtoken');

function createToken(user) {
    if(user.role === 'Teacher'){
        console.log(user)
        return jwt.sign({ id: user, username: user.username,  role: user.role, adviserId: user.adviser }, config.jwtSecret, {
            expiresIn: 2000 // 86400 expires in 24 hours
        })
    }
    if(user.role === 'Admin'){
        console.log(user)
        return jwt.sign({ id: user, username: user.username,  role: user.role }, config.jwtSecret, {
            expiresIn: 2000 // 86400 expires in 24 hours
        })
    }
 
}
function createTokenSection(section) {
    return jwt.sign({ section: section }, config.jwtSecret)
}
exports.registerUser = (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            return res.status(400).json({ 'msg': err });
        };
        if (user) {
            return res.status(400).json({ 'msg': 'The username already exists' });
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
                  data:user
            });
        } else {
            return res.status(400).json({ msg: 'The username and password don\'t match' });
        }

    });
};

