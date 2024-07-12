//object define
let emp={
    id:101,
    name:'alex',
    age:27,
    salary:10000
};

//Object.keys-> returns an array of objects own keys
const keys= Object.keys(emp);
console.log(keys);

//Object.values-> returns an array of objects own values
const values =Object.values(emp);
console.log(values);

//Object.entries-> returns an array of objects owns key value pair
const entries=Object.entries(emp);
console.log(entries);

Object.freeze(emp); // You can not update,delete or add key:value.

Object.seal(emp); //you can only upadte the value , can't delete or add values

