function ArenaCombatants() {
    this.attack = function (target, damage) {
        console.log(this.name + " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage);
       
        console.log(target.name + " has " + target.health+ " health");
        console.log("");
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
        this.checkLife();
        this.updateHealthBar1(damage);
        this.updateHealthBar2(damage);
    }
    this.updateHealthBar1 = function(damage){
        var total = this.health,
        value = this.health
        hBar = $(".healthBar1");
        bar = hBar.find('.bar'),
        hit = hBar.find('.hit');
        var newValue = value - damage;
        var barWidth = newValue;
        var hitWidth = (damage / value) * 100;
        hit.css('width', hitWidth);
        hBar.data('this.health', newValue);
        setTimeout(function(){
            hit.css({'width': '0'});
            bar.css('width', barWidth);
          }, 500);
    }
    this.updateHealthBar2 = function(damage){
        var total = this.health,
        value = this.health
        hBar = $(".healthBar2");
        bar = hBar.find('.bar'),
        hit = hBar.find('.hit');
        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('this.health', newValue);
        setTimeout(function(){
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
          }, 500);
    }

}

ArenaCombatants.prototype = new Being(); 