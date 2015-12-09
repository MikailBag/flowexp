require('should');
var assert = require('assert');
var FlowExp = require('./..');
describe('FlowExp', function () {
    var fe, result;
    it('creates fe', function () {
        fe = new FlowExp('%%foobar%%');
    });
    it('should match', function () {
        result = fe.exec('foobar isn\'t barfoo')[0];
        assert(result, 'no results?!');
        assert.equal(result._, 0);
    });
    it('supports multimatching', function () {
        fe = new FlowExp('%%foo%%');
        result = fe.exec("foobar isn't barfoo");
        assert(result[0] && result[1])
    });
    describe('handles special sequences', function () {
        it('supports optional parts', function () {
            fe = new FlowExp('%%bar?%%');//only one part and it is optional so it must match everywhere
            result = fe.exec('foobar');
            assert(result && result[0])
        });
    });
    describe('supports poly-steps FEs', function () {
        it('should correctly parse FEs with 2 steps', function () {
            fe = new FlowExp(`%%(foo)%(bar)%%`);
            result = fe.exec('foobar');
            assert(result && result[0]);
        });
    });
});