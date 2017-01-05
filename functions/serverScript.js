/**
* game rule is scheduling by this function
* first apply physic until all piece are not moving then
* apply weight on piece to delete all deny piece if a deleted piece is met then redo old instruction
*
*
*/

function applyRule(indexPiece, users) {

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
        triggeredPhysic = indexPiece.map(piece => applyPhysic(boardGame, piece, movingPiece)).reduce((mergedValue, piece) => piece.state == 1 ? (mergedValue || true) : (mergedValue || false), false);
        if (triggeredPhysic) {
            applyChange(boardGame, indexPiece, users);
        }
        //if physic not complete reapply physic

        //apply weigth for all piece
        if (!triggeredPhysic) {
            triggeredWeight = indexPiece.map(piece => applyWeight(boardGame, piece)).reduce((mergedValue, piece) => piece.state == 2 ? (mergedValue || true) : (mergedValue || false), false);
            if (triggeredWeight) {
                applyChange(boardGame, indexPiece, users);
            }
            //apply change
            //if a piece triggered weight reapply
        }
        //foreach marked piece check horizontal/vertical/diagonal
        if (!triggeredPhysic && !triggeredWeight) {
            triggeredHorizontalCheck = indexPiece.map(piece => checkHorizontal(boardGame, nbForWinLine, piece)).reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
            if (triggeredHorizontalCheck) {
                applyChange(boardGame, indexPiece, users);
            }
            //apply change
            if (!triggeredHorizontalCheck) {
                triggeredVerticalCheck = indexPiece.map(piece => checkVertical(boardGame, nbForWinLine, piece)).reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
                if (triggeredVerticalCheck) {
                    applyChange(boardGame, indexPiece, users);
                }
                //apply change
            }

            if (!triggeredHorizontalCheck && !triggeredVerticalCheck) {
                triggeredDiagonalCheck = indexPiece.map(piece => checkDiagonal(boardGame, nbForWinLine, piece)).reduce((mergedValue, piece) => piece.state == 3 ? (mergedValue || true) : (mergedValue || false), false);
                if (triggeredDiagonalCheck) {
                    applyChange(boardGame, indexPiece, users);
                }
                //apply change
            }
            //if a piece triggered weight reapply
        }
    } while (!triggeredPhysic && !triggeredWeight && !triggeredHorizontalCheck && !triggeredVerticalCheck && !triggeredDiagonalCheck);
    //if check triggered reapply physic
    // triggeredPhysic, triggeredWeight, triggeredHorizontalCheck
}
