// Set()- The Set object lets you store unique values of any type, whether primitive values or object references.

const newSet = new Set();

//adding the values
newSet.add(2);
newSet.add(3);
newSet.add(12);
newSet.add(12);
newSet.add(4);
newSet.add(9);

// Removes all elements from the Set object.
newSet.clear();

newSet.add(2);
newSet.add(3);
newSet.add(12);
newSet.add(12);
newSet.add(4);
newSet.add(9);

// Removes the element associated to the value
newSet.delete(12);

// console.log(newSet);

/**********************************************************************/

/* map - The Map object holds key-value pairs and remembers the original 
insertion order of the keys. Any value (both objects and primitive values) 
may be used as either a key or a value.*/

const myMap =new Map();
console.log(myMap.size);

let arr1=[
    [1,"Mithun"],
    [2,"Alka"],
    [3,"Prabir"],
    [4,"Shivam"],
    [5,"Vinay"],
    [6,"Hitesh"]
];

el=[1,"Mithun"];
arr1.map(el=>myMap.set(el[0],el[1]));
console.log(myMap);

