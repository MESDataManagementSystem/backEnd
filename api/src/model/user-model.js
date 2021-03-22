var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var TeacherInfo = require("../model/teachersInfo-model");


userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: "username is required" },
    password: { type: String, required: "password is required" },
    adviser: { type: mongoose.Schema.Types.ObjectId, ref: TeacherInfo, required: true, unique: true },
    role: { type: String, required: true }
})

userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
})

userSchema.methods.comparePassword = function (password, hashedPassword) {
    const result = bcrypt.compareSync(hashedPassword, password);
    return result;
}

module.exports = mongoose.model('User', userSchema);