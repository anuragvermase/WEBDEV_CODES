class Product{
    discount;
    #rating; // declare the private member before you use it as a private member.
    #name; //by putting "#" data members become pricate and not access by outside
    constructor(n,p){
    
        console.log("hello There");
        this.#name=n;  // this keyword- refers to the the same empty object we created
        this.price=p; //data members
        this.#rating=5;
    }

    static customMethod(){  //class Method 
        console.log("This is custom Method");
    }

    display(){  //class method- are noting but functions, they represent behaviour-> also call as Member Function
        console.log("displaying a product", this.#name, this.price, this.#rating);
        //but inner method can acces the private data, and we get that data by the help of that mehtod.
    }
}
const obj = new Product("vivo",22000);
console.log(obj);

Product.customMethod(); //statis method call by class name
obj.display();