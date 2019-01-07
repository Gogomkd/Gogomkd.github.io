export function HumanSorcerer (name){
    this.name = name;
    this.health = 800;
    this.minDamage = 100;
    this.maxDamage = 140;
    this.spell = getRandom(15,25);
    this.armor = getRandom(1,4);
    this.type = "mage";
    this.attackSpeed = 1400;
}

HumanSorcerer.prototype = new ArenaCombatants();