"use strict";

/**
 * class object model
 */
class Piece {

    constructor(x, y = 0, user, state = 0, weight) {
        if (typeof x === 'undefined') throw new Error("create piece with x value!");
        if (typeof user === 'undefined') throw new Error("create piece with weight value!");
        if (typeof weight === 'undefined') throw new Error("create piece with user value!");
        this.x = x;
        this.y = y;
        this.user = user;
        this.sate = state;
        this.weight = weight;
    }

    get x() {
        return x;
    }

}

module.exports = Piece;
