//position 
var mongoose = require('mongoose');
var product_group_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    description :{type:String,default:null},
    images:{type:String,default:null},
    orderNo:{type:Number,default:null},
    metaTitle:{type:String,default:null},
    metaKeyworkds:{type:String,default:null},
    metaDescription:{type:String,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
    ishot:{type:Boolean,default:null},
    isOnHome:{type:Boolean,default:null}
});
module.exports = product_group_Schema;
