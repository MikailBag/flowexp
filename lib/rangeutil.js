function isInRange(val, range) {
    return !((range.start > val) || (val > range.end))
}

function isInRanges(val,ranges){
    return ranges.some(isInRange.bind(this,val));
}
module.exports={isInRange,isInRanges};