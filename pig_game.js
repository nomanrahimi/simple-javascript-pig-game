"use strict";

// Scores are belongs To Elemnts to show
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const currentScore0El = document.querySelector(".currentScore--0");
const currentScore1El = document.querySelector(".currentScore--1");
const btnNew = document.querySelector(".newGame");
const btnRollDice = document.querySelector(".rollDice");
const btnHoldDice = document.querySelector(".holeDice");
const imageURL = "./images/dice/";
const tosImage = document.querySelector(".tosImage");
const diceEl = document.querySelector(".tosDiv");

let score, currentScore, activePlayer;

const init = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("winner-player");
  player1El.classList.remove("winner-player");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = () => {
  document.querySelector(`.currentScore--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRollDice.addEventListener("click", function () {
  const diceR = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  tosImage.src = `${imageURL}/dice-${diceR}.jpeg`;

  if (diceR !== 1) {
    currentScore += diceR;
    document.querySelector(`.currentScore--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to Another Player
    switchPlayer();
  }
});

btnHoldDice.addEventListener("click", function () {
  score[activePlayer] += currentScore;
  document.querySelector(`#score-${activePlayer}`).textContent =
    score[activePlayer];

  if (score[activePlayer] >= 100) {
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add("winner-player");
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
