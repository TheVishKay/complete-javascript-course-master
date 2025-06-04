'use strict';
let realGuess = Math.trunc(Math.random() * 20) + 1;
console.log(realGuess);

function scoreReducer(score) {
  score--;
  document.querySelector('.score').textContent = score;
  return score;
}
// document.querySelector('.number').textContent = realGuess;
let Score = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guessed = Number(document.querySelector('.guess').value);
  console.log(guessed);
  if (Score > 1) {
    if (!guessed) {
      document.querySelector('.message').textContent = 'Insert a number!!!';
    } else if (guessed > realGuess) {
      document.querySelector('.message').textContent = 'Too high!';
      Score = scoreReducer(Score);
    } else if (guessed < realGuess) {
      document.querySelector('.message').textContent = 'Too low!';
      Score = scoreReducer(Score);
    } else if (guessed === realGuess) {
      document.querySelector('.message').textContent = 'Eyyyy you won!!!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = realGuess;
      if (Number(document.querySelector('.highscore').textContent) < Score) {
        document.querySelector('.highscore').textContent = Score;
      }
    }
  } else {
    scoreReducer(Score);
    document.querySelector('.message').textContent = 'Idiot, you lost.';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  realGuess = Math.trunc(Math.random() * 20) + 1;
  console.log(realGuess);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  Score = 20;
  document.querySelector('.score').textContent = Score;
});
