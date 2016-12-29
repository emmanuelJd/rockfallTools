"use strict";

var _ = require('underscore');
/**
 * @param boardGame object with game information
 *
 * function to apply physic to a specific piece
 */
function applyChange(boardGame, indexPiece, users) {

    //verify input variable
    if (!boardGame.length) throw new Error("Undefined boardGameOne!");
    if (!boardGame[0].length) throw new Error("Undefined boardGameOne!");

    for (let i = 0, boardGameLength = boardGame.length; i < boardGameLength; i++) {
        for (let j = 0, boardGameRowLength = boardGameOne[0].length; j < boardGameRowLength; j++) {
            switch( boardGame[i][j].state ) {
              case 1: boardGame[i+1][j] = Object.assign({}, boardGame[i][j]);
                      boardGame[i][j] = 0;
                      break;

              case 2: users[boardGame[i][j].user].point += boardGame[i][j].weight;
                      boardGame[i][j].state = 4;
                      break;

              case 3: users[boardGame[i][j].user].point += boardGame[i][j].weight
                      boardGame[i][j].state = 4;
                      break;

              case 4: boardGame[i][j] = 0;
                      break;
            }
        }
    }
}

module.exports = applyChange;
