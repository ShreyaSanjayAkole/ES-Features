
var globalVar = "I am a global variable";

function exampleFunction() {
  
    let blockScopedLet = "I am a block-scoped variable";
    const blockScopedConst = "I am a constant block-scoped variable";

    console.log(globalVar); 
    console.log(blockScopedLet); 
    console.log(blockScopedConst); 

    
    blockScopedLet = "I can be changed";


    console.log(blockScopedLet); 

}

exampleFunction();
console.log(globalVar); 
