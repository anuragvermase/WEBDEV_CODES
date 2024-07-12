// Custom Error 
function isPrime(x){
    try{
        for(let i=2;i<=x-1;i++){
        if(x%i==0){
            throw new Error("Not a Prime");
        } 
    }
    return "Prime";
}catch(err){
    console.log("Handled");
}finally{
    console.log("End of Program");
}
}
let a= isPrime(11);
console.log(a);
