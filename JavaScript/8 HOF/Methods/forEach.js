let array1 = [2,3,4];

//forEach- gives the index number, element and whole array without using any loop.
//map- map method also do same as forEach method
array1.forEach(function(element,index,array){
    console.log(index,element,array);
});

//By Arrow Funtion
array1.forEach((element,index,array)=>{
    console.log("arrow:",index,element,array);

});

const heros = ["naagraj","doga","dhruva","maniraj"]
heros.map((el)=>console.log(el.toUpperCase())); //convert the array ele to uppercase
heros.forEach((el)=>console.log("forEach:",el.toUpperCase()));

console.log(heros); // prints all heros

const herosWithRaj = heros.filter((h)=>{
    return h.endsWith("raj");  //return keyword needs in filter method
});
console.log(herosWithRaj);// prints heros whose name ends with raj

