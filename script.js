'use strict';
//selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

/*const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;*/
let score,currentScore,activePlayer,playing;

const init = function () {
	 score = [0, 0];
	 currentScore = 0;
	 activePlayer = 0;
	 playing = true;

	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;

	player0El.classList.remove('player--winner')
	player1El.classList.remove('player--winner')
	player0El.classList.add('player--active')
	player1El.classList.remove('player--active')
}
init();

const switchPlayer = function(){
	document.getElementById(`current--${activePlayer}`).textContent =0;
    activePlayer = activePlayer === 0 ? 1 : 0; //ternary operator
	currentScore=0
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
}
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1:generating a random dice roll
  if (playing){

  
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2:display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3check for rolled 1 if true ,switch to next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    /*current0El.textContent = currentScore;*/
  } else {
    //switch to next player
	switchPlayer();}
  }
});
btnHold.addEventListener('click',function(){
	//1.add current score to active player's score 
	if (playing){
	score[activePlayer]+= currentScore;
	document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer]

	if (score[activePlayer]>=20){
		//finish the game
		playing=false
		diceEl.classList.add('hidden')
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
	}
	else{
		switchPlayer()
	}}
	btnNew.addEventListener('click',init/*function(){
		//reset the game	
		score0El.textContent = 0;
		score1El.textContent = 0;
		current0El.textContent = 0;
		current1El.textContent = 0;
		player0El.classList.remove('player--winner')
		player1El.classList.remove('player--winner')
		player0El.classList.add('player--active')
		player1El.classList.remove('player--active')


	}*/)
})