export function HumanWarrior (name){
    this.name = name;
    this.health = 2200;
    this.minDamage = 60;
    this.maxDamage = 100;
    this.block = getRandom(20,40);
    this.armor = getRandom(2,7);
    this.type = "warrior";
    this.attackSpeed = 1500;
    this.updateHealthBar = function(total, damage) {
       var total = 2200;
       var value = this.health;
      var hBar = $(".healthBar1")
      hBar.find(".healthBarP").html(value)
        var bar = $('.bar1');
        var hit = $('.hit1');
        hBar.data("total");
        hBar.data("value");
        if (value < 0) {
            console.log("you dead, reset");
            return;
            }
        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if(value < 1100){
            bar.css("background", "#FA6600")
        }
        setTimeout(function(){
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
          }, 500);
          console.log("curent health "+value+ " damage dealth " +damage+ " percentage of health left "+barWidth);
          if (value < 0) {
            console.log("you dead, reset");
            return;
            }
    }
}

HumanWarrior.prototype = new ArenaCombatants();