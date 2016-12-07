//categorySchema
var mongoose = require('mongoose');

var category_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    languageId: {type: mongoose.Schema.ObjectId, required: true, ref: "language"}
});
module.exports = category_Schema;