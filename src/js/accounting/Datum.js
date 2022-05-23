"use strict";

export default class Datum{
    static #MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    #day
    #month
    #year
    constructor(day, month, year) {
        this.#day = day;
        this.#month = month;
        this.#year = year;
    }

    getLongMonths() {
        return Datum.#MONTHS[this.#month - 1];
    }

    toString() {
        return `${this.#day}/${this.#month}/${this.#year}`;
    }

    toStringMonth() {
        return `${this.#day}/${this.getLongMonths}/${this.#year}}`;
    }


    get day() {
        return this.#day;
    }

    set day(value) {
        this.#day = value;
    }

    get month() {
        return this.#month;
    }

    set month(value) {
        this.#month = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }

    //let d =new Datum(1,1,1977);
    //console.log(d.getLongMonth());
}

