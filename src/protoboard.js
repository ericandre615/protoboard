var board = require('./lib/board');

var protoboard = {
    create: function create(type, options) {
        if(type) {
            if(type === 'board') {
                return board.create(options);
            }
        }
    }
};

module.exports = protoboard;
