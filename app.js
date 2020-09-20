const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playBtn = document.querySelector(".play-txt");
const resultBtn = document.querySelector(".rslt-txt");

const buttons = document.querySelectorAll(".choice");
let playerSelection;
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  return playerSelection;
});
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  return playerSelection;
});
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  return playerSelection;
});

const compChoices = ["rock", "paper", "scissors"];
let playRound = () => {
  let compSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];
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
    console.log("You lose");
  } else if (compSelection == "scissors" && playerSelection == "paper") {
    return "You lose";
  } else {
    return "Pick something, stop dulling.";
  }
};

let game = () => {
  let w = 0;
  let l = 0;
  let t = 0;
  for (let gameCount = 0; gameCount < 5; gameCount++) {
    let result = playRound();
    if (result.includes("tie")) {
      t++;
    } else if (result.includes("win")) {
      w++;
    } else {
      l++;
    }
    resultBtn.textContent = t + " draws, " + w + " wins, " + l + " losses";
  }
  if (l > w) {
    playBtn.textContent = "Sorry, you lost.";
  } else {
    playBtn.textContent = "Did you just beat me?!!";
  }
};

playBtn.addEventListener("click", game);
playBtn.addEventListener("click", (e) => {
  alert("Play");
});
