'use strict';

// Selecting Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores,currentScore,activePlayer,playing;

// Starting Conditions

const init = () => {

scores = [0,0];
currentScore = 0;
activePlayer = 0;
playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');

player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
}

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling Dice Functionality
btnRoll.addEventListener('click',() => {

    if(playing) {
        // 1. Generating A Random Dice Roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check For Rolled 1
        if(dice !== 1) {
        // add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // switch to next player
        switchPlayer();
        }
    }
   
})

btnHold.addEventListener('click',() => {
    if(playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. check if score is >= 100
    if(scores[activePlayer] >= 100) {
        // Finish the game
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        // switch to next player
        switchPlayer();
    }
    }
})

btnNew.addEventListener('click',init);

/* 
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');

const player1Current = document.getElementById('current--0');
const player2Current = document.getElementById('current--1');

const player1Name = document.getElementById('name--0');
const player2Name = document.getElementById('name--1');

let currentPoint = 0; 
let activePlayer = 0;

let player1CurrentScore = 0;
let player2CurrentScore = 0;

rollDice.addEventListener('click',() => {
    const dice = document.querySelector('.dice');
    const diceRoll = Math.trunc((Math.random() * 6) + 1);

    dice.setAttribute('src',`dice-${diceRoll}.png`);
    if(activePlayer === 0) {
        if(diceRoll === 1) {
            activePlayer = 1;
            currentPoint = 0;
            player1Current.textContent = currentPoint;
            player2.classList.add('player--active');
            player1.classList.remove('player--active');

        } else {
            currentPoint = currentPoint + diceRoll;
            player1Current.textContent = currentPoint;
        }
    } else {
        if(diceRoll === 1) {
            activePlayer = 0;
            currentPoint = 0;
            player2Current.textContent = currentPoint;
            player1.classList.add('player--active');
            player2.classList.remove('player--active');

        } else {
            currentPoint = currentPoint + diceRoll;
            player2Current.textContent = currentPoint;
        }
    }
});

hold.addEventListener('click',() => {
    if(activePlayer === 0) {
         
            player1CurrentScore += currentPoint;
            player1Score.textContent = player1CurrentScore;
            if(player1CurrentScore >= 100) {
                player1Name.classList.add('player--winner');
                player1.classList.add('player--winner');
                currentPoint = 0;
            player1Current.textContent = currentPoint;
            rollDice.disabled = true;
            hold.disabled = true;
            } else {
            activePlayer = 1;
            currentPoint = 0;
            player1Current.textContent = currentPoint;
            player2.classList.add('player--active');
            player1.classList.remove('player--active');
        }

    } else {
         
            player2CurrentScore += currentPoint;
            player2Score.textContent = player2CurrentScore;
            if(player2CurrentScore >= 100) {
                player2Name.classList.add('player--winner');
                player2.classList.add('player--winner');
                currentPoint = 0;
            player2Current.textContent = currentPoint;
            rollDice.disabled = true;
            hold.disabled = true;
            } else {
            activePlayer = 0;
            currentPoint = 0;
            player2Current.textContent = currentPoint;
            player1.classList.add('player--active');
            player2.classList.remove('player--active');
        }

    }
})

newGame.addEventListener('click',() => {
    currentPoint = 0; 
    activePlayer = 0;

    player1.classList.add('player--active');
    player2.classList.remove('player--active');

    player1CurrentScore = 0;
    player2CurrentScore = 0;

    player1Score.textContent = player1CurrentScore;
    player2Score.textContent = player2CurrentScore;

    player1Current.textContent = currentPoint;
    player2Current.textContent = currentPoint;

    rollDice.disabled = false;
    hold.disabled = false;

    player1Name.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player2Name.classList.remove('player--winner');
    player2.classList.remove('player--winner');
}) */