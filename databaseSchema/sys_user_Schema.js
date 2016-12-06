//userSchema
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    passwordHash: {type: String},
    firstName: {type:String, required: true,trim: true},
    lastName:{type:string,required: true,trim: true},
    avatar:{type:String},
    email:{type:String,required: true, trim: true},
    mobile:{type:String},
    address:{type:String},
    sex:{type:Boolean,default:true},
    birthday:{type:String,required: true},
    point:{type:String},
    token:{type:String},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true},
    lastLoginDate:{type:Date,default:null},
    lastChangePassword:{type:Date,default:null},
});
module.exports = userSchema;