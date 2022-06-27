let secretNumber = Math.round(Math.random()*100);
let playerGuess = 0;
let guessesRemaining = 10;
let guessesTaken = 0;
let gameState = "";
let gameWon = false;

let input = document.querySelector("#input");
let output = document.querySelector("#output");

let button = document.querySelector("#button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

window.addEventListener("keydown", keydownHanlder, false);

function keydownHanlder(event){
  if(event.keyCode === 13){
    validateInput();
  }
}

function clickHandler(){
  validateInput();
}

function playGame(){

  guessesRemaining--;
  guessesTaken++;
  gameState = `Guess: ${guessesTaken}. Remaining: ${guessesRemaining}`;

  if(playerGuess > secretNumber){
    output.innerHTML = "Thats too high... " + gameState;

    if(guessesRemaining < 1){
      endGame();
    }
  }

  else if(playerGuess < secretNumber){
    output.innerHTML = "Thats too low... " + gameState;

    if(guessesRemaining < 1){
      endGame();
    }
  }

  else if(playerGuess === secretNumber){
    gameWon = true;
    endGame();
  }
}

function endGame(){
  if(gameWon){
    output.innerHTML = `Yes! It is a ${secretNumber}.<br> It only took you ${guessesTaken} attempts.`
  }
  
  else{
    output.innerHTML = `No more guesses left!<br> The number was ${secretNumber}.`
  }

  button.removeEventListener("click", clickHandler, false);
  button.disabled = true;

  window.removeEventListener("keydown", keydownHanlder, false);

  input.disabled = true;

}

function validateInput(){
  playerGuess = parseInt(input.value);

  if(isNaN(playerGuess)){
    output.innerHTML = "Please enter a number."
  }

  else{
    playGame();
  }
}

