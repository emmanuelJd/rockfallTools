"use strict";

var assert = require('assert');
var plate = require('./_initialData');
var _ = require('underscore');
var applyChange = require('../functions/applyChange');

describe('---- Check change ----', function() {

    it('check piece change, it should fall ', function() {

        let pieceToPlay = {
            "id":12,
            "x": 4,
            "y": 3,
            "user": 1,
            "state": 1,
            "weight": 4
        };
        let users = {
          "1":{
            "point":0
          },
          "2":{
            "point":0
          }
        }
        let plateClone = JSON.parse(JSON.stringify(plate.Plate));
        assert.equal(plateClone[3][4].state, 1);
        applyChange(plateClone, [pieceToPlay], users);

        assert.equal(plateClone[4][4].id, 12);

    });

    it('check piece change, it should pass state 2 to 4 ', function() {
        let pieceToPlay = {
            "x": 3,
            "y": 4,
            "user": 2,
            "state": 2,
            "weight": 4
        };

        let users = {
          "1":{
            "point":0
          },
          "2":{
            "point":0
          }
        }
        let plateClone = JSON.parse(JSON.stringify(plate.Plate));
        applyChange(plateClone, [pieceToPlay], users);

        assert.equal(plateClone[4][3].state, 4);
        assert.equal(users["2"].point, 4);

    });

    it('check piece change, it should pass state 3 to 4 ', function() {
        let pieceToPlay = {
            "x": 3,
            "y": 4,
            "user": 2,
            "state": 3,
            "weight": 4
        };

        let users = {
          "1":{
            "point":0
          },
          "2":{
            "point":0
          }
        }
        let plateClone = JSON.parse(JSON.stringify(plate.Plate));
        applyChange(plateClone, [pieceToPlay], users);

        assert.equal(plateClone[4][3].state, 4);
        assert.equal(users["2"].point, 4);

    });

    it('check piece change, it should disapear  ', function() {
        let pieceToPlay = {
            "id":16,
            "x": 3,
            "y": 4,
            "user": 2,
            "state": 4,
            "weight": 4
        };

        let users = {
          "1":{
            "point":0
          },
          "2":{
            "point":0
          }
        };

        let plateClone = JSON.parse(JSON.stringify(plate.Plate));
        let indexPiece = [pieceToPlay , {"id":17, "x": 2, "y": 4, "user": 2, "state": 0,"weight": 4}];
        plateClone[4][3].state = 4
        assert.equal(plateClone[4][3].state, 4);
        assert.equal(indexPiece.length, 2);

        indexPiece = applyChange(plateClone, indexPiece, users);

        assert.equal(plateClone[4][3], 0);
        assert.equal(indexPiece.length, 0);
    });
});