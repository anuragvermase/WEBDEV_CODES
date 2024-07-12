//Spread Operator 
const one = [1,2,3,4,5];
const two = [6,7,8,9];

//concat by using concat mehod.
// const three = one.concat(two);
// console.log(three);

const three1 = [...one,...two];  // (...) use as spread operator (it just spread around the value)
console.log(three1);


//Rest Operator

//Normal function
function manyArgument(){
    let args = Array.from(arguments) //forms an array
    const myArr = args.map(el=>el*2) //iterate by map-loop method
    console.log(myArr);
}

//by rest operator
function manyArgumentV2(...args){  //(...) here 3-dot use as rest operator - (pack them into an array)
    const myArr = args.map(el=>el*2);
    console.log(myArr);
}
manyArgument(2,3); //[ 4, 6 ]
manyArgumentV2(4,3,16); //[ 8, 6, 32 ]
manyArgumentV2(2,3); //[ 4, 6 ]


//some more examples
//1
const heros = ["spider-man", "saktimaan"];
const herosV2 = ["Thor", "captain marvel",...heros,"hulk"];  //...heros work as spread operator
console.log(herosV2);

//2
const student = "Anurag Verma";
const studentV2 = [...student]; // ...student also works as spread operator
console.log(studentV2);

//3
function fruit(...args){   //...args use as rest operator- (it packs them into an array)
    console.log(args);
}
fruit("mango","apple");
