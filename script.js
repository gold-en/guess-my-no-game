'use strict';

const message = document.querySelector('.message');
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    return;
  }

  if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    message.textContent = '🎉 Correct Number';
    score++;
    document.querySelector('.score').textContent = score;
  }

  if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }

  if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});
