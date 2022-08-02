'use strict';

// selecting elements
const score0_element = document.querySelector('#score--0');
const score1_element = document.getElementById('score--1');

const dice_element = document.querySelector('.dice');

const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

const current_score_0 = document.querySelector('#current--0');
const current_score_1 = document.querySelector('#current--1');

const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

//set score to 0

score0_element.textContent = 0;
score1_element.textContent = 0;

//current score variable
let current_score = 0;
let active_player = 0;

let score = [0, 0];
//hide dice element

dice_element.classList.add('hide');

const switch_player = function () {
  if (active_player === 0) {
    current_score = 0;
    active_player = 1;
  } else {
    current_score = 0;
    active_player = 0;
  }
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

// rolling dice function

btn_roll.addEventListener('click', function () {
  //gen rand dice
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  //display dice
  dice_element.classList.remove('hide');
  dice_element.src = `dice-${dice}.png`;
  //check if rolled #1 then switch the player
  if (dice !== 1) {
    current_score += dice;
    document.querySelector(`#current--${active_player}`).textContent =
      current_score;
    // current_score_0.textContent = current_score;
  } else {
    document.querySelector(`#current--${active_player}`).textContent = 0;
    //switch player
    switch_player();
  }
});

btn_hold.addEventListener('click', function () {
  score[active_player] += current_score;
  score0_element.textContent = score[0];
  score1_element.textContent = score[1];
  if (score[0] >= 100) {
    score0_element.textContent = `WINS!`;
  } else if (score[1] >= 100) {
    score1_element.textContent = `WINS!`;
  }
  document.querySelector(`#current--${active_player}`).textContent = 0;

  switch_player();
});

btn_new.addEventListener('click', function () {
  current_score = 0;
  active_player = 0;
  score[0] = 0;
  score[1] = 0;
  score0_element.textContent = score[0];
  score1_element.textContent = score[1];
  player_0.classList.add('player--active');
  player_1.classList.remove('player--active');
});
