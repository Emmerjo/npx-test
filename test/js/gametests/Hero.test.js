import Hero from "../../../src/js/game/Hero.js";
import Point from "../../../src/js/game/Point.js";


test('moveLeft should subtract 1 from the locations x value', () => {
    let location = new Point(5, 5);
    let hero = new Hero(location);
    hero.moveLeft();
    expect(hero.getX()).toBe(4);
})

test('moveRight should add 1 to location of x value', () => {
    let location = new Point(5, 5);
    let hero = new Hero(location);
    hero.moveRight();
    expect(hero.getX()).toBe(6);
})
