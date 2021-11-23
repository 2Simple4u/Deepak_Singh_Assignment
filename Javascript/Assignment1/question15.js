var myArray = [];
var arrayMax = 20;
var limit = arrayMax + 1;
for (var i = 0; i < arrayMax; i++) {
   myArray.push(Math.floor(Math.random()*limit));
}
console.log("Array of 20 random numbers is: ",myArray);

function mSort (array) {
   if (array.length === 1) {
   return array                            
}
const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
const left = array.slice(0, middle)         // items on the left side
const right = array.slice(middle)           // items on the right side

return merge(
   mSort(left),
   mSort(right)
)
}
 // compare the arrays item by item and return the concatenated result
function merge (left, right) {
   let result = []
   let leftIndex = 0
   let rightIndex = 0
   while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
       //document.write("</br>");        
      } else {
      result.push(right[rightIndex])
      rightIndex++      
   }
}
return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mSort(myArray));