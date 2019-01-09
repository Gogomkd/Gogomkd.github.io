export function Undead(name) {
    this.name = name;
    this.health = 750;
    this.minDamage = 140;
    this.maxDamage = 170;
    this.spell = getRandom(25, 35);
    this.armor = getRandom(1,3);
    this.type = "mage";
    this.attackSpeed = 1500;
    this.updateHealthBar = function(total, damage) {
        var total = 750;
        var value = this.health;
       var hBar = $(".healthBar6")
         var bar = $('.bar6');
         var hit = $('.hit6');
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
         setTimeout(function(){
             hit.css({'width': '0'});
             bar.css('width', barWidth + "%");
           }, 500);
           console.log(value, damage, barWidth);
           if (value < 0) {
             console.log("you dead, reset");
             return;
             }
     }
}

Undead.prototype = new ArenaCombatants();