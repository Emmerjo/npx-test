"use strict";

export default class WereldObject{
    constructor(point) {
        this._location = point;
    }

    getX() {
        return this._location.x;
    }

    setX(value) {
        this._location.x = value;
    }

    getY() {
        return this._location.y;
    }

    setY(value) {
        this._location.y = value;
    }

}
