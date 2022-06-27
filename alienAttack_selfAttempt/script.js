let shotsMade = 0;
let shotsLeft = 12;
let guessX = 0;
let guessY = 0;
let alienX = Math.round(Math.random() * 280);
let alienY = 0;
let gameState = "";
let haveWon = false;

let cannon = document.querySelector("#cannon");
let alien = document.querySelector("#alien");
let explosion = document.querySelector("#explosion");
let missile = document.querySelector("#missile");

let output = document.querySelector("#output");
let inputX = document.querySelector("#inputX");
let inputY = document.querySelector("#inputY");

let fire_button = document.querySelector("#fire");
fire_button.addEventListener("click", clickHandler);

let restart_button = document.querySelector("#restart_button");
restart_button.addEventListener("click", restart);

function clickHandler(){
  validateInput();
}

function validateInput(){
  guessX = parseInt(inputX.value);
  guessY = parseInt(inputY.value);

  if(isNaN(guessX) || isNaN(guessY)){
    output.innerHTML = `Please enter a number for X and Y coordinate...`;
  }
  else if(guessX > 300 || guessY > 300){
    output.innerHTML = `Please enter a number that is less than 300`;
  }
  else{
    playGame();
  }
}

function playGame(){
  shotsMade++;
  shotsLeft--;
  gameState = `Shots made: ${shotsMade}. Shots left: ${shotsLeft}`;

  if(guessX >= alienX && guessX <= alienX + 20){
    if(guessY >= alienY && guessY <= alienY + 20){
      haveWon = true;
      endGame();
    }
  }
  else{
    output.innerHTML = `You missed. Try again! <br> ${gameState}`;
    if(shotsLeft < 1){
      endGame();
    }
  }

  render();
}

function render(){
  alienX = Math.round(Math.random() * 280);
  alienY += 20;

  if(haveWon){
    missile.style.left = `${guessX}px`;
    missile.style.top = `${guessY}px`;
    explosion.style.display = 'block';

    cannon.style.left = `${guessX}px`;
  }
  else{
    alien.style.left = `${alienX}px`;
    alien.style.top = `${alienY}px`;

    missile.style.left = `${guessX}px`;
    missile.style.top = `${guessY}px`;

    cannon.style.left = `${guessX}px`;
  }
}

function endGame(){
  fire_button.disabled = true;
  inputX.disabled = true;
  inputY.disabled = true;

  if(haveWon){
    output.innerHTML = `You won! It took you ${shotsMade} shots!`;
  }
  else{
    output.innerHTML = `You lost. Aliens have invaded the earth...`;
  }
}

function restart(){
 shotsMade = 0;
 shotsLeft = 12;
 guessX = 0;
 guessY = 0;
 alienX = Math.round(Math.random() * 280);
 alienY = 0;
 gameState = "";
 haveWon = false;

 output.innerHTML = 'Enter X and Y position below and press FIRE!...';

 fire_button.disabled = false;
 inputX.disabled = false;
 inputY.disabled = false;
}