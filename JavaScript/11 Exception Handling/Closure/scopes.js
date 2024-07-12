// scopes 
let score = 0;
function one(){
    let score=1;
    console.log(score);
}

function two(){
    let score=100;
    console.log(score);
}

function three(){
    let score=300;
    console.log(score);
}
// one(); //1
// two();//100
// three();//300
// console.log(score);//0


// scopes define by nesting...
function outerFunc(){
 let outerValue="I am outer Value";
  function innerFunc(){
      let innerValue="Inner Value";
    //   console.log(innerInnerValue); // can't access bcoz this defines in inner scope
      console.log(outerValue);//access of outer scope
      function innerOfInnerFunc(){
          let innerInnerValue="Inner Inner Value"
          console.log(outerValue);//access of outer scope
      }
      innerOfInnerFunc()
  }
  innerFunc()
}
outerFunc()