'use strict';

var jumper = {
    prototype: {
        component: 'jumper',
        color: 'blue'
    },
    create: function create(options) {
        options = options || {};
        var config = {
            component: {
                value: jumper.prototype.component,
                writable: false,
                configurable: false,
                enumerable: true
            },
            color: {
                value: options.color || jumper.prototype.color,
                writiable: true,
                enumerable: true,
                configurable: false
            }
        }

        return Object.create(jumper.prototype, config);
    }
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = jumper;
}
