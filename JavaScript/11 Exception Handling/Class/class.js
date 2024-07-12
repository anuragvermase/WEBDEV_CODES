// class - classes serve as a blue print for creating objects, providing a way to organise an dstructure code


class Product{
    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.discount=d;
    }

    display(){       //Method in Class
        console.log("Hello There!!!");
    }

    discountPrice(){
        let newPrice = this.price*(Math.floor(100-this.discount)/100);
        return newPrice;
    }

}

//for product 1
const i1 = new Product("Iphone",140000,5);
console.log(i1);
console.log(i1.discountPrice());

//for product 2
const i2 = new Product("Samsung",120000,25);
console.log(i2);
console.log(i2.discountPrice());

const obj = new Product();  //creating object 
obj.display();
// console.log(obj);
