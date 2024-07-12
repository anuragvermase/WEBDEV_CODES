class product{
     #rating=2; //private data member
      constructor(){
        this.name="anurag"
      }

     get rating(){  //getter method
        console.log(this.#rating);
     }

     set rating(r){  //setter method
        if(r<0) return;
        this.#rating=r;
     }


     set naming(n){
        this.name=n;
     }

     display(){
        console.log("displaying a product", this.#rating,this.name);
     }

}
const p = new product();
p.display();
p.rating; //call to getter methhid
p.rating=4;  // call to setter method
p.display();
p.naming="great";  // set name to great
p.display();
