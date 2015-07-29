var board = require('./lib/board');
var capacitor = require('./lib/capacitor');
var resistor = require('./lib/resistor'); 
var jumper = require('./lib/jumper');
var led = require('./lib/led');

var protoboard = {
    types: [
        'board',
        'capacitor',
        'resistor',
        'jumper',
        'led',
    ],
    create: function create(type, options) {
        if(type) {
            type = type.toLowerCase();

            if(this.types.indexOf(type) === -1){
                throw new ReferenceError('not a valid component type');
                return;
            }

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
            if(type === 'led') {
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
