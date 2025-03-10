let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const humanChoices = document.querySelector("#choices");
const startRoundBtn = document.querySelector("#startRound");
const humanScoreText = document.querySelector("#humanScoreText");
const computerScoreText = document.querySelector("#computerScoreText");
const text = document.querySelector("#text");
const winnerText = document.querySelector("#winnerText");
const roundText = document.querySelector("#roundText");
let humanChoice;

humanChoices.addEventListener("click", (e) => {
	humanChoice = e.target.id;
	playRound(humanChoice, getComputerChoice());
});

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
  return humanChoice;
}

function isWinner () {
	if (humanScore === 5 || computerScore === 5) {
		return true;
	}
}

function checkWinner () {
	if (humanScore === 5) {
		return "human";
	} else if (computerScore === 5) {
		return "computer";
	}
}

function printWinner (winner) {
	winner === "human" ? winnerText.innerText = "You Win!" : winnerText.innerText = "Computer Wins!";
}

function playRound (humanChoice, computerChoice) {
	if (isWinner()) {
		return;
	}
	roundCount++;
	roundText.innerText = roundCount;
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
			text.innerText = `You lose ${computerChoice} beats ${humanChoice}`;
			computerScoreText.innerText = computerScore;
      // return `You lose ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "scissor") {
      humanScore++;
			text.innerText = `You win ${humanChoice} beats ${computerChoice}`;
			humanScoreText.innerText = humanScore;
      // return `You win ${humanChoice} beats ${computerChoice}`;
    } else {
			text.innerText = "Its a tie";
      // return "Its a tie";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissor") {
      computerScore++;
			text.innerText = `You lose ${computerChoice} beats ${humanChoice}`;
			computerScoreText.innerText = computerScore;
      // return `You lose ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "rock") {
      humanScore++;
			text.innerText = `You win ${humanChoice} beats ${computerChoice}`;
			humanScoreText.innerText = humanScore;
      // return `You win ${humanChoice} beats ${computerChoice}`;
    } else {
			text.innerText = "Its a tie";
      // return "Its a tie";
    }
  } else {
    if (computerChoice === "rock") {
      computerScore++;
			text.innerText = `You lose ${computerChoice} beats ${humanChoice}`;
			computerScoreText.innerText = computerScore;
      // return `You lose ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "paper") {
      humanScore++;
			text.innerText = `You win ${humanChoice} beats ${computerChoice}`;
			humanScoreText.innerText = humanScore;
      // return `You win ${humanChoice} beats ${computerChoice}`;
    } else {
			text.innerText = "Its a tie";
      // return "Its a tie";
    }
  }
	if (isWinner()) {
		printWinner(checkWinner());
		return;
	}
}
