
import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

/* async ka use un functions m karte hai jaha result aane m time lag skta hai jese mongodb se data mangaane m 
await us async waale function ko wait karata hai jab tak output nhi mil jaata 
async se jo output milta hai vo promise ki form m milta hai us par string wale operstions perform nhi kar skte 
 to await use output ko string m return karne m bhi hamari help karta hai*/
const connectDB = async ()=>{
  try{
  const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log(`\n MongoDB connected !! DB HOST:
    ${connectionInstance.connection.host}`);
  } catch(error){
    console.log("MONGODB connection error",error);
    process.exit(1)
  }
}

export default connectDB