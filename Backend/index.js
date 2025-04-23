import express from 'express';
import { connectDB } from './config/db.js';

const app = express();

const port = 8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("ContactMager")
})

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})