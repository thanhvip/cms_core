var mongoose = require('mongoose');
var newsCategorySchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    images:{type:String},
    description:{type:String},
    orderNo: {type:String},
    parentID:{type: mongoose.Schema.ObjectId, required: true, ref: "news_category"},
    metaTitle:{type:String},
    metaKeywords:{type:String},
    metaDescription:{type:String},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
});
module.exports = newsCategorySchema;