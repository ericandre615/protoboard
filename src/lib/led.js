'use strict';

var led = {
    prototype: {
        component: 'led',
        color: 'blue',
        leads: {
            anode: 1,
            cathode: 1
        },
        colors: [
            'rgb',
            'infared',
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'violet',
            'purple',
            'utlraviolet',
            'pink',
            'white'
        ]
    },
    create: function create(options) {
        options = options || {};
        var color = options.color || led.prototype.color;
        if(led.prototype.colors.indexOf(color) === -1) {
            color = led.prototype.color;
            var err = new Error('Not a valid color value');
            return err.stack || err.stacktrace;
        }

        var config = {
            component: {
                value: led.prototype.component,
                writable: false,
                configurable: false,
                enumerable: true
            },
            color: {
                value: color,
                writiable: true,
                configurable: false,
                enumerable: true 
            },
            leads: {
                value: led.prototype.leads,
                writiable: false,
                configurable: false,
                enumerable: true
            }
        }

        return Object.create(led.prototype, config);
    }
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = led;
}
