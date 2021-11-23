//Take 100 randaom number in array
var myArray = [];
var arrayMax = 100;
var limit = arrayMax + 1;
for (var i = 0; i < arrayMax; i++) {
  myArray.push(Math.floor(Math.random()*limit));
}
console.log("Array of 100 random numbers is: ",myArray);

//(a) maximum number
var large=Math.max(...myArray);
console.log("Largest number amongst 100 is: " +large);

//(b) minimum number
var small=Math.min(...myArray);
console.log("smallest number amongst 100 is: " +small);

//(c) Even and Odd number count
function CountingEvenOdd(arr, arr_size){
  let even_count = 0;
  let odd_count = 0;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] & 1 == 1){
      odd_count++;
    }
    else{
      even_count++;
    }
  }
console.log("Number of even elements = " + even_count);
console.log("Number of odd elements = " + odd_count);
}     
// Function Call
CountingEvenOdd(myArray, myArray.length);

//(d) Sum and Average
//add
let sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log("Sum of all numbers is: "+sum);
//avg
var average = sum/myArray.length;
console.log("Average of all number is: "+average);