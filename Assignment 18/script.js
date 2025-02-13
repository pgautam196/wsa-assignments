function checkNumber() {
  let number = document.getElementById("numberInput").value;
  let outputDisplay = document.getElementById("result");

  if (number === "") {
    outputDisplay.textContent = "Please enter a number";
    return;
  }

  number = parseInt(number);
  if (number % 2 === 0) {
    outputDisplay.textContent = "Even number";
  } else {
    outputDisplay.textContent = "Odd number";
  }
}
