'use strict';

function isInRange(val, range) {
    return !((range.start > val) || (val > range.end));
}

function isInRanges(val,ranges){
 for(let range of ranges){
     if(isInRange(val,range)){
         return range;
     }

 }
}
module.exports={isInRange,isInRanges};