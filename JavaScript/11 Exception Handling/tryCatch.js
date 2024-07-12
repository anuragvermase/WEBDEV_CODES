/* The try...catch statement is comprised of a try block and either a catch block, 
a finally block, or both. The code in the try block is executed first, and if it throws an exception, 
the code in the catch block will be executed. 
The code in the finally block will always be executed before control flow exits the entire construct. */

function isEvenOrOdd(x){
  try{
    if(x%2==0){
        console.log("Even");
    }else{
        console.log("Odd")
    }
    console.lg("ended")  // Syntax error in this line
  }catch(err){          //err- shows the err. without break flow of the code
    console.log("Handeled",err);
  }
  finally{
    console.log("finally");
  }
}

isEvenOrOdd(101);