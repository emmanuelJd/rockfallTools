"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var applyWeight = require('../functions/applyWeight');

describe('---- Check weight ----', function() {

    it('check piece physic, it should "fall" ', function() {

        let pieceToPlay = {
            "x": 1,
            "y": 4,
            "user": 2,
            "state": 0,
            "weight": 4
        };
      let plateClone = JSON.parse(JSON.stringify(plate.Plate));
        assert.equal(plateClone[4][1].state, 0);
        applyWeight(plateClone, pieceToPlay);
        assert.equal(plateClone[4][1].state, 2);

    });

    it('check piece physic, it shouldn\'t "fall" ', function() {
        let pieceToPlay = {
            "x": 3,
            "y": 4,
            "user": 2,
            "state": 0,
            "weight": 4
        };
        let plateClone = JSON.parse(JSON.stringify(plate.Plate));
        applyWeight(plateClone, pieceToPlay);
        assert.equal(plateClone[4][3].state, 0);

    });
});
