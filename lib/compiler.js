'use strict';
var debug = require('debug');
var log = debug('flowexp:verbose');
log.debug = debug('flowexp:debug');

log('compiler is loaded');

//-----utilities-----


//TODO rewrite (tokenize->tokens store)
function compile(pattern) {
    let tokens = [];
    pattern.split('').forEach(function (char) {
        tokens.push({
            type: 'equals',
            value: char
        })
    });
return tokens;
}


module.exports = exports = {compile};
log('compiler is loaded successfuly');
//TODO extend exports
