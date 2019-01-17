export function DwarfWarrior(name) {
    this.name = name;
    this.health = 1900;
    this.minDamage = 130;
    this.maxDamage = 170;
    this.block = getRandom(28,38);
    this.type = "warrior";
    this.armor = getRandom(5,8);
    this.attackSpeed = 1700;
    this.updateHealthBar = function (total, damage) {
        var total = 1900;
        var p = $("#damageP2")
        var fB = $(".fightLevo");
        
        var value = this.health;
        var box = $(".flip-card-front3")
        var hBar = $('.healthBar3');
        hBar.find(".healthBarP").html(value)
        setTimeout(function(){
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                hBar.find(".healthBarP").addClass(animationName).one(animationend,function() {
                $(this).removeClass(animationName);
            });
        
        }, this.attackSpeed - 200)
        var bar = $('.bar3');
        var hit = $('.hit3');

        var newValue = value - damage;
        
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        if(barWidth < 0){
            barWidth = 0;
            hitWidth = 0;
        }
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if(value < 950){
            bar.css("background", "#FA6600")
        }
        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                fB.find("#damageP2").html("Brann takes " + damage+ " dmg")
                hit.css({ 'width': '0' }); 
                bar.css('width', barWidth + "%");
            } else if(damage > 200){
                fB.find("#damageP2").html("Brann takes crit " + damage)
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
            }
            else{
                hitWidth = 0;
                barWidth = 0;
                fB.find("#damageP2").html("Brann blocked");
        
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

DwarfWarrior.prototype = new ArenaCombatants();