let start = +prompt("Enter start number (minimum 100):");
let end = +prompt("Enter end number (maximum 999):");

if (start < 100) {
  alert("Numbers should be between 100 to 999 only");
} else if (end > 999) {
  alert("Numbers should be between 100 to 999 only");
} else {
  let result = [];
  for (let i = start; i <= end; i++) {
    let num = i;
    let sum = 0;
    let number = num;

    while (number > 0) {
      let digit = number % 10;
      sum = sum + digit * digit * digit;
      number = parseInt(number / 10);
    }

    if (sum === num) {
      result.push(num);
    }
  }
  document.getElementById("output").textContent = result.join(", ");
}
