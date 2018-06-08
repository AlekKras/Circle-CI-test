/*
It will work for Mocha
 const assert = require('assert');

describe("smoke test", function(){
  it("checks quality", function(){
    assert.equal(true, false);
  });
});
*/
const chai = require("chai");
const expect = chai.expect;

describe("smoke test", function(){
  it("checks quality", function(){
    expect(true).to.be.true;
  });
});
