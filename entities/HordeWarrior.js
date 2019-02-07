export function OrcWarrior(name) {
    this.name = name;
    this.health = 2800;
    this.minDamage = 140;
    this.maxDamage = 199;
    this.block = getRandom(16, 26);
    this.armor = getRandom(7, 10);
    this.type = "warrior";
    this.attackSpeed = 2000;
    this.updateHealthBar = function (total, damage) {

        var total = 2800;
        var fB = $(".hordeWarrior");
        var takeHit = new Audio("audio/thrall.mp3");
        var box = $(".flip-card-front4")
        var value = this.health;
        var hBar = $('.healthBar4');
        var flip = $(".flip-card-back4")
        flip.find("p").html("<p> Health:" + value + "</br>Armor:" + this.armor + "</br>Block:" + this.block + "</p>")


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
        if (value < 1400) {
            bar.css("background", "#FA6600")
        }

        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                var animationName = "animated fadeOut";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#orcWarr").html("Thrall takes " + damage + " dmg").css("color", "white").addClass(animationName).one(animationend, function () {
                    $(this).removeClass(animationName);
                })
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
            } else if (damage > 200) {
                var animationName = "animated heartBeat";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#orcWarr").html("Thrall takes crit " + damage).css("color", "red").addClass(animationName).one(animationend, function () {
                    $(this).removeClass(animationName);
                })
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
                takeHit.play();
            }
            else {
                hitWidth = 0;
                barWidth = 0;
                var animationName = "animated fadeOut";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#orcWarr").html("Thrall blocked").css("color", "white").addClass(animationName).one(animationend, function () {
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
        if (value < 0) {
            value = 0;
            hBar.find(".healthBarP").html("0").css("color", "red");
        }
    }

}

OrcWarrior.prototype = new ArenaCombatants();