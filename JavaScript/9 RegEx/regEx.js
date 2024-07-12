let pattern ="pw";

let regExOne = new RegExp(pattern);

let flag = "gi";
let regExTwo = new RegExp(pattern,flag);

let regExThree = /pw/gi; // alternate or second method of declaring

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pw content";

//test
const result = regExThree.test(strToCheck)
console.log(result);  //true

//match
const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult); //[ 'PW', 'Pw', 'pw' ]

//replace
const oneMoreResult = strToCheck.replace(regExThree,"p-w");
console.log(oneMoreResult); //p-w is growing at a rapid speed and recently they are working on p-wskills to create skills based p-w content

const webUrl = "https//pwskills.com/anurag%20verma"
const useableUrl = webUrl.replace(/%\d\d/,"-");
console.log(useableUrl); //https//pwskills.com/anurag-verma