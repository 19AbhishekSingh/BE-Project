import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();
connectDB()













// import mongoose from 'mongoose'
// import {DB_NAME} from "./constatnts"

// (async() =>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     } catch(err) {
//         console.error(err);
//     }
// })()