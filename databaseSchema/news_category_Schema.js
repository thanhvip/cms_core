var mongoose = require('mongoose');
var news_category_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    images:{type:String,default:null},
    description:{type:String,default:null},
    orderNo: {type:Number,default:null},
    parentID:{type: mongoose.Schema.ObjectId, required: true, ref: "news_category"},
    metaTitle:{type:String,default:null},
    metaKeywords:{type:String,default:null},
    metaDescription:{type:String,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
});
module.exports = news_category_Schema;