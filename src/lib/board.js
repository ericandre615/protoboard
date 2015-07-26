'use strict';

var Board = {
    prototype: {
        rows: 30,
        columns: 10,
        rails: 2,
        rail: {
            positive: 1,
            negative: 0
        },
        connections: []
    },
    create: function create(options) {
        options = options || {};
        var config = {
            rows: {
                value: options.rows || Board.prototype.rows,
                writable: true,
                enumerable: true
            },
            columns: {
                value: options.columns || Board.prototype.columns,
                writable: true,
                enumerable: true
            },
            rails: {
                value: options.rails || Board.prototype.rails,
                writable: true,
                enumerable: true
            },
            connections: {
                value: Board.prototype.collections || [],
                writable: true,
                enumerable: true
            },
            connect: {
                writable: false,
                configurable: false,
                enumerable: false,
                value: function connect(pin1, pin2) {  
                    this.connections.push({ 
                        pin1: pin1,
                        pin2: pin2
                    });
                    return this.connections;
                }
            }
        }

        return Object.create(Board.prototype, config);
    }
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = Board;
}
