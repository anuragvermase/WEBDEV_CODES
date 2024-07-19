require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/db.js')
const cors = require('cors')

const app = express();  

connectToDB();   //connect to DB

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRoutes = require("./routes/userRoutes.js")


app.use('/', userRoutes )

module.exports = app;