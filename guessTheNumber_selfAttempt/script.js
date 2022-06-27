let attemptsTaken = 0;
let attemptsLeft = 10;
let playerGuess;
let secretNumber = Math.round(Math.random() * 100);
let gameState = "";
let haveWon = false;

let input = document.querySelector("#guessInput");
let output = document.querySelector("#output");

let button = document.querySelector("#guessButton");
button.addEventListener("click", buttonClickHandler);

window.addEventListener("keydown", keydownHandler);

let arrow = document.querySelector("#arrow");

function buttonClickHandler(){
  validateInput();
}

function keydownHandler(event){
  if(event.keydown === 13){
    validateInput();
  }
}

function validateInput(){
  if(isNaN(parseInt(input.value))){
    output.innerHTML = 'Please enter a number...';
  }
  else{
    playGame();
  }
}

function playGame(){
  attemptsTaken++;
  attemptsLeft--;
  gameState = `Guesses: ${attemptsLeft}. Attempts: ${attemptsTaken}.`

  playerGuess = parseInt(input.value);

  render();

  if(playerGuess < secretNumber){
    output.innerHTML = 'Your guess is too low. ' + gameState;
    checkIfLost();
  }
  else if(playerGuess > secretNumber){
    output.innerHTML = 'Your guess is too high. ' + gameState;
    checkIfLost();
  }
  else if(playerGuess === secretNumber){
    haveWon = true;
    endGame();
  }

}

function checkIfLost(){
  if(attemptsLeft < 1){
    endGame();
  }
}

function endGame(){
  button.disabled = true;
  input.disabled = true;
  if(haveWon){ 
    if(attemptsTaken === 1){
      output.innerHTML = `Congratulations! You won in ${attemptsTaken} attempt!`;
    }
    else{
      output.innerHTML = `Congratulations! You won in ${attemptsTaken} attempts!`;
    }
  }
  else{
    output.innerHTML = `You lost... The secret number was: ${secretNumber}...`;
  }
}

function render(){
  arrow.style.left = `${playerGuess * 3}px`;
}