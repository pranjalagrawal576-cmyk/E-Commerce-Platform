
import mongoose from "mongoose";
export default mongoose.model("User", new mongoose.Schema({
  email:String,
  password:String,
  isAdmin:{type:Boolean,default:false}
}));
