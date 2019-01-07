export function BloodElf (name){
    this.name = name;
    this.health = 900;
    this.minDamage = 120;
    this.maxDamage = 160;
    this.block = getRandom(30,40);
    this.armor = getRandom(3,6);
    this.type = "warrior";
    this.attackSpeed = 2100;

}

BloodElf.prototype = new ArenaCombatants();