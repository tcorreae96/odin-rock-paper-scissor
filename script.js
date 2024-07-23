let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let playing = true;

const humanChoices = document.querySelector("#choices");
const startRoundBtn = document.querySelector("#startRound");
const humanScoreText = document.querySelector("#humanScoreText");
const computerScoreText = document.querySelector("#computerScoreText");
const text = document.querySelector("#text");
const roundText = document.querySelector("#roundText");
let humanChoice;

humanChoices.addEventListener("click", (e) => {
	humanChoice = e.target.id;
	if (pl)
	playRound(humanChoice, getComputerChoice());
});

startRoundBtn.addEventListener("click", () => playGame());

function isPlaying () {
	if (playing === true) {
		return true;
	} else {
		return false;
	}
}

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

function playGame () {
	while (isPlaying()) {
		if (humanScore === 5 || computerScore === 5) {
			return playing = false;
		}
		playRound(humanChoice, getComputerChoice());
	}
}

function playRound (humanChoice, computerChoice) {
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
}
