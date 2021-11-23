const a = ["Iti","Swati","Sama","Shivesh","Vaibhav"];
const b = ["Abhay","Farman"];

document.write("Value of first Array is: ", a, "<br>");
document.write("Value of second Array is: ", b, "<br>");

const children = a.concat(b); 
document.write("Concatenation of array- "+a+" and - "+b+" is: "+ children);
console.log(children);