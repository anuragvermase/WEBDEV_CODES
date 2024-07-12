// include module 
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write("<h1>Hello to server!</h1>")
    }
    if(req.url=='/anurag'){
        res.write("<h2>This page dedicated to Great</h2>")

    }
    res.end();
})

server.listen("5010");
console.log("server created succesfully");