/* Callback- A callback is a function that is passed as an argument to another function(HOF)
and is executed once the main function has finish executing */

function hof(fn){  // fn- callback
    fn();
}

hof(function f(){
    console.log("executing")
})

setTimeout(function f(){
    console.log("done");
},5000);
