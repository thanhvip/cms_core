var mongoose = require('mongoose');
var news_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    images:{type:String,default:null},
    detail:{type:String,default:null},
    description:{type:String,default:null},
    video:{type:String,default:null},
    CategoryID:{type: mongoose.Schema.ObjectId, required: true, ref: "news_category"},
    metaTitle:{type:String,default:null},
    metaKeywords:{type:String,default:null},
    metaDescription:{type:String,default:null},
    author:{type:String,default:null},
    source:{type:String,default:null},
    publishDate:{type:String,default:null},
    viewCount:{type:Number,default:null},
    createDate:{type:Date,default:null},
    createBy:{type:String,default:null},
    updateDate:{type:Date,default:null},
    updateBy:{type:String,default:null},
    isActive:{type:Boolean,default:true},
    tophot:{type:Date,default:null},
    topnew:{type:Date, default:null},
});
module.exports = news_Schema;