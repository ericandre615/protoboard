'use strict';

var board = {
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
                value: options.rows || board.prototype.rows,
                writable: true,
                enumerable: true
            },
            columns: {
                value: options.columns || board.prototype.columns,
                writable: true,
                enumerable: true
            },
            rails: {
                value: options.rails || board.prototype.rails,
                writable: true,
                enumerable: true
            },
            connections: {
                value: board.prototype.collections || [],
                writable: true,
                enumerable: true
            },
            connect: {
                writable: false,
                configurable: false,
                enumerable: false,
                value: function connect(component, pins) {  
                    if(typeof component === 'undefined') {
                        throw new ReferenceError('component is undefined');
                    }
                    if(typeof pins === 'undefined') {
                        throw new ReferenceError('pins is undefined');
                    }
                    this.connections.push({
                        component: component,
                        pins: pins 
                    });
                    return this.connections;
                }
            }
        }

        return Object.create(board.prototype, config);
    }
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = board;
}
