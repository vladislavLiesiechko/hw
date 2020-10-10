'use strict'

function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return distance <= this.maxDistance;
}

Unit.prototype.isReadyToFight = function () {
    return this.maxHealth / 2 <= this.health;
}


Unit.prototype.restore = function () {
    this.health = this.health <= this.maxHealth ? this.maxHealth : this.health;
    return this.health;
}

Unit.prototype.clone = function () {
    return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
}

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}


Army.prototype.isReadyToMove = function () {
    return this.units.every((unit) => unit.isReadyToMove());
}


Army.prototype.isReadyToFight = function () {
    return this.units.every((unit) => unit.isReadyToFight());
}


Army.prototype.restore = function () {
    for (const unit of this.units) {
        unit.restore();
    }
}
Army.prototype.getReadyToMoveUnits = function () {
    return this.units.filter((unit) => unit.isReadyToMove());
}

Army.prototype.combineUnits = function (unit) {
    this.units = this.units.concat(unit);
    return this.units;
}

Army.prototype.cloneUnit = function (numberOfUnits) {
    const clonedUnit = this.units[numberOfUnits].clone();
    return clonedUnit;
}

const firstUnit = new Unit('Spider-Man', 90, 200, 400);
const secondUnit = new Unit('Iron Man', 200, 400, 800)
const heroesArray = [firstUnit, secondUnit];
const heroes = new Army(heroesArray);
copyOfUnit = heroes.cloneUnit(1);
heroes.combineUnits(copyOfUnit);
