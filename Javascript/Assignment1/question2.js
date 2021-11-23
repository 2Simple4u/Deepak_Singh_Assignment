// take the input from user
var n = parseInt(prompt("Enter the number: "));
document.write("n number is: ",n,"<br>");

var sum = 0;
for(var i=1; i<=n; i++){
    if(i%3 === 0 || i%5 === 0){
        sum = sum+i;
    }
}
document.write("Sum of 1 to ", n, " numbers is: ",sum);