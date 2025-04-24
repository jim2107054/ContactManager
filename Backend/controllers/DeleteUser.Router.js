import User from "../models/user.model.js";

// Controller to handle user deletion
export const DeleteUser = async (req, res) => {
    try {
        if (!nid) {
            return res.status(400).json({
                status: "error",
                message: "Please provide your NID to identify you."
            });
        }

        // Check if user exists
        const isUserExist = await User.find({ nid });

        if (isUserExist.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "User Not Found"
            });
        }

        // Delete user
        await User.deleteOne({ nid });

        return res.status(200).json({
            status: "success",
            message: "User Deleted Successfully"
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            error: error.message
        });
    }
};
