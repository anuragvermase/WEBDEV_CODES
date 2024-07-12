/*anonymous function: function without a function name, 
anonymous function assign function to a variable*/
let x=function(name){
    console.log("hello",name);
}

x("Anurag!");

/*Immediately invoked function execution(IIFE): enclosed in braces
after that give the argument- it  is immediately called function*/

(function(x,y){
    console.log(x+y)
})(5,6); //function call

