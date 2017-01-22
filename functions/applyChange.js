"use strict";

/**
 * @param boardGame object with game information
 *
 * function to apply change to index piece
 */
function applyChange(boardGame, indexPiece, users) {

    //verify input variable
    if (!boardGame.length) throw new Error("Undefined boardGame!");
    if (!boardGame[0].length) throw new Error("Undefined boardGame!");

    let indexPieceTampon =  indexPiece;
    // console.log("applyChange indexPiece");
// console.log(indexPiece);
    for (let i = 0, indexLength = indexPiece.length; i < indexLength; i++) {
        let piece = indexPiece[i];
        let x = piece.x;
        let y = piece.y;

        switch (piece.state) {
            case 1:
            // console.log("MOVE ");
            // console.log(piece);
                boardGame[y + 1][x] = boardGame[y][x];
                boardGame[y + 1][x].y++;
                boardGame[y][x] = 0;
                //piece.y++;
                piece.state = 0;
                break;

            case 2:
                let userPointCase2 = users.find(user => user.id === boardGame[y][x].user);
                userPointCase2.point += boardGame[y][x].weight;
                //users[boardGame[y][x].user].point += boardGame[y][x].weight;
                //boardGame[y][x].state = 4;
                piece.state = 4;
                break;

            case 3:
                let userPointCase3 = users.find(user => user.id === boardGame[y][x].user);
                userPointCase3.point += boardGame[y][x].weight;
                //users[boardGame[y][x].user].point += boardGame[y][x].weight
                //boardGame[y][x].state = 4;
                piece.state = 4;
                break;

            case 4:
                boardGame[y][x] = 0;
                indexPieceTampon = indexPieceTampon.filter(item => item.id != piece.id);
            //     console.log("DESTROY ");
            // console.log(piece);
            // console.log(indexPieceTampon);
            //console.log(indexPiece);
                break;

            default:
                //indexPieceTampon = indexPieceTampon.filter(item => item != piece);
                break;
        }
    }
    //console.log(boardGame);
    return Object.assign([],indexPieceTampon);
}

module.exports = applyChange;
