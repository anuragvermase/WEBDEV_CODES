/*sort - The sort() method sorts the elements of an array 
in place and returns the reference to the same array, 
now sorted. The default sort order is ascending, built 
upon converting the elements into strings, then comparing 
their sequences of UTF-16 code units values.*/ 

// hero names sorted
const heros = ["naagraj","doga","dhruva","maniraj"];
const sortHeros = heros.sort();
console.log(sortHeros);

//marks sorted
const marks = [10,45,67,56,4,378];
marks.sort();
console.log(marks);