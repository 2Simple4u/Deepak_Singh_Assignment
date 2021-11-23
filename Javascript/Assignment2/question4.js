const square=(element) => element ** 2;

const arr = [1,2,3,4,5];
const a = [1,4,9,16,25];

const result = arr.map(square);
const res = a.map(Math.sqrt);
console.log("square",result);
console.log("square root",res);