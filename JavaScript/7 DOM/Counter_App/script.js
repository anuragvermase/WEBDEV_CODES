//alloting all ids to a variables
const decrementBtn= document.getElementById("decrementBtn");
const incrementBtn= document.getElementById("incrementBtn");
const resetBtn= document.getElementById("resetBtn");
const displayValue= document.getElementById("displayValue");

//add event listener to decrement button
decrementBtn.addEventListener("click",()=>{
    const value= Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText= value-1;
    }else{
        alert("Negative value not allowed")
    }
} );

//add event listener to increment button
incrementBtn.addEventListener("click",()=>{
    const value= Number(displayValue.innerText);
    if(value<108){
        displayValue.innerText=value+1;
    }else{
        alert("108+ values not be allowed");
    }
});

//add event listener to reset button
resetBtn.addEventListener("click", ()=>{
    displayValue.innerText=0;
});