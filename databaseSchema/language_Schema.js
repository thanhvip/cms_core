//languageSchema
var mongoose = require('mongoose');

var language_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    defaultLanguage: {type: Boolean, default: false},
    code: {type: String, required: true, trim: true}
});
module.exports = language_Schema;
    