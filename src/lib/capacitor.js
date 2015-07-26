'use strict';

var capacitor  = {
    prototype: {
        component: 'capacitor'
    },
    create: function create(options) {
        options = options || {};
        var config = {
            component: {
                value: capacitor.prototype.component,
                writable: false,
                configurable: false,
                enumerable: true
            }        
        }

        return Object.create(capacitor.prototype, config);
    }
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = capacitor;
}
