//for loops
for( let index =0;index<5;index++){
    console.log(`Index value is ${index}`);
}

for( let index =0;index<5;index++){
    console.log(`${index} * ${index} = ${index * index}`);
}

// const heros =["superman","naagraj","batman","flash","thor","hulk"];
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log("The Hero is :" + element);
// }

// let anotherHeros = [];
// const heros =["superman","naagraj","batman","flash","thor","hulk"];
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(`This Hero is ${element}`);
//     anotherHeros.push(element.toUpperCase());
// }
// console.log(anotherHeros) ;


//while loop
// let i=0;
// while (i<5) {
//     console.log(i);
//     i++;
    
// }

//do while loop
let i=0;
do{
    console.log(i);
    i++;
    
}while(i<5);

// "for of" loop
const heros =["superman","naagraj","batman","flash","thor","hulk"];
for (const iterator of heros) {
    console.log(`heros are : ${iterator}`);   
}


const languages = ["python","java","javascript","rust","cpp"];
for (const lang of languages) {
    console.log(`This language is : ${lang.toUpperCase()}`);
}

//break
for (let index = 0; index < languages.length; index++) {
    if(index==2){
        break
    }
    const element = languages[index];
    console.log(`This language is : ${element}`);
    
}

//continue statement
for (let index = 0; index < languages.length; index++) {
    if(index==2){
        continue
    }
    const element = languages[index];
    console.log(`This is : ${element}`);
    
}
