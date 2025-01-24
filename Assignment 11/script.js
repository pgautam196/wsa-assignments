let n = 100;

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write("FizzBuzz");
  } else if (i % 3 === 0) {
    document.write("Fizz");
  } else if (i % 5 === 0) {
    document.write("Buzz");
  } else {
    document.write(i);
  }

  if (i < n) {
    document.write(", ");
  }
}
