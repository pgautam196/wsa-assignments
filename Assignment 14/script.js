function checkPositive(n) {
  if (n <= 0 || n != n) {
    return false;
  }
  return true;
}

let error = "N must be a positive integer";

function Series1(n) {
  if (!checkPositive(n)) {
    return error;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + 1 / i;
  }
  return sum;
}

function Series2(n) {
  if (!checkPositive(n)) {
    return error;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let even = i * 2;
    sum = sum + even;
  }
  return sum;
}

let n = +prompt("Enter a positive integer:");
if (checkPositive(n)) {
  document.write("a) " + Series1(n) + "<br>");
  document.write("b) " + Series2(n));
} else {
  document.write(error);
}