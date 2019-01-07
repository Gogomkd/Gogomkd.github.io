export function HumanWarrior (name){
    this.name = name;
    this.health = 1200;
    this.minDamage = 60;
    this.maxDamage = 100;
    this.block = getRandom(20,40);
    this.armor = getRandom(2,7);
    this.type = "warrior";
    this.attackSpeed = 1500;
    
}

HumanWarrior.prototype = new ArenaCombatants();