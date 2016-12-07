//position 
var mongoose = require('mongoose');
var position_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    description :{type:String,default:null},
    orderNo:{type:Number,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
});
module.exports = position_Schema;
