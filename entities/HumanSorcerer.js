export function HumanSorcerer (name){
    this.name = name;
    this.health = 2100;
    this.minDamage = 110;
    this.maxDamage = 190;
    this.spell = getRandom(15,25);
    this.armor = getRandom(1,4);
    this.type = "mage";
    this.attackSpeed = 2800;      
    this.updateHealthBar = function (total, damage) {
        var total = 2100;
        var value = this.health;
        var box = $(".flip-card-front2")
        var p = $("#damageP2")
        var fB = $(".fightLevo");
        
        var hBar = $('.healthBar2');
        hBar.find(".healthBarP").html(value)
        setTimeout(function(){
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                hBar.find(".healthBarP").addClass(animationName).one(animationend,function() {
                $(this).removeClass(animationName);
            });
        
        }, this.attackSpeed - 200)
        var bar = $('.bar2');
        var hit = $('.hit2');
   
        var newValue = value - damage;

        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        if(barWidth < 0){
            barWidth = 0;
            hitWidth = 0;
        }
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if(value < 900){
            bar.css("background", "#FA6600")
            
        }
        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                fB.find("#damageP2").html("Janna takes " + damage+ " dmg")
                hit.css({ 'width': '0' }); 
                bar.css('width', barWidth + "%");
            } else if(damage > 200){
                fB.find("#damageP2").html("Janna takes crit " + damage)
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
            }
            else{
                hitWidth = 0;
                barWidth = 0;
                fB.find("#damageP2").html("Janna blocked");
        
            }
            
            
        }, 500);
        
        setTimeout(function () {
            var animationName = "animated shake";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                box.addClass(animationName).one(animationend,function() {
                $(this).removeClass(animationName);
            });
        }, this.attackSpeed-200)
      
    }
}

HumanSorcerer.prototype = new ArenaCombatants();