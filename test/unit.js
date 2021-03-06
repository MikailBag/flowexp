'use strict';
require('should');
const assert = require('assert');
var FlowExp = require('./..');
var util = require('util');
var fe, result;
const ast=require('./ast');
describe('engine', function () {

    it('creates fe', function () {
        fe = new FlowExp('%%foobar%%');
        console.log(util.inspect(fe.constructor.prototype));
        assert(fe, 'fe isn\`t obj');
        assert(fe.exec);
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
describe('tokenizer', function () {
    let tok = FlowExp.compile;
    it('tokenizes plain text', function () {
        result = tok('just plain text');
        assert.equal(result.length, 'just plain text'.length);
    });
    it('tokenizes []',function(){
        result=tok('[foo]');
        assert.equal(result.length,1);
        assert.equal(result[0].type,'some');
        assert.equal(result[0].val.length,3);
    })


});
describe('matcher',function(){
    let match;
    it('matches with example ast',function(){
        fe=new FlowExp(ast);
        fe.ast=ast;
        match=fe.exec('foobarbarbar');
        assert.equal(match[0],true);
    })
});