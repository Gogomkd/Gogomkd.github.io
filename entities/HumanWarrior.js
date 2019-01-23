export function HumanWarrior(name) {
    this.name = name;
    this.health = 2700;
    this.minDamage = 140;
    this.maxDamage = 199;
    this.block = getRandom(20, 40);
    this.armor = getRandom(5,10);
    this.type = "warrior";
    this.attackSpeed = 2300;
    this.updateHealthBar = function (total, damage) {

        var total = 2700;
        
        var fB = $(".fightLevo");
        var takeHit = new Audio("audio/varian.mp3");
        var box = $(".flip-card-front1")
        var value = this.health;
        var hBar = $(".healthBar1")
        hBar.find(".healthBarP").html(value)
        setTimeout(function () {
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            hBar.find(".healthBarP").addClass(animationName).one(animationend, function () {
                $(this).removeClass(animationName);
            });

        }, this.attackSpeed - 200)
        var bar = $('.bar1');
        var hit = $('.hit1');
        hBar.data("total");
        hBar.data("value");

        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        if (barWidth < 0) {
            barWidth = 0;
            hitWidth = 0;
        }
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if (value < 1350) {
            bar.css("background", "#FA6600")
        }
        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                var animationName = "animated fadeOut";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#damageP2").html("Varian takes " + damage+ " dmg").css("color", "white").addClass(animationName).one(animationend, function (){
                    $(this).removeClass(animationName);
                })
                hit.css({ 'width': '0' }); 
                bar.css('width', barWidth + "%");
            } else if(damage > 200){
                var animationName = "animated heartBeat";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#damageP2").html("Varian takes crit " + damage).css("color", "red").addClass(animationName).one(animationend, function(){
                    $(this).removeClass(animationName);
                })
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
                takeHit.play();
            }
            else{
                hitWidth = 0;
                barWidth = 0;
                var animationName = "animated fadeOut";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#damageP2").html("Varian blocked").css("color", "white").addClass(animationName).one(animationend, function() {
                    $(this).removeClass(animationName);
                });
        
            }
            
        }, 1000);

        setTimeout(function () {
            var animationName = "animated shake";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            box.addClass(animationName).one(animationend, function () {
                $(this).removeClass(animationName);
            });
        }, this.attackSpeed - 200)
        if(value < 0){
            value = 0;
            hBar.find(".healthBarP").html("0").css("color", "red");
        }
    }
}

HumanWarrior.prototype = new ArenaCombatants();