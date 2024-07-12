//constructor

// let x = new String('Anurag');
// console.log(x);
// let y = new Number(10);
// console.log(y);



//function Constructors
//classes are just wrapper over function
function Product(n,p){
    console.log("Hello There!");
    this.name=n;
    this.price=p;
    return{   //returning object
        x:10,
        y:20
    }

}
const obj = new Product("iphone",100000);  //newly created object
console.log(obj);

/*
1."this" in js is different than other lang
2."this" keyword refres to the context from where we call the function.
3."this" keyword is not applicable to "Arrow Function".
*/

/*POINTS TO REMEMBER:
1. if you dont return anything,js returns the newly created object.
2. if you return primitive, then also we get newly created object.
3. if you return custom object, then js will return this custom obj not the newly created obj.
*/