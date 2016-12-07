var mongoose = require('mongoose');
var sys_function_role_Schema = new mongoose.Schema({
     functionID:{type: mongoose.Schema.ObjectId, required: true, ref: "sys_function"},
     roleID:{type: mongoose.Schema.ObjectId, required: true, ref: "sys_role"},
});
module.exports = sys_function_role_Schema;
