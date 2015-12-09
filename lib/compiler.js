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
function splitParts(string) {
    return string.split('%');
}
function handlePart(string) {
    let optionsAndPattern = string.split('$');

    let pattern, options;
    if (optionsAndPattern[1]) {
        pattern = optionsAndPattern[1];
        options = optionsAndPattern[0];
        options = parseOptions(options);
    } else {
        pattern = optionsAndPattern[0];
        options = {};
    }

    log.debug(`pattern is ${pattern}, options are ${options.toJSON()}`);
    let compiler = compilePart(pattern);//TODO -> if
    //compiler.required = !options.required;
    return compiler.bind(global, options);

}
function parseOptions(options) {
    var params = options;
    return params;
}
//-----workers-----

//TODO rewrite (tokenize->tokens store)
function compile(string) {

    var trimmed = trimOuter(string);
    var parts = splitParts(trimmed);
    var steps = parts.map(compilePart);
    log.debug(`${string} was compiled, ${trimmed} after trimming, parts are ${parts}`);
    return steps;
}


function compilePart(pattern) {
    log.debug(`compiling pattern '${pattern}'`);
    return function step(string) {

        var match = [];
        let pos = 0;
        while (true) {
            pos = string.indexOf(pattern, pos + 1);
            if (pos === -1) {
                return match;
            } else {
                match.push({
                    pos: pos,
                    params: {}
                })
            }
        }

    };
}

module.exports = {
    compile: compile,
    handlePart: handlePart,
    trimOuter: trimOuter
};
log('compiler is loaded successfuly');
//TODO extend exports
