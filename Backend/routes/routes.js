import express, { Router } from 'express';
import { HomeRouter } from '../controllers/Home.Router.js';
import { ContactRouter } from '../controllers/Contact.Router.js';
import { ShowAllUserRouter } from '../controllers/ShowAllUser.Router.js';
import { UpdateUser } from '../controllers/UpdateUser.Router.js';
import { DeleteUser } from '../controllers/DeleteUser.Router.js';

const userRouter = express(Router());

userRouter.get('/',HomeRouter)
userRouter.post('/create', ContactRouter);       // create user
userRouter.get('/contacts',ShowAllUserRouter)    // show all users
userRouter.put('/update',UpdateUser);            // update user
userRouter.delete('/delete',DeleteUser)          // delete user


export default userRouter;