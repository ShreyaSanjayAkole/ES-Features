//Rest in Functions
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3));     
  console.log(sum(4, 5, 6, 7));   

//rest in array
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  
console.log(second); 
console.log(rest); 

//spread in function
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));  

//spread in array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); 



  