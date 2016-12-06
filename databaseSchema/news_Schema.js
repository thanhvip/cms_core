var mongoose = require('mongoose');
var newsSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    images:{type:String},
    detail:{type:String},
    description:{type:String},
    video:{type:String},
    CategoryID:{type: mongoose.Schema.ObjectId, required: true, ref: "news_category"},
    metaTitle:{type:String},
    metaKeywords:{type:String},
    metaDescription:{type:String},
    author:{type:String},
    source:{type:String},
    publishDate:{type:String},
    viewCount:{type:String},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
    tophot:{type:Date,default:null},
    topnew:{type:Date, default:""},
});
module.exports = newsCategorySchema;