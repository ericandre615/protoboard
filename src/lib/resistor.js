'use strict';

var resistor = {
    prototype: {
        component: 'resistor'
    },
    create: function create(options) {
        options = options || {};
        var config = {
            component: {
                value: resistor.prototype.component,
                writable: false,
                configurable: false,
                enumerable: true
            }        
        }

        return Object.create(resistor.prototype, config);
    }
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = resistor;
}
