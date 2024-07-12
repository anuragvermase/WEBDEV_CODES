//Using "Arrow Function" you cannot use constructor 

let obj ={
    x:10, 
    y:20,
    display: ()=>{   //this keyword doesnot refers to call site in arrow function
        console.log(this.x); //shows - undefined
    }
}
obj.display();