"use strict";

var _ = require('underscore');
/**
 * users functions stack all function like next player to play, first picked player, ...
 */
class UsersFonction {

    /* function to pick next player*/
    static getNextUserToPlay(users, rules) {
        if (users.length <= 1) throw new Error("need a least two user");
        if (users.filter(user => user.order == 0).length != 0) throw new Error("All user need to have an order");

        let filterUser = users.filter(user => user.turn == 1);
        users.sort((pieceA, pieceB) => pieceA.order - pieceB.order);
        let userOneTurn = users[0];
        if (filterUser.length == 0) {
            userOneTurn.turn = 1;
            userOneTurn.pieceAction = userOneTurn.pieceActionPerTurn;
        } else if (filterUser.length == 1) {
            let selectedUser = filterUser[0];
            if (selectedUser.order == users.length) {
                userOneTurn.turn = 1;
                userOneTurn.pieceAction = userOneTurn.pieceActionPerTurn;
                selectedUser.turn = 0;
            } else {
                selectedUser.turn = 0;
                let nextPlayer = users.filter(user => user.order == selectedUser.order + 1);
                if (nextPlayer.length != 1) {
                    throw new Error("Only one next player");
                }
                nextPlayer[0].turn = 1;
                nextPlayer[0].pieceAction = nextPlayer[0].pieceActionPerTurn;
            }
        } else {
            throw new Error("Only one user with turn at 1");
        }
    }

    /* function to determine order player */
    static pickOrderPlayerToPlay(users) {
        users = _.shuffle(users);
        for (let i = 0, usersLength = users.length; i < usersLength; i++) {
            users[i].order = i + 1;
            users[i].turn = 0;
        }
    }
}

module.exports = UsersFonction;
