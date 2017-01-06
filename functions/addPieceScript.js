/**
* function to add a piece to the boardGame
*/
function addPieceScript(boardGame, indexPiece, piece, users) {

  if(!piece.hasOwnProperty("x") && !piece.hasOwnProperty("users")) throw new Error("not validate piece!");
  if (!boardGame.length) throw new Error("undefined boardGame!");
  if (!boardGame[0].length) throw new Error("undefined boardGame!");
// if you want to add a piece, you need to have an action available and it's your turn to play 
  if(boardGame[0][piece.y] == 0 && users[piece.users].addAction && users[piece.users].turnToPlay){
    piece.y = 0;
    boardGame[0][piece.y] = piece;
    indexPiece.add(piece);
    users[piece.users].addAction -= 1;
  }
}
