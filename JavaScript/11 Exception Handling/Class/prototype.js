// prototype - are the mechanism by which javascript objects inherit features from one another

let myHeros = ["Thor","Spiiderman"]; //Array Creation
let dcHeros = ["Batman","flash","Superman"];

let heropower={   //object creation
    thor:"hammer",
    spiderman:"slings",

    getspiderpower : function(){  //object can contain function
        console.log(`spidy power is ${this.spiderman}`);
    }
}

heropower.getspiderpower(); //spidy power is slings


Object.prototype.anurag = function(){  //manipulate the whole object
    console.log("anurag is present in all Object");
}

console.log(myHeros.anurag());
console.log(heropower.anurag());


Array.prototype.heyanurag = function(){
    console.log("anurag say hello to arrays");
}

console.log(myHeros.heyanurag());
// console.log(heropower.heyanurag()); // not run - bcz,this is not an object


//Inheritence(prototype)- inject one property to another
const User = {
    name:"top name",
    email:"top@gmial.com"
}

const Teacher = {
    makeVideos: false
}

const TeachingSupport={
    isAvailable : false
}

const TAAssistant ={
    makeAssignment : "JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport // all thr property of teching support will available in TAAssistant
}

// Teacher.__proto__=User //teacher have access of User- another method as (  __proto__:TeachingSupport)

//modern syntex
Object.setPrototypeOf(TeachingSupport,Teacher); // techingSupport injects the Teacher property.


String.prototype.truelength = function() {
    console.log(`True Length is ${this.trim().length}`);
}

console.log("Anurag.   ".truelength());  //True Length is 7





