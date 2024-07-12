// declaring of an array
let arr=[10,11,12,13];
console.log(arr);

//push Method: add element at the last
arr.push(14); 
console.log(arr);

//pop method: removes element from the last
arr.pop();
console.log(arr);

//shift method: use to remove element from the start
arr.shift();
console.log(arr);

//unshift: use to add element at start
arr.unshift(15);
console.log(arr);
 
//concat: to return a new array with element of a1 followed by element of a2
const a1=[1,2,3,4,5];
const a2=[6,7,8];
const result=a1.concat(a2);
console.log(result);

//slice : to fetch data from start(index) to end-1(index)
const x = [1,2,3,4,5,6,7];
const s = x.slice(2,4);
console.log(s); //[3,4]

// join: to club the elements together to form a string seperated by a given character
const str = x.join("$");
console.log(str);

// reverse: reverse the array
const rev = x.reverse();
console.log(rev);

// indexOf: return index of element
const a = [1,2,3,4,5,16,7];
console.log(a.indexOf(16)); //5

//splice: to delete some part of arrary and add other element to it
//array.splice(start,deleteCount,i1,i2,...)
const removed =a.splice(2,2,0,0,0);
console.log(a,removed);// [1,2,0,0,0,5,16,7][3,4]
