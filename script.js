function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toString().toLowerCase();

  if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    if (playerSelection === "rock") {
      switch (computerSelection) {
        case "paper":
          return "You Lose! Paper beats Rock.";
          break;

        case "rock":
          return "Tie! Rock ties with Rock.";
          break;

        case "scissors":
          return "You Win! Rock beats Scissors.";
          break;
      }
    } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case "paper":
          return "Tie! Paper ties with Paper.";
          break;

        case "rock":
          return "You Win! Paper beats Rock.";
          break;

        case "scissors":
          return "You Lose! Scissors beats Paper.";
          break;
      }
    } else {
      switch (computerSelection) {
        case "paper":
          return "You Win! Scissors beats Paper.";
          break;

        case "rock":
          return "You Lose! Rock beats Scissors.";
          break;

        case "scissors":
          return "Tie! Scissors ties with Scissors.";
          break;
      }
    }
  } else {
    return "Not a valid input.";
  }
}

function game(results) {
  const pScore = document.querySelector(".player-score");
  const cScore = document.querySelector(".computer-score");

  if (results.indexOf("Win") != -1) {
    playerScore++;
    pScore.textContent = `Score : ${playerScore}`;
  } else if (results.indexOf("Lose") != -1) {
    computerScore++;
    cScore.textContent = `Score : ${computerScore}`;
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      const p = document.createElement("p");
      p.textContent = "Player Wins!";
      div.appendChild(p);
    } else if (playerScore < computerScore) {
      const p = document.createElement("p");
      p.textContent = "Computer Wins!";
      div.appendChild(p);
    }
  }
}

const div = document.querySelector(".output");
const buttons = document.querySelectorAll(".player-card button");
const computerButtons = document.querySelectorAll(".computer-card button");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {


    if (playerScore === 5 || computerScore === 5) {
      const pScore = document.querySelector(".player-score");
      const cScore = document.querySelector(".computer-score");
      playerScore = 0;
      computerScore = 0;

      div.innerHTML = "<h3>Output</h3>";
      pScore.textContent = `Score : ${playerScore}`;
      cScore.textContent = `Score : ${computerScore}`;
    }

    buttons.forEach((value) => value.classList.remove("button-style"));
    computerButtons.forEach((value) => value.classList.remove("button-style"));

    const p = document.createElement("p");
    const choice = getComputerChoice();
    const result = playRound(btn.className, choice);
    p.textContent = result;
    div.appendChild(p);

    this.classList.add("button-style");
    const computerButton = document.querySelector(`.computer-card .${choice}`);
    computerButton.classList.add("button-style");

    game(result);
  });
});
