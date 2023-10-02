const mongoose=require('mongoose');
const loginSchema=mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
}
)
 const registerSchema=mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    Username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
 })
const messageSchema = mongoose.Schema({
    sender : {
        type : String,
        required : true
    },
    info : {
        type : [String],
        required : true
    }
}) 

const loginModel = mongoose.model('login',loginSchema);
const registerModel = mongoose.model('register',registerSchema);
const messageModel = mongoose.model('message',messageSchema);




module.exports={
    loginModel,
    registerModel,
    messageModel
}
