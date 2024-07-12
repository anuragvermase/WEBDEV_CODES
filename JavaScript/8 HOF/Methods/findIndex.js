/* findIndex() - The findIndex() method returns the index 
of the first element in an array that satisfies the provided 
testing function. If no elements satisfy the testing function,
 -1 is returned. */
 
const marks = [49,56,98,56,86];

const indexMarks = marks.findIndex(
    (m)=>m>55);
    console.log(indexMarks);