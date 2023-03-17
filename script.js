'use strict';
let answer = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;
setHighScore(highscore);
setScore(20);

function setScore(value) {
  document.querySelector('.score').textContent = value;
}

function setHighScore(value) {
  if (highscore < value) {
    highscore = value;
    document.querySelector('.highscore').textContent = value;
  }
}

function rightAnswer(guess) {
  document.body.style.backgroundColor = 'green';
  document.querySelector('.number').textContent = answer;
  document.querySelector('.message').textContent = '🎓 Hurray you did it !!';
  setHighScore(score);
}

function wrongAnswer(guess) {
  if (guess > answer)
    document.querySelector('.message').textContent = '📈 Too high';
  if (guess < answer)
    document.querySelector('.message').textContent = '📉 Too low!';
  score--;
  setScore(score);
}

var checkGuess = function () {
  let guess = document.querySelector('.guess').value;
  if (guess == answer) rightAnswer(guess);
  else wrongAnswer(guess);
};

var reset = () => {
  document.querySelector('.number').textContent = '?';
  answer = Math.trunc(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  setScore(20);
};

document.querySelector('.btn.check').addEventListener('click', checkGuess);
document.querySelector('.guess').addEventListener('keyup', event => {
  if (event.key === 'Enter') checkGuess();
});
document.querySelector('.btn.again').addEventListener('click', reset);