export function OrcWarrior (name){
    this.name = name;
    this.health = 1300;
    this.minDamage = 70;
    this.maxDamage = 110;
    this.block = getRandom(16,26);
    this.armor = getRandom(4,7);
    this.type = "warrior";
    this.attackSpeed = 1800;
}

OrcWarrior.prototype = new ArenaCombatants();