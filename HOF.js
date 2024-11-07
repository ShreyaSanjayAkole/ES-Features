// Higher-order function that takes a function as an argument
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
  }
  
  function logMessage(msg) {
    console.log(msg);
  }
  
  greet('shreya', logMessage);


  // returing the function
function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5));  
  console.log(triple(5));  
  
  