//manipulating objects
const emp = {
    id:101,
    name:"suraj",
    salary:50000
};
console.log(emp);
console.log(emp.name); //to access the particular keys value -suraj
console.log(emp['name'])//   suraj

emp.item=10; //  add key-value 
emp['type']='intern';

emp.id=105;  //  update key-value
emp['salary']=60000;
console.log(emp);

delete emp.salary;   // use delete keyword to delete any key:value pair
console.log(emp);
