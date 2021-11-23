// take the input from user
var n = parseInt(prompt("Enter the number: "));
document.write("n number is: ",n,"<br>");

function evenOrOdd(num) { //for string length take string
    if (num % 2 == 0) {//and replace numm with string.length here
      return "even";
    } else {
      return "odd";
    }
  }

var number = evenOrOdd(n);
document.write(n," number is ", number);