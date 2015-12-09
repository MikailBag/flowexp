'use strict';
var debug = require('debug');
var log = debug('flowexp:verbose');
log.debug = debug('flowexp:debug');

log('compiler is loaded');

//-----utilities-----
function trimOuter(string) {
    log(`trimming out ${string}`);
    return string.slice(2, -2);

}

//TODO rewrite (tokenize->tokens store)
function compile(str) {
    let tokens = [];
    str.split('').forEach(function (char) {
        tokens.push({
            type: 'equals',
            value: char
        })
    })

}


module.exports = exports = {compile};
log('compiler is loaded successfuly');
//TODO extend exports
