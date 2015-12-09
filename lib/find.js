'use strict';
const util=require('util');
exports.square = function (string) {
    //console.warn(`finding squares in ${string}`);
    let usages = [], startPos = 0, endPos;
    while (true) {
        startPos = string.indexOf('[', startPos+1);
        if (startPos==-1) {
            break;
        }
        endPos = string.indexOf(']', startPos+1);
        if (endPos==-1) {
            break;
        }
        usages.push({start: startPos, end: endPos})
    }
    //console.warn(`returns ${util.inspect(usages)}`);
    return usages;
};
