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

let defaultLocation = 4;

let output = document.querySelector("#output");

output.innerHTML = map[defaultLocation];