var mongoose = require('mongoose');
var sys_menu_Schema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,default:null},
    link:{type:String,default:null},
    target:{type:String, default:null},
    orderNo:{type:Number,default:null},
    cssClass:{type:String,default:null},
    parentID:{type: mongoose.Schema.ObjectId, required: true, ref: "sys_menu"},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true} 
});
module.exports = sys_menu_Schema;
