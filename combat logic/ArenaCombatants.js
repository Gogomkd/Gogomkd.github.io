function ArenaCombatants() {
    this.attack = function (target, damage) {
        console.log(this.name + " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage);
        target.updateHealthBar(damage);
        console.log(target.name + " has " + target.health+ " health");
        console.log("");
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
        this.checkLife();
        
    }
   this.updateHealthBar = function( damage){
    hBar = $('.healthBar1'),
    bar = hBar.find('.bar1'),
    hit = hBar.find('.hit1');
    var total = this.health;
    
    var currentHealth = total - damage;
    var barWidth = (currentHealth / total) * 100 + "%";
    var hitWidth = (damage / currentHealth) * 100 ;
    hit.css('width', hitWidth);
    hBar.data('this.health', currentHealth);
    setTimeout(function(){
        hit.css({'width': '0'});
        bar.css('width', barWidth + "%");
      }, 300);
   }
    

}

ArenaCombatants.prototype = new Being(); 