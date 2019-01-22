export function OrcWarrior(name) {
    this.name = name;
    this.health = 2300;
    this.minDamage = 140;
    this.maxDamage = 199;
    this.block = getRandom(16, 26);
    this.armor = getRandom(4, 7);
    this.type = "warrior";
    this.attackSpeed = 2000;
    this.updateHealthBar = function (total, damage) {

        var total = 2300;
        var fB = $(".fightDesno");
        var takeHit = new Audio("audio/thrall.mp3");
        var box = $(".flip-card-front4")
        var value = this.health;
        var hBar = $('.healthBar4');
        hBar.find(".healthBarP").html(value);
        setTimeout(function () {
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            hBar.find(".healthBarP").addClass(animationName).one(animationend, function () {
                $(this).removeClass(animationName);
            });

        }, this.attackSpeed - 200);
        var bar = $('.bar4');
        var hit = $('.hit4');

        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";

        if (barWidth < 0) {
            barWidth = 0;
            hitWidth = 0;
        }
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if (value < 1150) {
            bar.css("background", "#FA6600")
        }

        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                fB.find("#damageP1").html("Thrall takes " + damage+ " dmg").css("color", "white")
                hit.css({ 'width': '0' }); 
                bar.css('width', barWidth + "%");
            } else if(damage > 200){
                fB.find("#damageP1").html("Thrall takes crit " + damage).css("color", "red").addClass("animated heartBeat")
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
                takeHit.play();
            }
            else{
                hitWidth = 0;
                barWidth = 0;
                fB.find("#damageP1").html("Thrall blocked").css("color", "white");;
        
            }
        }, 500);

        setTimeout(function () {
            var animationName = "animated shake";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            box.addClass(animationName).one(animationend, function () {
                $(this).removeClass(animationName);
            });
        }, this.attackSpeed - 200)
     
    }

}

OrcWarrior.prototype = new ArenaCombatants();