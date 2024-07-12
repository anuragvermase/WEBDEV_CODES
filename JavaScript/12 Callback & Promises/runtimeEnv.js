function timeConsumingTask(){
    for(let i=0;i<10000000000;i++){
        //some task
    }
}

console.log("start");  //1
timeConsumingTask();
console.log("starting the timer");  //2
setTimeout(function exec(){  //5
    console.log("timer completed");
},0);
setTimeout(function exec(){  //6
    console.log("timer completed");
},10);
console.log("exiting the timer");  //3
timeConsumingTask();
console.log("end");  //4

//output 
/*
start
starting the timer
exiting the timer
end
timer completed
timer completed 
*/