import User from "../models/user.model.js";

export const ContactRouter = async (req,res)=>{
    const {nid,name,Phone,email,Division} = req.body;// req.body will come from the frontend
    try{
        const user = await User.create({
            nid,
            name,
            Phone,
            email,
            Division
        })
        res.status(201).json({message:"User Created Successfully",user})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}