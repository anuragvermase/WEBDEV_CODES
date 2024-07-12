// Node.js includes built-in module called file system (fs)
//to use this modules, call the require() method

// const { log } = require('console');    
const fs = require('fs');

// Asysnchronous
/*
console.log("Start");
fs.readFile("file.txt",function(err,data){
    if(err){
        console.log("Error" , err);
    }
    console.log("file read successfully: ", data.toString());
})
console.log("End");
*/

/*
Sequence follows:

Start
End
file read successfully:  HELLO GREAT TO SEE YOU!!!
*/

//Synchronous
/*
console.log("Start");  
try{                                          //How Errors handle in Synchronous 
var data = fs.readFileSync("fil.txt");  
console.log(data.toString());
}catch(err){
    console.log("Error");
}

console.log("End");
*/
/* 
Sequence follow:

Start
HELLO GREAT TO SEE YOU!!!
End
*/

// Opening file = open file + read file + closing file
/*
const buff = new Buffer(1024); //generating buffer
const filePath ="D:\\PW_WEBDEV_CODES\\NodeJs\\BuiltInModules\\file.txt";
fs.open(filePath, 'r+', function(err, fd){
    if (err) {
        console.log("error in opening file", err);
    }else{
        console.log("file open successfully.");
    }
    // read : you get the data in byte format
    fs.read(fd, buff, 0, buff.length, 0, function(err, byte){   //deta store in buffer in byte format
        if (err) {
            console.log("error in reading file");
            
        }
        console.log("susccessfully reading");
        console.log("Data : " , buff.slice(0, byte).toString()); // data stores in buffer so converts into string
        fs.close(fd, function(err){
            if(err){
            console.log("error in closing file");
            }
        console.log("successfully closed");
        })
    })
});
*/

// write
/* 
fs.writeFile("file.txt", "hello world!!!", function(err){
    if (err) {
        console.log("error in writing file");
    }
    console.log("success in writing file");

})
 
// synchronous way
try {
    fs.writeFileSync("file.txt", "hii , how are you");
    console.log("successfully write in file");
} catch (error) {
    console.log("error in writing file");
}
// fs.writeFileSync("file.txt", "hey , how are you");

 */

//append
/*
fs.appendFile("file.txt", "\nI'm fine as always", function(error){
    if (error) {
        console.log("error in appedning");
    }
    console.log("successfully appended");
    
})
*/

//delete file
fs.unlink("file.txt",function(error){
    if (error) {
        console.log("error in deleting file");
    }
    console.log("file deleted successfully");
})