var admin = require('../model/admin-model')
var config = require('../config/config');
var jwt = require('jsonwebtoken');

function createToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, {
        expiresIn: 200
    })
}

exports.registerUser = (req, res) => {
    admin.findOne({username: req.body.username}, (err, user) => {
        if(err) {
            return res.status(400).json({'msg': err});
        };
        if(user) {
            return res.status(400).json({'msg': 'The username already exists'});
        }
        let newUser = admin(req.body);
        newUser.save((err, user)=> {
            if(err){
                return res.status(400).json({'msg': err});
            }
            return res.status(201).json(user);
        })
    })
}

exports.loginAdmin = (req, res) => {
    admin.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            return res.status(400).send({ 'msg': err });
        }
 
        if (!user) {
            return res.status(400).json({ 'msg': 'The user does not exist' });
        }
 
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                return res.status(200).json({
                    token: createToken(user)
                });
            } else {
                return res.status(400).json({ msg: 'The email and password don\'t match.' });
            }
        });
    });
};