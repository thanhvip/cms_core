var mongoose = require('mongoose');
var user_department_position_Schema = new mongoose.Schema({
     positionID:{type: mongoose.Schema.ObjectId, required: true, ref: "position"},
     deparmentID:{type: mongoose.Schema.ObjectId, required: true, ref: "deparment"},
     userID:{type: mongoose.Schema.ObjectId, required: true, ref: "sys_user"},
});
module.exports = user_department_position_Schema;