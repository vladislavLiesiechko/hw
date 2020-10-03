function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function () {
    return this.maxDistance;
}
let unit = new Unit(10,20,100, 200);
console.log(unit.isReadyToMove());
Unit.prototype.isReadyToFight = function () {
    return this.maxHealth / 2 <= this.health;
}


Unit.prototype.restore = function () {
    if (this.health <= this.maxHealth) {
        return this.maxHealth;
    }
}
Unit.prototype.clone = function () {
    const unit = new Unit( this.type, this.health, this.maxHealth, this.maxDistance);
}

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

// Army.prototype.isReadyToMove = function
//     // Army.prototype.isReadyToFight;
// Army.prototype.restore;
// Army.prototype.getReadyToMoveUnits;
// Army.prototype.combineUnits;
// Army.prototype.cloneUnit;