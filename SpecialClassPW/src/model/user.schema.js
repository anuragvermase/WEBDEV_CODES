import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    { 
        name: {
            type: String,
            required : [true, "Name is required field"],
            maxLength : [50, "name should not exceed 50 characters"]
        }, 
        email:{
            type: String,
            unique : true
        },
        username: {
            type : String,
            unique : true
        },
        password: {
            type : String
        },
        size: String 
    }
);

export default mongoose.model("User", userSchema);

// In DB it is users or products