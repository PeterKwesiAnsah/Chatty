const mongoose=require('mongoose')


const message=new mongoose.Schema({
    messageID:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
        default:' '
    }
    ,
    read:{
        type:Boolean,
        default:false,
        required:true

    },

},{timestamps:{currentTime:()=>new Date().toISOString()}})

const Message=mongoose.model('message',message)

module.exports=Message