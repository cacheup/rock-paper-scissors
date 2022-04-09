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
//gets result of a round; "win", "tie", or "lose"
function playRound(playerSelection, computerSelection) {
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
//plays 5 rounds
function game () {
  let playerWinCount = 0;
  let computerWinCount = 0;
  for(let i = 0; i < 5; i++) {
    let playerMove = prompt("Enter move: ", " ");
    let computerMove = computerPlay();
    let result = playRound(playerMove, computerMove);
    if(result == "win") {
      playerWinCount++;
      console.log("You win! " + playerMove + " beats " + computerMove + ". Score is " + playerWinCount + "-" + computerWinCount);
    }
    else if(result == "lose") {
      computerWinCount++;
      console.log("You lose! " + computerMove + " beats " + playerMove + ". Score is " + playerWinCount + "-" + computerWinCount);
    }
    else {
      console.log("It's a tie!. " + playerMove + " ties with " + computerMove + ". Score is "  + playerWinCount + "-" + computerWinCount);
    }
  }
}