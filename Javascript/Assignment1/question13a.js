// function of for loop
function addSum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
let res = addSum([1,2,3,4]);
console.log(res);

//function for while loop
function iterateAndSum(arr) {
    let e = 0,i=0;
    while (i < arr.length) {
        e += arr[i++]; 
    }
    return e
  }
let result = iterateAndSum([5,9,6,2,8,0,4])
console.log(result);

//function for do while loop

var a = [1,3,5,3];
let s = 0;
let i = 0;
do{
    s += a[i++];  
}
while(i<a.length)
console.log(s);
