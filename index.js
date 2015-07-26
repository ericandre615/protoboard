var protoboard = require('./src/protoboard');
var Board = require('./src/lib/board');

var board = protoboard.create('board', {rows: 60, columns: 20});
board.connect(40, 27);

var board2 = protoboard.create('board');

board2.connect(2,2);

var board3 = Board.create({rows: 80, columns: 100});    

board3.connect(3,3);

console.log(board);

console.log(board2);

console.log(board3);
