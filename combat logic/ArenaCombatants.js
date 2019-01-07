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
    this.updateHealthBar = function(damage){
        var total = this.health;
        var value = this.health;
        hBar = $(".HealthBar1");
        bar = hBar.find('.bar'),
        hit = hBar.find('.hit');
        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        setTimeout(function(){
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
          }, 500);
    }

}

ArenaCombatants.prototype = new Being(); 