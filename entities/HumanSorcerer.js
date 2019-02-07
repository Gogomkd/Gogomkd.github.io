export function HumanSorcerer(name) {
    this.name = name;
    this.health = 2600;
    this.minDamage = 140;
    this.maxDamage = 199;
    this.spell = getRandom(15, 25);
    this.armor = getRandom(4, 7);
    this.type = "mage";
    this.attackSpeed = 2800;
    this.updateHealthBar = function (total, damage) {
        var total = 2600;
        var value = this.health;
        var box = $(".flip-card-front2")

        var fB = $("#damageP2");
        var takeHit = new Audio("audio/janna.mp3");
        var flip = $(".flip-card-back2")
        flip.find("p").html("<p> Health:" + value + "</br>Armor:" + this.armor + "</br>SpellPower:" + this.spell + "</p>")


        var hBar = $('.healthBar2');
        hBar.find(".healthBarP").html(value)
        setTimeout(function () {
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            hBar.find(".healthBarP").addClass(animationName).one(animationend, function () {
                $(this).removeClass(animationName);
            });

        }, this.attackSpeed - 200)
        var bar = $('.bar2');
        var hit = $('.hit2');

        var newValue = value - damage;

        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        if (barWidth < 0) {
            barWidth = 0;
            hitWidth = 0;
        }
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if (value < 1300) {
            bar.css("background", "#FA6600")

        }
        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                var animationName = "animated fadeOut";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#humanMage").html("Janna takes " + damage + " dmg").css("color", "white").addClass(animationName).one(animationend, function () {
                    $(this).removeClass(animationName);
                })
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
            } else if (damage > 200) {
                var animationName = "animated heartBeat";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#humanMage").html("Janna takes crit " + damage).css("color", "red").addClass(animationName).one(animationend, function () {
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
                fB.find("#humanMage").html("Janna blocked").css("color", "white").addClass(animationName).one(animationend, function () {
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

HumanSorcerer.prototype = new ArenaCombatants();