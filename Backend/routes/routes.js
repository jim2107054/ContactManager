import express, { Router } from 'express';
import { HomeRouter } from '../controllers/Home.Router.js';
import User from '../models/user.model.js';

const userRouter = express(Router());

userRouter.get('/',HomeRouter)
userRouter.get('/contacts', async (req, res) => {
    res.status(200).json(User)
})
userRouter.post('/contacts', async (req, res) => {
    const {nid,name,Phone,email,Division} = req.body;
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
        res.status(500).json({message.error.message})
    }
})
export default userRouter;