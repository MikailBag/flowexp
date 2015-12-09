'use strict';
var debug = require('debug');
var log = debug('flowexp:verbose');
log.debug = debug('flowexp:debug');
const find=require('./find');
const rangeUtils=require('./rangeutil');
log('compiler is loaded');

//-----utilities-----


//TODO rewrite (tokenize->tokens store)
function compile(pattern) {
    let tokens = [];
    let squares=find.square(pattern);
    for(let char of pattern){

    }
    pattern.split('').forEach(function (char) {
        tokens.push({
            type: 'equals',
            value: char
        })
    });
return tokens;
}


module.exports = exports = {compile,find};
log('compiler is loaded successfuly');
//TODO extend exports
