import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async()=>{
    try {
       const connectinstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`mongodb connected , dbhost${connectinstance.connection.host}`);


        
        
    } catch (error) {

        console.log("mongodb connection error",error);
        process.exit(1)

        throw error
        
    }
}

export default connectDB;