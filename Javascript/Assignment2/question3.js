function isEven(num) { //for string length take string
    if (num % 2 == 0) {//and replace numm with string.length here
      return true;
    } else {
      return false;
    }
  }

console.log(isEven(3));
console.log(isEven(4));

var array=[1,3,5,4,2];
var found =array.find(isEven);
console.log(found);