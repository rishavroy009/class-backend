const mongoose =require('mongoose')
const schema=mongoose.Schema(
    {
        title:String,
        desc:String,
        status:String,
        date:{type:Date,default:Date.now()}
    }
);
const Note=mongoose.model('Note',schema);
module.exports={Note}