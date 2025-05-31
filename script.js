'use strict';

let score = 0;
let playerScore = 0;
let secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = guess;
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a valid Number';
  } else if (guess === guess) {
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Revant wins 🎉';

    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.topic').style.color = '#000';
    document.querySelector(
      '.topic'
    ).textContent = `The number you guessed was ${guess}`;
    document.querySelector('.topic').style.fontSize = '4rem';
    document.querySelector('.number').style.backgroundColor = '#DAA520';
    playerScore--;
    document.querySelector('.highscore').textContent = playerScore;
    document.querySelector('.again').style.color = '#DAA520';
    //disable click button
    document.querySelector('.check').disabled = true;
  }
});

// again button

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.topic').style.color = '#DAA520';
  document.querySelector('.topic').textContent = `Lets read your mind again!`;
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // renable click button
  document.querySelector('.check').disabled = false;

  //document.querySelector('.again').style.color = '#DAA520';
});
