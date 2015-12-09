'use strict';
var compiler = require('./compiler');
var debug = require('debug');

var log = debug('flowexp:verbose');
log.debug = debug('flowexp:debug');


//current syntax : %%agg%% (agg - some text)
/**
 * creates new FlowExp
 *
 * @constructor
 * @param {String} pattern
 * @returns {FlowExp}
 *
 *
 * */
function FlowExp(pattern) {
    if (!(this instanceof FlowExp)) {
        console.warn('constructor called without new');
        return new FlowExp(pattern);
    }
    log.debug(`FlowExp called with pattern ${pattern}`);
    if (typeof pattern !== 'string') {
        throw new SyntaxError('"pattern" argument missing or not a string')
    }
    this.pattern = pattern; //for debug
    this.steps = compiler.compile(pattern);


}
var proto = FlowExp.prototype;
FlowExp.prototype = {
    constructor: FlowExp,


    parseString: function parseString(string) {

        return this.steps[0](string);
    }

};
proto.parseString = function parseString(string) {
    var results = [];
    for (let step of this.steps) {
        results.push(step(string))
    }
    let matched = results.every((val)=>!!val);
    if (matched) {
        return [{
            _: results[0]
        }]
    } else {
        return []
    }
};
/**
 *
 * @param {String} value
 *
 * */
proto.exec = function exec(value) {
    //now only strings are supported
    //TODO streams
    return this.parseString(value);
};

module.exports =exports= FlowExp;
exports._compiler=compiler;