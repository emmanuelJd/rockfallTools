var _ = require('underscore');
/**
 * users functions stack all function like next player to play, first picked player, ...
 */
class UsersFonction {

    /* function to pick next player*/
    static getNextUserToPlay(users) {
        let filterUser = users.filter(user => user.turn == 1)[0];
        let startToPlay = filterUser.length;
        if (!startToPlay || filterUser.order == (users.length - 1)) {
            users[0].turn = 1;
        } else {
            filterUser.turn = 0;
            users.filter(user => user.order == filterUser.order + 1)[0].turn = 1;
        }
    }

    /* function to determine order player */
    static pickOrderPlayerToPlay(users) {
        users = _.shuffle(users);
        for (let i = 0, usersLength = users.length; i < usersLength; i++) {
            users[i].order = i;
            users[i].turn = 0;
        }
    }
}
