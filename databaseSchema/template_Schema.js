var mongoose = require('mongoose');
var template_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    defaultTemplate: {type: Boolean, default: false},
    angularTemplate: {type: Boolean, default: false}
        
});
module.exports = template_Schema;
