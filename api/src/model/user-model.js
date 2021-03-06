var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: "username is required" },
    password: { type: String, required: "password is required" },
    email: { type: String, required: false }
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

userSchema.methods.comparePassword = function (hashedPassword) {
    // bcrypt.compare(hashedPassword, this.password,(err, isMatch) => {
    //     if (err) return cb(err);
    //     cb(null, isMatch)
    // })
    return bcrypt.compareSync(hashedPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);