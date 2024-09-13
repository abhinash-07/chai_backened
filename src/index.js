import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()
.then (()=>{
   app.listein (process.env.PORT || 8000 , ()=>{
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
   })
})
.catch((err)=>{
     console .log("mongo db connection failed", err);
})


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
  