//Event Module
//Node.js has a  build-in module called "Events",
//where you can create-, fire- , and listen for- your own events.

//Example 1: registering for the event to be fired only one time using once.

//Example 2: create an event emitter instance and register a couple of callbacks.

//Example 3: registering for the event with callback parameters
// EventEmitter - class
const EventEmitter = require('events');
//creating instance - event
const event = new EventEmitter();

/*
// we can create single or multiple event
event.on("great",()=>{
    console.log("hello great");
});
event.on("great",()=>{
    console.log("hello great");
});
event.on("great",()=>{
    console.log("hello Anurag");
});


event.emit("great"); //event fire

*/

// registering for the event with callback parameters
event.on("checkPage",(sc, msg)=>{
    console.log(`Status code is ${sc}, and the page is ${msg}.`);

});
event.emit("checkPage",200,"OK");

