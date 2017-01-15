"use strict";
var Piece = require("../models/Piece");
/**
 * function to add a piece to the boardGame
 */
function addPieceScript(boardGame, indexPiece, piece, user) {

    Piece.pieceValidation(piece);
    if (!boardGame.length) throw new Error("undefined boardGame!");
    if (!boardGame[0].length) throw new Error("undefined boardGame!");
    // if you want to add a piece, you need to have an action available and it's your turn to play
//console.log(boardGame[0][piece.x] == 0);
//console.log(user.pieceAction);
//console.log(user.turn);
//console.log(user.id == piece.user);
//console.log(user.weightPiece.indexOf(piece.weight) != -1);
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
