function makeUpperCase() {
  let input = document.getElementById("inputText").value;
  let result = input.toUpperCase();
  document.getElementById("output").innerText = result;
}

function makeLowerCase() {
  let input = document.getElementById("inputText").value;
  let result = input.toLowerCase();
  document.getElementById("output").innerText = result;
}
