/**
 * @param boardGame object with game information
 * @param nbForWinLine number horizontal piece align to win
 * @param piece piece to start to test a horizontal win
 *
 * @return object with verification status
 *
 * function to test a horizontal win start to a specific piece
 */
function checkHorizontal(boardGame, nbForWinLine, piece) {

    //verify input variable
    if (!boardGame.length) throw new Error("undefined boardGame!");
    if (!boardGame[0].length) throw new Error("undefined boardGame!");
    if (boardGame[0].length < nbForWinLine) throw new Error("boardGame too small to expect a win!");
    //if (!piece.hasOwnProperty(x) || !piece.hasOwnProperty(y) || piece.hasOwnProperty(user)) throw new Error("piece not valide!");
console.log(piece.hasOwnProperty("user"));
    if (!piece.hasOwnProperty("x") || !piece.hasOwnProperty("y") || !piece.hasOwnProperty("user")) throw new Error("piece not valide!");

    let xStartPosition = piece.x;
    let yStartPosition = piece.y;
    let user = piece.user;
    let countPiece = 1;

    /** count to the right */
    for (let i = xStartPosition + 1; i < boardGame[0].length; i++) {
        let tamponPiece = boardGame[yStartPosition][i];
        if (tamponPiece != 0) {
            if (tamponPiece.user == user) {
                countPiece++;
            }
        }
    }

    /** count to the left */
    for (let i = xStartPosition - 1; i >= 0; i--) {
        let tamponPiece = boardGame[yStartPosition][i];
        if (tamponPiece != 0) {
            if (tamponPiece.user == user) {
                countPiece++;
            }
        }
    }
    let result = {
        "count": countPiece,
        "user": user,
        "win": false
    };
    if (nbForWinLine <= countPiece) {
        result.win = true;
    }
    return result;
}

module.exports = checkHorizontal;
