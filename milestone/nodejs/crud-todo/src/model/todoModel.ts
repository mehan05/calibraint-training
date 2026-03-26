import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
    },
    description:{
        type:String,
    },
    isCompleted:{
        type:Boolean,
        default:false       
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModelMarkOne"
    }
},{timestamps:true})

export const TodoModel = mongoose.model("TodoModelMarkOne",TodoSchema);