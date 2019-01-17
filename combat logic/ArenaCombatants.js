function ArenaCombatants() {
    this.attack = function (target, damage) {
        // console.log(this.name + " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage);
        target.updateHealthBar(target.health, damage);
        // console.log(target.name + " has " + target.health+ " health");
        // console.log("");
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
        this.checkLife();
       var warriorChanse = 30;
       var mageChance = 40;
       var spellBlock = 30;
       var reflect = 30
       if(this.isAlive && this.type === "warrior" && this.health > 0){
           if(calculatePercent(warriorChanse)){
               this.isBlocking = true;
               this.reflect = true;
           }else if(calculatePercent(reflect)){               
            this.reflect = true;
               
           }else{
            this.isBlocking = false;
            this.reflect = false;
           }
       }
       if(this.isAlive && this.type === "mage" && this.health > 0){
           if(calculatePercent(mageChance)){
               this.isCritical = true;
            
           }else if(calculatePercent(spellBlock)){
                this.isSpellBlock = true
               
           }else {
            this.isCritical = false;
            this.isSpellBlock = false;
           }
       }
    }
}

ArenaCombatants.prototype = new Being(); 