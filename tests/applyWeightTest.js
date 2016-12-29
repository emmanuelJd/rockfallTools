"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var applyWeight = require('../functions/applyWeight');

describe('---- Check weight ----', function() {
    it('check piece physic, it should "fall" ', function() {
        console.log("boardGame :");
        console.log(plate.PlateVisu);
        let pieceToPlay = {
            "x": 1,
            "y": 4,
            "user": 2,
            "state": 0,
            "weight": 4
        };
        assert.equal(plate.Plate[4][1].state, 0);
        applyWeight(plate.Plate, pieceToPlay);
        console.log("Piece to start with : ");
        console.log(pieceToPlay);
        
        assert.equal(plate.Plate[4][1].state, 2);

    });

    it('check piece physic, it shouldn\'t "fall" ', function() {
            let pieceToPlay = {
                "x": 3,
                "y": 4,
                "user": 2,
                "state": 0,
                "weight": 4
            };
            applyWeight(plate.Plate, pieceToPlay);
            console.log("Piece to start with : ");
            console.log(pieceToPlay);

            assert.equal(plate.Plate[4][3].state, 0);

    });
});
