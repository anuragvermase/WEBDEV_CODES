// reduce- reduce all element to a single value

/*const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); */


const scores= [10,20,30];
const sumOfAllScores = scores.reduce(
    (prev,curr) => prev+curr,0);
console.log(sumOfAllScores);
