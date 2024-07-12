//One parameter and a single return statement
const square =(x)=>x*x; // no need of return statement in single line arrow function

//multiple parameter and a single return expression
const sumOfTwoNumber=(x,y)=>x+y;

//multiple statement in a function
const sum=(x,y)=>{
    console.log(`adding ${x} and ${y}`);
    return x+y; // return statement require in multistatement
};

//returning an object
const sumAndDifference=(x,y)=>({sum:x+y,difference:x-y});

//calling-function
console.log(square(5)); //25
console.log(sumOfTwoNumber(5,6));//11
console.log(sum(6,7));//13
console.log(sumAndDifference(19,5));// { sum: 24, difference: 14 }