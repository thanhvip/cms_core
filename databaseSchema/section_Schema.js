//sectionSchema
var mongoose = require('mongoose');

var section_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    languageID: {type: mongoose.Schema.ObjectId, required: true, ref: "language"}
});
module.exports = section_Schema;
