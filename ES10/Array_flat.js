const nestedArray = [1, 2, [3, 4, [5, 6]]];

console.log(nestedArray.flat());

console.log(nestedArray.flat(2)); //depth = 2