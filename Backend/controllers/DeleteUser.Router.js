import User from "../models/user.model.js";

export const DeleteUser = async (req, res) => {
    const {nid} = req.body;
    try{
        if(!nid){
            return res.status(400).json({message:"Please Provide your NID to identify you"})
        }
        const isUserExist = await User.find({nid});
        //if user not found
        if(isUserExist.length === 0){
            return res.status(404).json({message:"User Not Found"})
        }
        //if user found
        const user = await User.deleteOne({nid},{new:true});
        res.status(200).json({message:"User Deleted Successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}