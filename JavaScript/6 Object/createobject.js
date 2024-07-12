//creating an object- {key:value}
let obj = { id:101, name:"anurag", salary:60000};
console.log(obj); //display object - { id: 101, name: 'anurag', salary: 60000 }

//another method to create an object
let student =new Object();
student.id= 102;
student.name="abhishek";
student.class="5th"
console.log(student);

//creating an object by one another method

function worker(i,n,s){
    this.id=i;  //alloting keys (id,name,salary)
    this.name=n;
    this.salary=s;
}

let x= new worker(103,"aman",10000);
console.log(x);