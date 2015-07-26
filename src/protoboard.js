var board = require('./lib/board');
var capacitor = require('./lib/capacitor');
var resistor = require('./lib/resistor'); 
var jumper = require('./lib/jumper');
var led = require('./lib/led');

var protoboard = {
    create: function create(type, options) {
        if(type) {
            if(type.toLowerCase() === 'board') {
                return board.create(options);
            }
            if(type.toLowerCase() === 'capacitor') {
                return capacitor.create(options);
            }
            if(type.toLowerCase() === 'resistor') {
                return resistor.create(options);
            }
            if(type.toLowerCase() === 'jumper') {
                return jumper.create(options);
            }
            if(type.toLowerCase() === 'led') {
                return led.create(options);
            }

            return true;
        } else {
            throw new ReferenceError('You must supply the type of component to be create');
            return false;
        }
    }
};

module.exports = protoboard;
