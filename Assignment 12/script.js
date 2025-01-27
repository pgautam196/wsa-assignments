function playGame() {
  const stonesInput = document.getElementById("stones");
  const err = document.getElementById("error");
  const stones = parseInt(stonesInput.value);

  if (typeof stones !== "number" || stones < 1) {
    err.hidden = false;
    return;
  }

  err.hidden = true;
  const output = gameStart(stones);
  document.getElementById("output").textContent = output;
}

function gameStart(totalStones) {
  let output = [];
  let stones = totalStones;

  while (stones > 0) {
    output.push("Remaining Stones: " + stones);

    let yourMove = bestMove(stones);
    if (yourMove <= stones) {
      stones = stones - yourMove;
      output.push("You takes " + yourMove + " stones.");
    }

    if (stones === 0) {
      output.push("You won the game!");
      break;
    }

    if (stones > 0) {
      let friendMove = bestMove(stones);
      stones = stones - friendMove;
      output.push("Friend takes " + friendMove + " stones.");

      if (stones === 0) {
        output.push("Friend won the game!");
        break;
      }
    }
  }
  return output.join("\n\n");
}

function bestMove(stones) {
  if (stones <= 3) {
    return stones;
  }

  let remainingStones = stones;
  for (let i = 0; remainingStones >= 4; i++) {
    remainingStones = remainingStones - 4;
  }

  if (remainingStones === 0) {
    return 1;
  }
  return remainingStones;
}
