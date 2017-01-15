
let UsersFonction = require('../functions/usersFunction');
let addPieceScript = require('../functions/addPieceScript');
let applyRule = require('../functions/applyRule');

describe('---- Script some plays ----', function () {

    it(' start simulation ', function () {

        //initialization game variable

        //index array piece
        let indexPieceTest = [];

        //player
        let usersTest = [
            { "id": "abd528FC", "name": "RootAsJey", "order": 0, "turn": 0, "point": 0, "pieceAction": 0, "pieceActionPerTurn": 1, "weightPiece": [5, 10, 15] },
            { "id": "ef585das", "name": "Loskarll", "order": 0, "turn": 0, "point": 0, "pieceAction": 0, "pieceActionPerTurn": 1, "weightPiece": [2, 4, 8] },
            { "id": "ef58ffas", "name": "Oshin", "order": 0, "turn": 0, "point": 0, "pieceAction": 0, "pieceActionPerTurn": 1, "weightPiece": [2, 8, 20] }
        ];

        //boardGame
        let boardGameTest = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];

        //game rules
        let gameRules = {
            "nbWinForLine":3
        };

        //initialize order to play
        UsersFonction.pickOrderPlayerToPlay(usersTest);

        //select player to play
        UsersFonction.getNextUserToPlay(usersTest);

        //first player add a piece
        let firstUser = usersTest.find(user => user.order == 1);
        let piece = { "id": 1, "x": 0, "y": 0, "state": 0, "weight": firstUser.weightPiece[0], "user": firstUser.id }; 
        //console.log(piece);
        //console.log(firstUser);
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        //console.log(indexPieceTest);
        //apply Rule
        applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);


        //select player to play
        UsersFonction.getNextUserToPlay(usersTest);

        //first player add a piece
        firstUser = usersTest.find(user => user.order == 2);
        piece = { "id": 2, "x": 0, "y": 0, "state": 0, "weight": firstUser.weightPiece[0], "user": firstUser.id }; 
        //console.log(piece);
        //console.log(firstUser);
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        //console.log(indexPieceTest);
        //apply Rule
        applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);
    });

});