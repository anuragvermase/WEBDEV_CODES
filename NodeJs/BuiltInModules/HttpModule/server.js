const http = require('http');
//server created
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("<h1>hello great, server created!!!</h1>")
    }
    if(req.url=='/great'){
        res.write("<h2>welcome! to great section</h2>")
    }
    res.end();

})
//server started
server.listen("5006");
console.log("server created at port number 5006");