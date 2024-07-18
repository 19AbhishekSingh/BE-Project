import mongoose from 'mongoose'
import { DB_NAME } from '../constatnts.js';

const connectDB = async() => {
    try{
const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 
console.log(`connected DBHOST:${connectionInstance.connection.host}`)
    } catch(error){
        console.log("Error connecting",error)
    }
}

export default connectDB; 