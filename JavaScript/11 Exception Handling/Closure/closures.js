/*closure gives you access to an outer functions scope from an 
 inner function. In javaScript closures are created every time 
 a function is created, at function creation time*/

 function outerFunc(){
    let outerValue="outside value";
    function innerFunc(){
        console.log(outerValue);//inner function having scope of outer value, ie. it is closure
    }
    innerFunc()
 }
 outerFunc()

//  eg- of closure

const errorMessage="file not found" 

setTimeout(function callback(){ //access of -errorMessage
},4000)

// another eg of closure

let viewCount=0;
const items =[2,4,6,7];
items.forEach(function iterator(num){
    viewCount++;
    console.log(num);
})
console.log("View Count ",viewCount);