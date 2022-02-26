'use strict';

let secretNumber = Math.trunc((Math.random() * 20 ) + 1);
let score = 20;
let highScore = 0;
const scoreUpdate = document.querySelector('.score');
scoreUpdate.textContent = score;
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const bodyStyle = document.querySelector('body').style;

document.querySelector('.check').addEventListener('click',() => {
    const guess = Number(document.querySelector('.guess').value);
    //~ When There Is No Guess
    if(!guess) {
        message.textContent = '⛔ No Number!';
        score--;
        scoreUpdate.textContent = score; 
    } 
    //~ When Guess Is Too High
    else if (guess > secretNumber) {
        if(score > 1) {
            message.textContent = '⬆ Too High!';
            score--;
            scoreUpdate.textContent = score;
        } else {
            message.textContent = '💥 You Lost The Game!';
            scoreUpdate.textContent = 0;
        }
    }
    //~ When Guess Is Too Low
    else if (guess < secretNumber) {
        if(score > 1) {
            message.textContent ='⬇ Too Low!' ;
            score--;
            scoreUpdate.textContent = score;
        } else {
            message.textContent = '💥 You Lost The Game!';
            scoreUpdate.textContent = 0;
        }
    }
    //~ When Player Wins
    else if(guess === secretNumber) {
        // const highScore = document.querySelector('.highscore');
        // if(score > highScore.textContent) {
        //     highScore.textContent = score;
        // }
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        message.textContent = '🏆 Correct!!!';
        bodyStyle.backgroundColor = '#60b347';
        number.textContent = secretNumber;
        number.style.width = '30rem';
    }
})

document.querySelector('.again').addEventListener('click',() => {
    score = 20;
    document.querySelector('.guess').value = '';
    scoreUpdate.textContent = score;
    secretNumber = Math.trunc((Math.random() * 20 ) + 1);
    message.textContent = 'Start guessing...';
    bodyStyle.backgroundColor = '#222';
    number.textContent = '?';
    number.style.width = '15rem';
})