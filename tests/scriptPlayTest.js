"use strict";

let UsersFonction = require('../functions/usersFunction');
let addPieceScript = require('../functions/addPieceScript');
let applyRule = require('../functions/applyRule');

//describe('---- Script some plays ----', function () {

    //it(' start simulation Horizontal Win', function () {

        //initialization game variable

        //index array piece
        let indexPieceTest = [];

        //player
        let usersTest = [
            { "id": "abd528FC", "name": "RootAsJey", "order": 1, "turn": 0, "point": 0, "pieceAction": 0, "pieceActionPerTurn": 1, "weightPiece": [5, 10, 15] },
            { "id": "ef585das", "name": "Loskarll", "order": 2, "turn": 0, "point": 0, "pieceAction": 0, "pieceActionPerTurn": 1, "weightPiece": [2, 4, 20] },
            { "id": "ef58ffas", "name": "Oshin", "order": 3, "turn": 0, "point": 0, "pieceAction": 0, "pieceActionPerTurn": 1, "weightPiece": [5, 10, 20] }
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
            "nbWinForLine":4
        };

        //1 - select player to play
        UsersFonction.getNextUserToPlay(usersTest);
        let firstUser = usersTest.find(user => user.turn == 1);
        let piece = { "id": 1, "x": 0, "y": 0, "state": 0, "weight": firstUser.weightPiece[2], "user": firstUser.id };
        // console.log("------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa--------------------");
        // console.log(firstUser);
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);
        console.log("First");
        console.log(indexPieceTest);

        // 2 - select player to play
        UsersFonction.getNextUserToPlay(usersTest);
        firstUser = usersTest.find(user => user.turn == 1);
        piece = { "id": 2, "x": 1, "y": 0, "state": 0, "weight": firstUser.weightPiece[0], "user": firstUser.id };
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);
        console.log("SECOND");
        console.log(indexPieceTest);
        //3 - select player to play
        UsersFonction.getNextUserToPlay(usersTest);
        firstUser = usersTest.find(user => user.turn == 1);
        piece = { "id": 3, "x": 2, "y": 0, "state": 0, "weight": firstUser.weightPiece[1], "user": firstUser.id };
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);
        console.log("THIRD");
        console.log(indexPieceTest);

        //4 - select player to play
        UsersFonction.getNextUserToPlay(usersTest);
        firstUser = usersTest.find(user => user.turn == 1);
        piece = { "id": 4, "x": 1, "y": 0, "state": 0, "weight": firstUser.weightPiece[0], "user": firstUser.id };
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        let er = applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);
        console.log("FOUR");
        console.log(indexPieceTest);

        //5 - select player to play
       UsersFonction.getNextUserToPlay(usersTest);

        //6 - select player to play
        UsersFonction.getNextUserToPlay(usersTest);
        firstUser = usersTest.find(user => user.turn == 1);
        piece = { "id": 5, "x": 0, "y": 0, "state": 0, "weight": firstUser.weightPiece[2], "user": firstUser.id };
        addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
        applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);
        console.log("FIVE");
        console.log(indexPieceTest);
    //     //7 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.order == 1);
    //     piece = { "id": 6, "x": 2, "y": 0, "state": 0, "weight": firstUser.weightPiece[2], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);


    //     //8 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.turn == 1);
    //     piece = { "id": 7, "x": 3, "y": 0, "state": 0, "weight": firstUser.weightPiece[0], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);

    //     //9 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.turn == 1);
    //     piece = { "id": 8, "x": 3, "y": 0, "state": 0, "weight": firstUser.weightPiece[0], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);

    //     //10 - select player to play


    //     //11 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.turn == 1);
    //     piece = { "id": 9, "x": 2, "y": 0, "state": 0, "weight": firstUser.weightPiece[1], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);

    //     //12 - select player to play


    //     //13 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.order == 1);
    //     piece = { "id": 10, "x": 4, "y": 0, "state": 0, "weight": firstUser.weightPiece[1], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);


    //     //14 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.turn == 1);
    //     piece = { "id": 11, "x": 4, "y": 0, "state": 0, "weight": firstUser.weightPiece[1], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);

    //     //15 - select player to play
        

    //     //16 - select player to play
    //     UsersFonction.getNextUserToPlay(usersTest);
    //     firstUser = usersTest.find(user => user.order == 1);
    //     piece = { "id": 12, "x": 3, "y": 0, "state": 0, "weight": firstUser.weightPiece[2], "user": firstUser.id };
    //     addPieceScript(boardGameTest, indexPieceTest, piece, firstUser);
    //     applyRule(boardGameTest, indexPieceTest, usersTest, gameRules);


    //     //17 - select player to play
    //     //Horizontal win
    //     console.log("END SCRIPT");
    //     usersTest.map(user => console.log(user));
    //});

//});
