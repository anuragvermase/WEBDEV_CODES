/*find-The find() method returns the first element in the 
provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is 
returned.*/

const marks = [49,56,98,56,86];

const findMarks = marks.find(
    (marks)=>marks>90);
    console.log(findMarks);