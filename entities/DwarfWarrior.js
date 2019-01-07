export function DwarfWarrior(name) {
    this.name = name;
    this.health = 1200;
    this.minDamage = 110;
    this.maxDamage = 140;
    this.block = getRandom(28,38);
    this.type = "warrior";
    this.armor = getRandom(5,8);
    this.attackSpeed = 1700;
}

DwarfWarrior.prototype = new ArenaCombatants();