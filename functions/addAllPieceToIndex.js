"use strict";

/**
 * @param boardGame object with game information
 *
 * function to apply add piece to a index
 */
function addAllPieceToIndex(boardGame, indexPiece) {

    //verify input variable
    if (!boardGame.length) throw new Error("Undefined boardGameOne!");
    if (!boardGame[0].length) throw new Error("Undefined boardGameOne!");

    for (let i = 0, boardLength = boardGame.length; i < boardLength; i++) {
      for(let j = 0, board0Length = boardGame[0].length; j < board0Length;j++){
        if(boardGame[i][j] != 0){
          indexPiece.push(boardGame[i][j]);
        }
      }
    }
}

module.exports = applyChange;
