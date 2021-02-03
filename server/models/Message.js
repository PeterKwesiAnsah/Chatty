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
},{timestamps:true})

const Message=mongoose.model('message',message)

module.exports=Message