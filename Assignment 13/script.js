function checkCircle(moves) {
  let x = 0,
    y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
    }
  }
  return x === 0 && y === 0;
}

let moves = prompt("Enter robot moves (R, L, U, D):");
if (moves) {
  moves = moves.toUpperCase();
  let result = checkCircle(moves);
  document.write(result);
} else {
  document.write("No moves entered.");
}
