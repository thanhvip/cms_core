var mongoose = require('mongoose');
var sys_action_log_Schema = new mongoose.Schema({
    username: {type: String, required: true, trim: true},
    actionDate:{type:Date,default:""},
    actionName:{type:String},
    ipAddress:{type:String},
    macAddress:{type:String},
    type:{type:String},
    message:{type:String},
    innerException:{type:String},
    userAgent: {type:String},
    rawUrl: {type:String},
    method:{type:String}
});
module.exports = sys_action_log_Schema;
