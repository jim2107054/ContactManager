import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/DB.js';
import userRouter from './routes/routes.js';

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))

// middleware
app.use(express.json());
app.use("/",userRouter)

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})