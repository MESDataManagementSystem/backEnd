var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

adminSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: "username is required" },
    password: { type: String, required: "password is required" },
    email: { type: String, required: "email is required" }
})

adminSchema.pre('save', function (next) {
    var admin = this;
    if (!admin.isModified('password')) return next();
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(admin.password, salt, function (err, hash) {
            if (err) return next(err);
            admin.password = hash;
            next();
        })
    })
})

adminSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.comparePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    }
}

module.exports = mongoose.model('Admin', adminSchema);