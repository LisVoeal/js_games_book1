let map = [];
map[0] = 'An old stone keep.';
map[1] = 'A deep well.';
map[2] = 'A sunny glade.';
map[3] = 'A sleeping dragon.';
map[4] = 'A narrow pathway.';
map[5] = 'An ancient gate.';
map[6] = 'The edge of a river.';
map[7] = 'A lonely wooden bench.';
map[8] = 'An isolated cottage. Faint music comes from inside.';

let images = [];
images[0] = 'keep.png';
images[1] = 'well.png';
images[2] = 'glade.png';
images[3] = 'dragon.png';
images[4] = 'path.png';
images[5] = 'gate.png';
images[6] = 'river.png';
images[7] = 'bench.png';
images[8] = 'cottage.png';

let mapLocation = 4;
let playersInput = "";
let gameMessage = "";

let knownActions = ["north", "east", "west", "south"];
let action = "";

let input = document.querySelector("#input");
let output = document.querySelector("#output");

let button = document.querySelector("#button");
button.addEventListener("click", clickHandler);

function clickHandler(){
  playGame();
}

function playGame(){
  playersInput = input.value;
  playersInput.toLowerCase;

  gameMessage = "";
  action = "";

  for(i = 0; i < knownActions.length; i++){
    if(playersInput.indexOf(knownActions[i]) !== -1){
      action = knownActions[i];
      console.log(action);
      break;
    }
  }

  if(action === 'north') mapLocation -= 3;
  if(action === 'east') mapLocation += 1;
  if(action === 'south') mapLocation += 3;
  if(action === 'west') mapLocation -= 1;
  else gameMessage = "I dont unerstand that...";

  render();
}

function render(){
  output.innerHTML = map[mapLocation];
  output.innerHTML += `<br><em>${gameMessage}</em>`;
}

render();