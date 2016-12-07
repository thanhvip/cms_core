//position 
var mongoose = require('mongoose');
var product_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    code:{type:String,default:null},
    price:{type:Buffer,default:null},
    priceOld:{type:Buffer,default:null},
    images:{type:String,default:null},
    model:{type:String,default:null},
    warranty:{type:String,default:null},
    promotion:{type:String,default:null},
    taxVAT:{type:Boolean,default:false},
    policy:{type:String,default:null},
    source:{type:String,default:null},
    manual:{type:String,default:null},
    description :{type:String,default:null},
    dateOfManufacture:{type:Date,default:null},
    dateExpiration:{type:Date,default:null},
    details:{type:String,default:null},
    metaTitle:{type:String,default:null},
    metaKeyworkds:{type:String,default:null},
    metaDescription:{type:String,default:null},
    viewCount:{type:Number,default:null},
    groupID:{type: mongoose.Schema.ObjectId, required: true, ref: "product_group"},
    tophot:{type:Date,default:null},
    topnew:{type:Date,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true} 
});
module.exports = product_Schema;