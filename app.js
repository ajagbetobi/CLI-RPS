const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playBtn = document.querySelector(".play-txt");
const resultBtn = document.querySelector(".rslt-txt");

let playClick = playBtn.addEventListener("click", () => {
  gameCount = 0;
  l = 0;
  d = 0;
  w = 0;
  resultBtn.textContent = `${l} losses ,${w} wins , ${d} draws`;
  playBtn.textContent = "Play again.";
});

const buttons = document.querySelectorAll(".choice");
let playerSelection;
let gameCount = 0;
let l = 0;
let w = 0;
let d = 0;
rockBtn.addEventListener("click", () => {
  gameCount++;
  playerSelection = "rock";
  if (gameCount > 5 && l > w) {
    playBtn.textContent = "Sorry, you lost this round. Let's go again.";
    playClick;
  } else if (gameCount > 5 && w > l) {
    playBtn.textContent = "Did you just beat me?! Let's go again.";
    playClick;
  } else playRound(playerSelection);
});
paperBtn.addEventListener("click", () => {
  gameCount++;
  playerSelection = "paper";
  if (gameCount > 5 && l > w) {
    playBtn.textContent = "Sorry, you lost.";
    playClick;
  } else if (gameCount > 5 && w > l) {
    playBtn.textContent = "Did you just beat me?!! Let's go again.";
    playClick;
  } else playRound(playerSelection);
});
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  gameCount++;
  if (gameCount > 5 && l > w) {
    playBtn.textContent = "Sorry, you lost.";
    playClick;
  } else if (gameCount > 5 && w > l) {
    playBtn.textContent = "Did you just beat me?!! Let's go again.";
    playClick;
  } else playRound(playerSelection);
});

const compChoices = ["rock", "paper", "scissors"];
let playRound = (playerSelection) => {
  let compSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  if (playerSelection == compSelection) {
    d++;
    resultBtn.textContent = `It's a tie.`;
  } else if (playerSelection == "rock" && compSelection == "scissors") {
    w++;
    resultBtn.textContent = `You win.`;
  } else if (playerSelection == "paper" && compSelection == "rock") {
    w++;
    resultBtn.textContent = `You win.`;
  } else if (playerSelection == "scissors" && compSelection == "paper") {
    w++;
    resultBtn.textContent = `You win.`;
  } else if (compSelection == "rock" && playerSelection == "scissors") {
    l++;
    resultBtn.textContent = `You lose, haha!`;
  } else if (compSelection == "paper" && playerSelection == "rock") {
    l++;
    resultBtn.textContent = `You lose, haha!`;
  } else if (compSelection == "scissors" && playerSelection == "paper") {
    l++;
    resultBtn.textContent = `You lose, haha!`;
  } else {
    resultBtn.textContent = `${l} loss(es) , ${w} win(s) , ${d} draw(s)`;
  }

  console.log(l, w, d);
};
