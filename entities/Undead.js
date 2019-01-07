export function Undead(name) {
    this.name = name;
    this.health = 750;
    this.minDamage = 140;
    this.maxDamage = 170;
    this.spell = getRandom(25, 35);
    this.armor = getRandom(1,3);
    this.type = "mage";
    this.attackSpeed = 1500;
   
}

Undead.prototype = new ArenaCombatants();