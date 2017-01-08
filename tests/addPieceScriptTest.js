"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var _ = require('underscore');
var addPieceScript = require('../functions/addPieceScript');

describe('---- add piece to party ----', function () {

    it(' add a piece to the game should succed', function () {

        let indexPiece = [],
            piece = {
                "id": 1,
                "x": 1,
                "y": 0,
                "user": 1
            };

        assert.equal(0, indexPiece.length);
        assert.equal(1, plate.Users[0].pieceAction);
        assert.equal(0, plate.Plate[0][piece.x]);
        addPieceScript(plate.Plate, indexPiece, piece, plate.Users[0]);
        assert.equal(0, plate.Users[0].pieceAction);
        assert.equal(piece.x, plate.Plate[0][piece.x].x);
        assert.equal(1, indexPiece.length);

    });

    it(' add a piece to the game should failed', function () {

        let indexPiece = [],
            piece = {
                "id": 1,
                "x": 1,
                "y": 0,
                "user": 1
            };

        assert.equal(0, indexPiece.length);
        addPieceScript(plate.Plate, indexPiece, piece, plate.Users[1]);
        assert.equal(0, indexPiece.length);

    });

    it(' add a piece to the game should failed', function () {

        let indexPiece = [],
            piece = {
                "id": 1,
                "x": 0,
                "y": 0,
                "user": 1
            };

        assert.equal(0, indexPiece.length);
        addPieceScript(plate.Plate, indexPiece, piece, plate.Users[1]);
        assert.equal(0, indexPiece.length);

    });

    it(' add a piece to the game should failed', function () {

        let indexPiece = [],
            piece = {
                "id": 1,
                "x": 1,
                "y": 0,
                "user": 1
            };

        assert.equal(0, indexPiece.length);
        addPieceScript(plate.Plate, indexPiece, piece, plate.Users[2]);
        assert.equal(0, indexPiece.length);

    });

});