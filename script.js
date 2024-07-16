let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
	number = Math.floor(Math.random() * 9 + 1);
	if (number <= 3) {
		return "rock";
	} else if (number > 3 && number <= 6) {
		return "paper"
	} else {
		return "scissor"
	}
}

function getHumanChoice () {
  return prompt("Rock, Paper or Scissor?").toLowerCase();
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return `You lose ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "scissor") {
      humanScore++;
      return `You win ${humanChoice} beats ${computerChoice}`;
    } else {
      return "Its a tie";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissor") {
      computerScore++;
      return `You lose ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "rock") {
      humanScore++;
      return `You win ${humanChoice} beats ${computerChoice}`;
    } else {
      return "Its a tie";
    }
  } else {
    if (computerChoice === "rock") {
      computerScore++;
      return `You lose ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "paper") {
      humanScore++;
      return `You win ${humanChoice} beats ${computerChoice}`;
    } else {
      return "Its a tie";
    }
  }
}


function playGame () {
  for (let i = 0; i < 5 ; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
  }
}

playGame();