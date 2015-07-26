var board = require('./lib/board');
var capacitor = require('./lib/capacitor');
var resistor = require('./lib/resistor'); 
var jumper = require('./lib/jumper');

var protoboard = {
    create: function create(type, options) {
        if(type) {
            if(type === 'board') {
                return board.create(options);
            }
            if(type === 'capacitor') {
                return capacitor.create(options);
            }
            if(type === 'resistor') {
                return resistor.create(options);
            }
            if(type === 'jumper') {
                return jumper.create(options);
            }
            return true;
        } else {
            throw new ReferenceError('You must supply the type of component to be create');
            return false;
        }
    }
};

module.exports = protoboard;
