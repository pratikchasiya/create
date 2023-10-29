const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const user=mongoose.model('user',userSchema)/* in mongodb database collection name is user  */

module.exports=user