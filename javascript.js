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

function displayResult(roundResult, div, playerSelection, computerSelection) {
  if(roundResult == 'win') {
    playerWinCount++;
    div.innerText += "You " + roundResult + "! " + playerSelection + " beats " + computerSelection
    + ". You: " + playerWinCount + " Computer: " + computerWinCount + "\n";
    if(playerWinCount == 5) {
      div.innerText += "You won the game!";
    }
  }
  else if(roundResult == 'lose') {
    computerWinCount++;
    div.innerText += "You " + roundResult + "! " + computerSelection + " beats " + playerSelection
     + ". You: " + playerWinCount + " Computer: " + computerWinCount + "\n";
     if(computerWinCount == 5) {
       div.innerText += "Computer won, game over!";
     }
  }
  else {
    div.innerText += "You " + roundResult + "! " + playerSelection + " ties with " + computerSelection 
    + ". You: " + playerWinCount + " Computer: " + computerWinCount + "\n";
  }
}

function playRound(e) {
  const div = document.querySelector('div');
  if(playerWinCount == 5 || computerWinCount == 5) {
    playerWinCount = 0;
    computerWinCount = 0;
    div.innerText = " ";
  }
  const playerSelection = e.target.getAttribute('class');
  const computerSelection = computerPlay();
  const roundResult = getRoundResult(playerSelection, computerSelection);
  displayResult(roundResult, div, playerSelection, computerSelection);
}

let playerWinCount = 0;
let computerWinCount = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))