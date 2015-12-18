'use strict';
var compiler = require('./compiler');
var debug = require('debug');

var log = debug('flowexp:verbose');
log.debug = debug('flowexp:debug');

function trimOuter(string) {
    log(`trimming out ${string}`);
    return string.slice(2, -2);

}
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
    this.tokens = compiler.compile(pattern);
}
var proto = FlowExp.prototype;

proto.parseString = function parseString(string) {
   /* var results = [];
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
    }*/return this.exec.apply(this,arguments);
};
/**
 *
 * @param {String} value
 *
 * */
proto.exec = function exec(value) {
    if (value._read) {
        return this.exec.stream.apply(this, value);
    }
    return this.exec.string.call(this,value);
};
proto.exec.string=function execString(value){
    let matcher=new Matcher(value,this.ast);
    return matcher.result;
};

module.exports = exports = FlowExp;
exports.compiler = compiler;
exports.compile = compiler.compile;