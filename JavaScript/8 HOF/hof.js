//HOF- functions that takes other function as arguments or return functions as their results.

//prog. to print cude by hof
const powerTwo=(n)=>{
    return n**2;
}
//function take another function as an argument
function powerCube(powerTwo,n){
    return powerTwo(n)*n;
}
console.log(powerCube(powerTwo,5)); //125



// function to use a func. as return type
function sayHello(){
    return ()=>{
        console.log("Hello Anurag!");  // function as return type
    }
}

console.log(sayHello()); //[Function (anonymous)]



//functions inside  a function
const higherFunction=(n)=>{
    const funcOne=(m)=>{
        const funcTwo=(p)=>{
            return n+m+p;
        }
        return funcTwo;
    }
    return funcOne;
}

console.log(higherFunction(5)(10)(20));



//To print all array elements
//this is HOF function - function as parameter
const myNums=[2,3,4,5];
const sumArray=arr=>{
    let total=0;
    arr.forEach(function(element){    //for.each()
        total+=element;
    });
    return total;
}
console.log(sumArray(myNums));



//setInterval & setTimeout
function oneMoreHello(){
    console.log("Hello Great!",Math.random());
}
// Repeat task after a set interval of time
setInterval(oneMoreHello,1000);
//Wait till timeout, to execute after timeout
setTimeout(oneMoreHello,2000);   