/* every()-The every() method tests whether all elements in 
the array pass the test implemented by the provided function. 
It returns a Boolean value.*/

const gameScore = [200,300,310,,100,250,150];

console.log(typeof gameScore[0]);//number

const gameScoreCheck = gameScore.every((v)=>typeof v==="number");

console.log(gameScoreCheck);//true