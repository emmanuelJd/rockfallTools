"use strict";
/**
 * @param boardGame object with game information
 * @param piece piece to apply weight
 *
 *
 * function to apply physic to a specific piece
 */
function applyWeight(boardGame, piece) {

    //verify input variable
    if (!boardGame.length) throw new Error("undefined boardGame!");
    if (!boardGame[0].length) throw new Error("undefined boardGame!");
    if (!piece.hasOwnProperty("x") || !piece.hasOwnProperty("y") || !piece.hasOwnProperty("weight")) throw new Error("piece not valide!");

    let xStartPosition = piece.x;
    let yStartPosition = piece.y;
    let pieceWeight = piece.weight;
    let sumWeightPiece = 0;
    if (piece.state == 0) {
        //console.log("------START WEIGHT CHECK------");

        for (let i = yStartPosition - 1; i >= 0; i--) {
            if (i >= 0) {
                let tamponPiece = boardGame[i][xStartPosition];
                if (tamponPiece != 0) {
                    sumWeightPiece += tamponPiece.weight;
                } else {
                    break;
                }
            }
        }
        //console.log(sumWeightPiece);
        //console.log(pieceWeight * 2);
        if (sumWeightPiece > pieceWeight * 2) {
            //boardGame[yStartPosition][xStartPosition].state = 2;
            //console.log(boardGame[yStartPosition][xStartPosition]);
            //console.log(piece);
            piece.state = 2;
        }
        //console.log("------END WEIGHT CHECK------");
    }
}

module.exports = applyWeight;