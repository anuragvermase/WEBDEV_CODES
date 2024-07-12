//function to add four numbers and then return to multiply them
//addFunction
function addFourNumber(a,b,c,d){
    let sum = a+b+c+d;
    console.log(sum);
    return sum;    //return statement
 
}

let x = addFourNumber(1,2,3,4); //calling function and allot to x
let y = addFourNumber(5,6,7,8); //calling function and allot to y

//multiplyFunction
function multiply(p,q){
    let result= p*q;
    console.log(result);
}

multiply(x,y); //function calling
