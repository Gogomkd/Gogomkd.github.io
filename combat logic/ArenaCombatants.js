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

    
   
   
   this.applyChange = function(curHealth) {
    var a = curHealth * (100 / maxHealth);
    $(".health-bar-text").html(Math.round(a) + "%");
    $(".health-bar-red").animate({
      'width': a + "%"
    }, 700);
    $(".health-bar").animate({
      'width': a + "%"
    }, 500);
    $(".health-bar-blue").animate({
      'width': a + "%"
    }, 300);
    $('.total').html(curHealth + "/" + maxHealth);
  }
    

}

ArenaCombatants.prototype = new Being(); 