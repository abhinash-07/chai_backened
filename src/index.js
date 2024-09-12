import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB();



/*
(async()=>{
   try{
      await mongoose.connnect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Connected to the database successfully")
   }catch(error){
     console.error("ERROR : " , error)
     throw err
   }
})()
   */
  