var mongoose = require("mongoose");

oldFilesSchema = new mongoose.Schema({
    fullName: { type: String, required: "Full name is required" },
    lrn: { type: String, required: "LRN is required", unique: true },
    fileUrl: { type: String, required: "file is required" }
})

module.exports = mongoose.model('oldFiles', oldFilesSchema);


