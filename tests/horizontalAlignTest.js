"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var checkHorizontal = require('../functions/checkHorizontal');

describe('---- Check horizontal align ----', function() {
    console.log("boardGame :");
    console.log(plate.PlateVisu);
    it('for 4 pieces to win, it should return true in win object', function() {
        let pieceToWin = 4,
            pieceToPlay = {
                x: 1,
                y: 1,
                user: 1
            };
        let result = checkHorizontal(plate.Plate, pieceToWin, pieceToPlay);
        console.log("Number of align piece to win : " + pieceToWin);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);
        assert.equal(result.win, true);
        assert.equal(result.user, pieceToPlay.user);
        assert.equal(result.count, 4);
    });

    it('for 4 pieces to win, it should return false in win object', function() {
        let pieceToWin = 4,
            pieceToPlay = {
                x: 1,
                y: 4,
                user: 1
            };
        let result = checkHorizontal(plate.Plate, pieceToWin, pieceToPlay);
        console.log("Number of align piece to win : " + pieceToWin);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);
        assert.equal(result.win, false);
        assert.equal(result.user, pieceToPlay.user);
        assert.equal(result.count, 3);
    });
});
