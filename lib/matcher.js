let matchers = {};
module.exports = function matcher(string, tokList) {
    let pos = 0;
    let result;
    let match = [];
    for (let token of tokList) {
        result = matchers[token.type](string.slice(pos), token.value);
        if (result.match) {
            match.push(result.value);
            pos += result.pos;
        }
        else {
            return match.push(null);
        }
    }
};

matchers.equals = function (string, pat) {
    if (string.startsWith(pat)) {
        return {
            match: true,
            value: pat,
            pos: pat.length
        }
    }
};