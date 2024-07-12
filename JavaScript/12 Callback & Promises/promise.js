function returnDummyPromise(){
    return new Promise(function exce(resolve,reject){
        //write your code here....
        setTimeout(function f(){
            console.log("timer completed");
            let randomNumber=Math.random();
            if(randomNumber>0.5){
                resolve("done");
            }else{
                reject("err");
            }

        },10000);
    });
}

let p=returnDummyPromise();

p
.then(function exec(val){
    console.log("promise resolved with a value",val);
})
.catch(function exec(err){
    console.log("error in catch of promise",err);
})
.finally(function fin(){
    console.log("finally promise consumed");
})

console.log("end");