let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

document.write(`
Input:<br>
num1: ${num1}<br>
num2: ${num2}<br><br>
`);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

document.write(`
Output:<br>
num1: ${num1}<br>
num2: ${num2}
`);
