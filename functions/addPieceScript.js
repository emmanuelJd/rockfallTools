"use strict";

var Piece = require("../models/piece");
/**
 * function to add a piece to the boardGame
 */
function addPieceScript(boardGame, indexPiece, piece, user) {

    Piece.pieceValidation(piece);
    if (!boardGame.length) throw new Error("undefined boardGame!");
    if (!boardGame[0].length) throw new Error("undefined boardGame!");

    console.log("------TRY TO ADD ---");
    console.log(piece);
    if (boardGame[0][piece.x] == 0 && user.pieceAction && user.turn && user.id == piece.user && user.weightPiece.indexOf(piece.weight) != -1) {
        piece.y = 0;
        boardGame[0][piece.x] = piece;
        indexPiece.push(piece);
        user.pieceAction -= 1;
        console.log("PIECE ADDED!");
    }
    console.log(boardGame);
    console.log("--------END TO TRY------");
}

module.exports = addPieceScript;
