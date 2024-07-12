/*
the async keyword is used to mark a function as asynchronous. An asynchronous function is a function
that returns a promise.

await keyword used to wait for the computation of an asynchronous operation inside an asynchronous 
function

*/

function returnDummyPromise(){
    return new Promise(function exce(resolve,reject){
        //write your code here....
        setTimeout(function f(){
            console.log("timer completed");
            resolve("done");
        },10000);
    });
}

async function consume(){
    console.log("start");  //1
    const response = await returnDummyPromise();  //3
    const response1 = await returnDummyPromise();  //4
    const response2 = await returnDummyPromise();  //5
    console.log("response is",response);  //6
}

consume();
console.log("ending");  //2