var mongoose = require('mongoose');
var sys_menu_role_Schema = new mongoose.Schema({
     menuID:{type: mongoose.Schema.ObjectId, required: true, ref: "sys_menu"},
     roleID:{type: mongoose.Schema.ObjectId, required: true, ref: "sys_role"},
});
module.exports = sys_menu_role_Schema;
