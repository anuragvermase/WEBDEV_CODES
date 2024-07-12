const express = require('express');

const app = express();

const PORT = 4000;
const HOSTNAME = "localhost";

app.get("/", (req, res)=>{
    res.send('<h1 style="color:red;" >Hello World!</h1>')
});
app.get("/about", (req, res)=>{
    res.send("About page!")
});
app.get("/contact", (req, res)=>{
    res.send("contact page!")
});

app.listen(PORT,()=>{
    console.log(`server started successfully at ${HOSTNAME}:${PORT}`);
})