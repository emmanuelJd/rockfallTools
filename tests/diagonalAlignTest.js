"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var checkDiagonal = require('../functions/checkDiagonal');

describe('---- Check diagonal align ----', function() {
    console.log("boardGame :");
    console.log(plate.PlateVisu);
    it('for 4 pieces to win, it should return true in win object', function() {
        let pieceToWin = 3,
            pieceToPlay = {
                x: 2,
                y: 3,
                user: 2
            };
        let result = checkDiagonal(plate.Plate, pieceToWin, pieceToPlay);
        console.log("Number of align piece to win : " + pieceToWin);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);
        //assert.equal(result.win, true);
        assert.equal(result.user, pieceToPlay.user);
        assert.equal(result.countPieceTopLeft, 3);
        assert.equal(result.countPieceTopRight, 2);
    });

    it('for 4 pieces to win, it should return false in win object', function() {
        let pieceToWin = 3,
            pieceToPlay = {
                x: 2,
                y: 4,
                user: 2
            };
        let result = checkDiagonal(plate.Plate, pieceToWin, pieceToPlay);
        console.log("Number of align piece to win : " + pieceToWin);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);
        assert.equal(result.win, false);
        assert.equal(result.user, pieceToPlay.user);
        assert.equal(result.countPieceTopLeft, 2);
        assert.equal(result.countPieceTopRight, 1);
    });
});
