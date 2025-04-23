import User from "../models/user.model.js";

export const UpdateUser = async (req, res) => {
    const { nid, name, Phone, email, Division } = req.body;
    try {
        if(!nid){
            return res.status(400).json({message:"Please Provide your NID to identify you"})
        }
        const isUserExist = await User.find({ nid });
        // console.log(isUserExist);

        if (isUserExist.length === 0) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const user = await User.findOneAndUpdate(
            { nid },
            { nid, name, Phone, email, Division },
            { new: true }
        );

        res.status(200).json({ message: "User Updated Successfully"});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}