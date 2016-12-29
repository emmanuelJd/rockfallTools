"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var applyPhysic = require('../functions/applyPhysic');
describe('---- Check physic ----', function() {
    it('check piece physic, it should "fall" ', function() {
        console.log("boardGame :");
        console.log(plate.PlateVisu);
        let pieceToPlay = {
            "x": 2,
            "y": 1,
            "user": 1,
            "state": 0,
            "weight": 4
        };
        assert.equal(plate.Plate[1][2].state, 0);
        applyPhysic(plate.Plate, pieceToPlay);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);

        assert.equal(plate.Plate[1][2].state, 1);

    });

    it('check piece physic, it shouldn\'t "fall" ', function() {
        let pieceToPlay = {
            "x": 1,
            "y": 3,
            "user": 2,
            "state": 0,
            "weight": 4
        };
        applyPhysic(plate.Plate, pieceToPlay);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);

        assert.equal(plate.Plate[3][1].state, 0);

    });
});
