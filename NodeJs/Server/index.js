const http = require('http');

const PORT = 3003;

const hostName = 'localhost';

const server = http.createServer((req, res)=>{
    // res.statusCode = 500; //500 Internal Server Error
    if (req.url==='/') {
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json");
        res.end(JSON.stringify({"name ": "Great"}));
    }else if(req.url=='/about'){
        res.statusCode = 200;
        res.setHeader("content-Type", "text/plain");
        res.end("this is about section");

    }else if(req.url=='/profile'){
        res.statusCode = 200;
        res.setHeader("content-Type", "text/plain");
        res.end("this is profile section");
        
    }
    else{
        res.statusCode = 500;
        res.setHeader("content-Type", "text/plain");
        res.end("Page Not found");
    }
  
});

server.listen(PORT, ()=>{
    console.log(`your server is running on ${hostName}:${PORT}`);
});