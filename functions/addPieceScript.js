"use strict";

/**
 * function to add a piece to the boardGame
 */
function addPieceScript(boardGame, indexPiece, piece, user) {

    if (!piece.hasOwnProperty("x") && !piece.hasOwnProperty("id") && !piece.hasOwnProperty("user") && !piece.hasOwnProperty("weight") && !piece.hasOwnProperty("state")) throw new Error("not validate piece!");
    if (!boardGame.length) throw new Error("undefined boardGame!");
    if (!boardGame[0].length) throw new Error("undefined boardGame!");
    // if you want to add a piece, you need to have an action available and it's your turn to play

    if (boardGame[0][piece.x] == 0 && user.pieceAction && user.turn) {
        piece.y = 0;
        boardGame[0][piece.x] = piece;
        indexPiece.push(piece);
        user.pieceAction -= 1;
    }
}

module.exports = addPieceScript;
