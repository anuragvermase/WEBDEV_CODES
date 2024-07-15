// const express = require('express')
import mongoose from "mongoose";
import app from "./app.js"  //import app from app.js

const port = 3000
const dbString = 'mongodb+srv://anuragvermase:Anu123@45@cluster0.fpqrxvy.mongodb.net/';
// mongoose.connect(dbString);
// TODO: use env for such sensitive values

// More better or profressional way to write.
(async()=>{
    try {
        await mongoose.connect(dbString);
        console.log("DB connected successfully !");
        
        // app listener : app might crashes 
        app.on("error", (err) => {
            console.log(err);
            throw err;
        })
        // only make our app running/listen if database connected
        const onListening = () => {
            console.log(`Example app listening on port ${port}`)
        }
        
        app.listen(port,onListening)
    } catch (error) {
        console.error("Error : ", error);
        throw error;
    }
})()


