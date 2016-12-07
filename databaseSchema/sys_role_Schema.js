var mongoose = require('mongoose');
var sys_role_Schema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true} 
});
module.exports = sys_role_Schema;