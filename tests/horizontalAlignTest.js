var assert = require('assert');
var plate = require('./_initialData');
var checkHorizontal = require('../functions/checkHorizontal');

console.log(plate);

describe('check horizontal align', function() {
  it('for 4 pieces to win, it should return true in win object', function() {
    console.log(checkHorizontal(plate, 4, {x:2, y:1, user:1}));
  });
});

describe('check horizontal align', function() {
  it('for 4 pieces to win, it should return false in win object', function() {
    //to define a win align 4 pieces
  });
});
