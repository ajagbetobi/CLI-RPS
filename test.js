const compChoices = ["rock", "paper", "scissors"];
let playRound = () => {
  let compSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  let playerSelection = prompt("What do you play?").toLowerCase();
  console.log(compSelection, playerSelection);
  if (playerSelection == compSelection) {
    return "It's a tie";
  } else if (playerSelection == "rock" && compSelection == "scissors") {
    return "You win";
  } else if (playerSelection == "paper" && compSelection == "rock") {
    return "You win";
  } else if (playerSelection == "scissors" && compSelection == "paper") {
    return "You win";
  } else if (compSelection == "rock" && playerSelection == "scissors") {
    return "You lose";
  } else if (compSelection == "paper" && playerSelection == "rock") {
    return "You lose";
  } else if (compSelection == "scissors" && playerSelection == "paper") {
    return "You lose";
  } else {
    return "Pick something, stop dulling.";
  }
};

let w = 0;
let l = 0;
let t = 0;
let game = () => {
  for (let gameCount = 0; gameCount < 5; gameCount++) {
    let result = playRound();
    if (result.includes("tie")) {
      t++;
    } else if (result.includes("win")) {
      w++;
    } else {
      l++;
    }
  }
  if (l > w) {
    return "Sorry, you lost";
  } else {
    return "Surprisingly,you won";
  }
};

game();
