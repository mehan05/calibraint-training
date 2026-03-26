import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"usename required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    todos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TodoModelMarkOne"
    }]
})

export const UserModel = mongoose.model("UserModelMarkOne",UserSchema);
