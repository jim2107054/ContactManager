import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nid:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Division:{
        type:String,
        required:true
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);
export default User;