export function Undead(name) {
    this.name = name;
    this.health = 1950;
    this.minDamage = 140;
    this.maxDamage = 170;
    this.spell = getRandom(25, 35);
    this.armor = getRandom(1,3);
    this.type = "mage";
    this.attackSpeed = 2900;
    this.updateHealthBar = function(total, damage) {
        var total = 1950;
        var p = $("#damageP1")
        var fB = $(".fightDesno");
        fB.find("#damageP1").html("Talbot is hit for "+ damage)
        var value = this.health;
        var box = $(".flip-card-front6")
       var hBar = $(".healthBar6")
       hBar.find(".healthBarP").html(value)
       setTimeout(function(){
        var animationName = "heartBeat";
        var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            hBar.find(".healthBarP").addClass(animationName).one(animationend,function() {
            $(this).removeClass(animationName);
        });
    
    }, this.attackSpeed - 200)
         var bar = $('.bar6');
         var hit = $('.hit6');
         if (value < 0) {
             console.log("you dead, reset");
             return;
             }
         var newValue = value - damage;
         var barWidth = (newValue / total) * 100;
         var hitWidth = (damage / value) * 100 + "%";
         if(barWidth < 0){
            barWidth = 0;
            hitWidth = 0;
        }
         hit.css('width', hitWidth);
         hBar.data('value', newValue);
         if(value < 875){
            bar.css("background", "#FA6600")
        }

         setTimeout(function(){
             hit.css({'width': '0'});
             bar.css('width', barWidth + "%");
           }, 500);

           setTimeout(function () {
            var animationName = "animated shake";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                box.addClass(animationName).one(animationend,function() {
                $(this).removeClass(animationName);
            });
        }, this.attackSpeed-200)

           console.log("curent health "+value+ " damage dealth " +damage+ " percentage of health left "+barWidth);
           if (value < 0) {
             console.log("you dead, reset");
             return;
             }
     }
}

Undead.prototype = new ArenaCombatants();