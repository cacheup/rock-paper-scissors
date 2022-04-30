function computerPlay() {
  let choice = Math.floor(Math.random()*3) + 1;
  switch (choice) {
    case 1:
    return "rock";

    case 2:
    return "paper";

    case 3:
    return "scissors";
  }
}

function getRoundResult(playerSelection, computerSelection) {
  if(playerSelection == "rock") {
    if(computerSelection == "rock") {
      return "tie";
    } 
    else if(computerSelection == "paper") {
      return "lose";
    } 
    else if(computerSelection == "scissors") {
      return "win";
    }
  } 
  else if(playerSelection == "paper") {
    if(computerSelection == "rock") {
        return "win";
    } 
    else if(computerSelection == "paper") {
      return "tie";
    } 
    else if(computerSelection == "scissors") {
      return "lose";
    }
  }
  else if (playerSelection == "scissors") {
    if(computerSelection == "rock") {
      return "lose";
    }
    else if(computerSelection == "paper") {
      return "win";
    }
    else if(computerSelection == "scissors") {
      return "tie";
    }
  }
}

function showResult(playerWinCount, computerWinCount) {
  if(playerWinCount > computerWinCount) {
    console.log("You won the game!");
  }
  else if (playerWinCount < computerWinCount) {
    console.log("Game over!");
  }
  else {
    console.log("Draw!");
  }
}

function isValidMove(playerMove) {
  let move = playerMove.toLowerCase();
  if(move == "rock" || move == "paper" || move == "scissors") {
    return true;
  }
  else {
    return false;
  }
}
