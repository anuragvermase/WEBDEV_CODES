// class - bluprint
// Object - real world entity
class Product{
    constructor(n,p){
        console.log("hello There");
        this.name=n;  // this keyword- refers to the the same empty object we created
        this.price=p; //data members
    }
    display(){  //class method- are noting but functions, they represent behaviour-> also call as Member Function
        console.log("displaying a product", this.name, this.price);
    }
}
const obj = new Product("vivo",22000);
console.log(obj);

obj.display();

// NOTE:- A class can have only one constructor. There is no concept of overloading in JavaScript
