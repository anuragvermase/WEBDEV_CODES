require('dotenv').config();
const express = require('express');
const connectTODB = require('./config/db.js')
const {home} = require('./controllers/userController.js')

const app = express();  

connectTODB();   //connect to DB

const userRoutes = require("./routes/userRoutes.js")


app.use('/', userRoutes )

module.exports = app;