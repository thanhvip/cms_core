var mongoose = require('mongoose');
var departmentSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    description:{type:String},
    orderNo: {type:String},
    parentID:{type: mongoose.Schema.ObjectId, required: true, ref: "deparment"},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
});
module.exports = departmentSchema;
