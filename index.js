var protoboard = require('./src/protoboard');

var board = protoboard.create('board', {rows: 60, columns: 20});
board.connect(40, 27);

var board2 = protoboard.create('board');

var capacitor = protoboard.create('capacitor');
var resistor = protoboard.create('resistor');
var jumper1 = protoboard.create('jumper');
var jumper2 = protoboard.create('jumper', {color: 'green'});

board2.connect(2,2);

console.log(board);

console.log(board2);

console.log(capacitor);
console.log(resistor);
console.log(jumper1);
console.log(jumper2);
