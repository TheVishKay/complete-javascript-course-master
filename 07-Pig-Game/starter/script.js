'use strict';
const playerA = document.querySelector('.player--0');
const playerB = document.querySelector('.player--1');
const scoreA = document.querySelector('#score--0');
const scoreB = document.getElementById('score--1');
const currentA = document.getElementById('current--0');
const currentB = document.getElementById('current--1');

const diceImage = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let totalScores, tempScore, currentPlayer, isGameActive;

const startGame = function () {
  totalScores = [0, 0];
  tempScore = 0;
  currentPlayer = 0;
  isGameActive = true;

  scoreA.textContent = 0;
  scoreB.textContent = 0;
  currentA.textContent = 0;
  currentB.textContent = 0;

  diceImage.classList.add('hidden');
  playerA.classList.remove('player--winner');
  playerB.classList.remove('player--winner');
  playerA.classList.add('player--active');
  playerB.classList.remove('player--active');
};
startGame();

const changeTurn = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  tempScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  playerA.classList.toggle('player--active');
  playerB.classList.toggle('player--active');
};

rollDiceBtn.addEventListener('click', function () {
  if (isGameActive) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
      tempScore += diceValue;
      document.getElementById(`current--${currentPlayer}`).textContent =
        tempScore;
    } else {
      changeTurn();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (isGameActive) {
    totalScores[currentPlayer] += tempScore;

    document.getElementById(`score--${currentPlayer}`).textContent =
      totalScores[currentPlayer];

    if (totalScores[currentPlayer] >= 100) {
      isGameActive = false;
      diceImage.classList.add('hidden');

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      changeTurn();
    }
  }
});

newGameBtn.addEventListener('click', startGame);
