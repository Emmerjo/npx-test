"use strict";

import WereldObject from "./WereldObject.js";

export default class Hero extends WereldObject{

    moveDown() {
        this._location.y--;
    }

    moveUp() {
        this._location.y++;
    }

    moveLeft() {
        this._location.x--;
    }

    moveRight() {
        this._location.x++;
    }
}
