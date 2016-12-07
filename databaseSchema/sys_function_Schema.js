var mongoose = require('mongoose');
var sys_function_Schema = new mongoose.Schema({
     name:{type:String,require:true},
     code:{type:String,default:null},
     order:{type:Number,default:null},
     isActive:{type:Boolean,default:true}
});
module.exports = sys_function_Schema;
