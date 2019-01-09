function ArenaCombatants() {
    this.attack = function (target, damage) {
        console.log(this.name + " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage);
        target.updateHealthBar(target.health, damage);
        console.log(target.name + " has " + target.health+ " health");
        console.log("");
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
        this.checkLife();
        
    }
}

ArenaCombatants.prototype = new Being(); 