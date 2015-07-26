# Protoboard.js
## Library and API for prototyping electronics project

This is the start of trying to create a library and API for experimenting
with creating electronics projects utilizing breadboards and common electronic
components such as capacitors, resistors, LEDs, switches, etc.

Currently in a very early stage. First real attempt at trying to utilize factory patterns with `Object.create`
instead of constructor patterns with `new`

## Usage

Currently you can either use `protoboard.js` as the central API mechanism to create various 
new components or you can use the individual components separately to create those components

### Example

```
var protoboard = require('./src/protoboard');

var board = protoboard.create('board', { rows: 60, columns: 20 });
var jumper = protoboard.create('jumper', { color: 'red' });

board.connect(jumper, [12, 24]);
```
or

```
var Board = require('./src/lib/board');

var board = Board.create();
```

