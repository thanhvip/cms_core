//locationSchema
var mongoose = require('mongoose');

var location_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    menu: {type: Boolean, default: false}
});
module.exports = location_Schema;
    