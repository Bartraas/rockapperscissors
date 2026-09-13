
function getComputerChoice() {

  let random = Math.random();

  if (random < 0.33) {
    

    return "paper"
  }

  else if (random < 0.66) {
    

    return "scissor";
  }

  else {

    return "rock";
  }
}

function getHumanChoice() {

  return prompt("Paper, scissor or rock?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {

    console.log("It's a draw")
  }

  else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  )
  {
    console.log("You win");
    humanScore++;
  }
  else {

    console.log("You lose")
    computerScore++;
  }
}




function playGame() {

  for (let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (i = 5) {
    
    console.log(humanScore + "" + "VS" + "" + computerScore);
  }

}

playGame();


/* finished game */