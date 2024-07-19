const User = require('../models/users.schema.js')

exports.home = (req,res)=>{
    res.send("<h1>Home response</h1>")
}

exports.createUser = async(req, res)=>{
    try {
        const {name, email} = req.body

        if(!name || !email){
            throw new Error('Name and email are required')
        }

        //check is the user is already registered
        const userExists =await User.findOne({email})

        if (userExists) {
            throw new Error('User already exists')
        }
        
        const user = await User.create({
            name,
            email 
        })
        res.status(201).json({
            success : true,
            message : "User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
} 

exports.getUsers = (req,res)=>{}
exports.editUsers = (req,res)=>{}
exports.deleteUser = (req,res)=>{}