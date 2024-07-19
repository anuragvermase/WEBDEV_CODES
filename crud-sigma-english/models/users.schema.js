const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true ,"Name is required"],
        trim : true,
        maxLength: [30, "Name character should not exceeds 30 character"]

    },
    email : {
        type : String,
        unique : true,
        required : [true, "Email is required"]

    }
})

module.exports = mongoose.model("User", userSchema)