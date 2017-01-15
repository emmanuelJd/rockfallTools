"use strict";

var applyPhysic = require('../functions/applyPhysic');
var applyChange = require('../functions/applyChange');
var applyWeight = require('../functions/applyWeight');
var checkHorizontal = require('../functions/checkHorizontal');
var checkVertical = require('../functions/checkVertical');
var checkDiagonal = require('../functions/checkDiagonal');

/**
* game rule is scheduling by this function
* first apply physic until all piece are not moving then
* apply weight on piece to delete all deny piece if a deleted piece is met then redo old instruction
* apply verification on marked piece
*
*/

function applyRule(boardGame, indexPiece, users, gameRules) {

    //index of moving piece
    let movingPiece = [];

    let triggeredPhysic = false,
        triggeredWeight = false,
        triggeredHorizontalCheck = false,
        triggeredVerticalCheck = false,
        triggeredDiagonalCheck = false;

    do {
        //order list of piece to start bottom to top
        indexPiece = indexPiece.sort((pieceA, pieceB) => pieceB.y - pieceA.y);

        //apply physic to all piece and mark moving piece
        indexPiece.map(piece => applyPhysic(boardGame, piece));//.
        triggeredPhysic = indexPiece.reduce((mergedValue, piece) => piece.state == 1 ? (mergedValue || true) : (mergedValue || false), false);
        if (triggeredPhysic) {
            indexPiece = applyChange(boardGame, indexPiece, users);
        }
        //if physic not complete reapply physic

        //apply weigth for all piece
        if (!triggeredPhysic) {
            console.log("INDEXPIECE");
            console.log(indexPiece);
            indexPiece.map(piece => applyWeight(boardGame, piece));//.reduce((mergedValue, piece) => piece.state == 2 ? (mergedValue || true) : (mergedValue || false), false);
            triggeredWeight = indexPiece.reduce((mergedValue, piece) => piece.state == 2 ? (mergedValue || true) : (mergedValue || false), false);
            if (triggeredWeight) {
                indexPiece = applyChange(boardGame, indexPiece, users);
            }
            //apply change
            //if a piece triggered weight reapply
        }

        //foreach marked piece check horizontal/vertical/diagonal
        if (!triggeredPhysic && !triggeredWeight) {
            indexPiece.map(piece => checkHorizontal(boardGame, gameRules.nbForWinLine, piece));//.reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
            triggeredHorizontalCheck = indexPiece.reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
            if (triggeredHorizontalCheck) {
                indexPiece = applyChange(boardGame, indexPiece, users);
            }
            //apply change
            if (!triggeredHorizontalCheck) {
                indexPiece.map(piece => checkVertical(boardGame, gameRules.nbForWinLine, piece))//.reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
                triggeredVerticalCheck = indexPiece.reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
                if (triggeredVerticalCheck) {
                    indexPiece = applyChange(boardGame, indexPiece, users);
                }
                //apply change
            }

            if (!triggeredHorizontalCheck && !triggeredVerticalCheck) {
                indexPiece.map(piece => checkDiagonal(boardGame, gameRules.nbForWinLine, piece));//.reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
                triggeredDiagonalCheck = indexPiece.reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
                if (triggeredDiagonalCheck) {
                   indexPiece = applyChange(boardGame, indexPiece, users);
                }
                //apply change
            }
            //if a piece triggered weight reapply
        }
        console.log("---START-----");
        console.log("Physic : "+triggeredPhysic);
        console.log("Weight : "+triggeredWeight);
        console.log("horizontal : "+triggeredHorizontalCheck);
        console.log("vertical : "+triggeredVerticalCheck);
        console.log("diagonal : "+triggeredDiagonalCheck);
        console.log(boardGame);
        console.log("----END------");
        
    } while (triggeredPhysic || triggeredWeight || triggeredHorizontalCheck || triggeredVerticalCheck || triggeredDiagonalCheck);
    //if check triggered reapply physic
    // triggeredPhysic, triggeredWeight, triggeredHorizontalCheck
}

module.exports = applyRule;