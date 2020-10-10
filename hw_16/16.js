'use strict'
class Unit {
    constructor(type, health, maxHealth, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.maxDistance = maxDistance;
    }

    isReadyToMove(distance) {

        return distance <= this.maxDistance;
    }

    isReadyToFight() {
        return this.maxHealth / 2 <= this.health;
    }

    restore() {
        this.health = this.health <= this.maxHealth ? this.maxHealth : this.health;
        return this.health;
    }

    clone(unit) {
        return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
    }


}


class Army {
    constructor(defaultUnits) {
        this.units = [];
        if (defaultUnits) this.combineUnits(defaultUnits);
    }

    isReadyToMove() {
        return this.units.every((unit) => unit.isReadyToMove());
    }

    isReadyToFight() {
        return this.units.every((unit) => unit.isReadyToFight());
    }


    restore() {
        for (const unit of this.units) {
            unit.restore();
        }
    }

    getReadyToMoveUnits() {
        return this.units.filter((unit) => unit.isReadyToMove());
    }

    combineUnits(unit) {
        this.units = this.units.concat(unit);
        return this.units;
    }

    cloneUnit(numberOfUnits) {
        const clonedUnit = this.units[numberOfUnits].clone();
        return clonedUnit;
    }

}


const firstUnit = new Unit('Spider-Man', 90, 200, 400);
const secondUnit = new Unit('Iron Man', 200, 400, 800)
const heroesArray = [firstUnit, secondUnit];
const heroes = new Army(heroesArray);
const copyOfUnit = heroes.cloneUnit(1);
