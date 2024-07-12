/*some - The some() method tests whether at least one element 
in the array passes the test implemented by the provided 
function. It returns true if, in the array, it finds an 
element for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.*/

const arr1 = [2,13,17,15,30];

const evenOrOdd = arr1.some(
    (ele)=>ele%2==0);
    // console.log(evenOrOdd);