import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database has been connected');
        
    } catch (error) {
        throw new Error('There was a problem trying to connect with database')
    }
}

export default dbConnection