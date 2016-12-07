//userSchema
var mongoose = require('mongoose');

var sys_user_Schema = new mongoose.Schema({
    username: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    passwordHash: {type: String,default:null},
    firstName: {type:String, required: true,trim: true},
    lastName:{type:string,required: true,trim: true},
    avatar:{type:String,default:null},
    email:{type:String,required: true, trim: true},
    mobile:{type:String,default:null},
    address:{type:String,default:null},
    sex:{type:Boolean,default:true},
    birthday:{type:String,required: true},
    point:{type:Number,default:null},
    token:{type:String,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true},
    lastLoginDate:{type:Date,default:null},
    lastChangePassword:{type:Date,default:null},
    roleID: {type: mongoose.Schema.ObjectId, required: true, ref: "sys_role"}
});
module.exports = sys_user_Schema;