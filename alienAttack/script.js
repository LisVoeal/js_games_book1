let alienX = 80;
let alienY = 20;
let guessX = 0;
let guessY = 0;
let shotsRemaining = 8;
let shotsMade = 0;
let gameState = "";
let gameWon = false;

let cannon = document.querySelector("#cannon");
let missile = document.querySelector("#missile");
let alien = document.querySelector("#alien");

let inputX = document.querySelector("#inputX");
let inputY = document.querySelector("#inputY");
let output = document.querySelector("#output");

let button = document.querySelector("button");
button.addEventListener("click", clickHandler);
button.style.cursor = 'pointer';

function render(){
  
  alien.style.left = `${alienX}px`;
  alien.style.top = `${alienY}px`;

  cannon.style.left = `${guessX}px`;

  missile.style.left = `${guessX}px`;
  missile.style.top = `${guessY}px`;

}

function clickHandler(){

  playGame();

}

function playGame(){

  shotsRemaining--;
  shotsMade++;
  gameState = `Shots made: ${shotsMade}. Remaining missiles: ${shotsRemaining}`;

  guessX = parseInt(inputX.value);
  guessY = parseInt(inputY.value);

  if(guessX >= alienX && guessX <= alienX + 20){

    if(guessY >= alienY && guessY <= alienY + 20){
      gameWon = true;
      endGame();
    }
  }
  else{
    output.innerHTML = "Miss!" + gameState;
    if(shotsRemaining < 1){
      endGame();
    }
  }

  if(!gameWon){
    alienX = Math.floor(Math.random() * 280);
    alienY += 30;
  }

  render();

}

function endGame(){
  if(gameWon){
    output.innerHTML = `You win! You saved the earth! It took you ${shotsMade} attempts!`;
  }
  else{
    output.innerHTML = `You lost... The earth has been invaded...`;
  }
}