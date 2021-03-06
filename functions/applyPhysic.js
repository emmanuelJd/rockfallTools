"use strict";
/**
 * @param boardGame object with game information
 * @param piece piece to apply physic
 *
 * function to apply physic to a specific piece
 */
function applyPhysic(boardGame, piece) {

    //verify input variable
    if (!boardGame.length) throw new Error("undefined boardGame!");
    if (!boardGame[0].length) throw new Error("undefined boardGame!");
    if (!piece.hasOwnProperty("x") || !piece.hasOwnProperty("y") || !piece.hasOwnProperty("state")) throw new Error("piece not valide!");

    let xStartPosition = piece.x;
    let yStartPosition = piece.y;
    if (yStartPosition + 1 < boardGame.length) {
        if (boardGame[yStartPosition + 1][xStartPosition] == 0) {
            boardGame[yStartPosition][xStartPosition].state = 1;
        }
    }
}

module.exports = applyPhysic;
