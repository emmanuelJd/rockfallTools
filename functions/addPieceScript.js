/**
* function to add a piece to the boardGame
*/

function addPieceScript(boardGame, indexPiece, piece) {

  if(!piece.hasOwnProperty("x") && !piece.hasOwnProperty("users")) throw new Error("not validate piece!");
  if (!boardGame.length) throw new Error("undefined boardGame!");
  if (!boardGame[0].length) throw new Error("undefined boardGame!");

  if(boardGame[0][piece.y] == 0){
    piece.y = 0;
    boardGame[0][piece.y] = piece;
    indexPiece.add(piece);
  }
}
