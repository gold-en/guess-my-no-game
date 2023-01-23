'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (className, message) {
  document.querySelector(`.${className}`).textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    //this function(displayMessage) below expects a className as first argument and textContent as second argument

    displayMessage('message', '⛔ No Number!');
    return;
  }

  // when player wins
  if (guess === secretNumber) {
    displayMessage('number', secretNumber);
    displayMessage('message', '🎉 Correct Number!');
    score++;
    displayMessage('score', score);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayMessage('highscore', highScore);
    }
  }

  //when guess is wrong
  if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      displayMessage('score', score);
    } else {
      displayMessage('score', '💥 you lost the game!');
      displayMessage('score', 0);
    }
  }
});

//when player clicks on the Again button
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('number', '?');
  displayMessage('message', 'Start guessing...');

  score = 20;

  displayMessage('score', score);

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
