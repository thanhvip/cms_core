var mongoose = require('mongoose');
var deparmentPositionSchema = new mongoose.Schema({
   deparmentID: {type: mongoose.Schema.ObjectId, required: true, ref: "deparment"},
   positionID: {type: mongoose.Schema.ObjectId, required: true, ref: "position"}
});
module.exports = deparmentPositionSchema;
