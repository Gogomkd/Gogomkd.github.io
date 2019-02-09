export function BloodElf(name) {
    this.name = name;
    this.health = 2500;
    this.minDamage = 140;
    this.maxDamage = 199;
    this.block = getRandom(30, 40);
    this.armor = getRandom(6, 9);
    this.type = "warrior";
    this.attackSpeed = 2100;
    this.updateHealthBar = function (total, damage) {
        var total = 2500;
        var value = this.health;
        var box = $(".flip-card-front5")
        var fB = $(".hordeBloodElf");
        var takeHit = new Audio("audio/feyvea.mp3");//crit audio

        var hBar = $('.healthBar5');//health bar
        hBar.find(".healthBarP").html(value);

        var flip = $(".flip-card-back5")//back side of card updated while in duel
        flip.find("p").html("<p> Health:" + value + "</br>Armor:" + this.armor + "</br>Block:" + this.block + "</p>")


        setTimeout(function () { //animation for current health of combatant
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
            hBar.find(".healthBarP").addClass(animationName).one(animationend, function () {
                $(this).removeClass(animationName);
            });

        }, this.attackSpeed - 200)

        var bar = $('.bar5');// current health bar = 100%
        var hit = $('.hit5');// amount of dmg received = 0%

        var newValue = value - damage;//updated value after receiving dmg
        var barWidth = (newValue / total) * 100;// current is 100% and is decreasing
        var hitWidth = (damage / value) * 100 + "%"; // current is always 0 and calculating how much percent is from the actual health

        if (barWidth < 0) { // if health is 0 do not update healthBar
            barWidth = 0;
            hitWidth = 0;
        }

        hit.css('width', hitWidth);// else
        hBar.data('value', newValue);

        if (value < 1250) {//new color if health is lower then 50%
            bar.css("background", "#FA6600")
        }

        setTimeout(function () { // depending of the dmg if it is 0 crit or blocked update of healthBar and add animation aswell printing on screen

            if (damage > 0 && damage < 200) {

                var animationName = "animated fadeOut";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#bloodElf").html("Feyvea takes " + damage + " dmg").css("color", "white").addClass(animationName).one(animationend, function () {
                    $(this).removeClass(animationName);
                })
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");

            } else if (damage > 200) {

                var animationName = "animated heartBeat";
                var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                fB.find("#bloodElf").html("Feyvea takes crit " + damage).css("color", "red").addClass(animationName).one(animationend, function () {
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
                fB.find("#bloodElf").html("Feyvea blocked").css("color", "white").addClass(animationName).one(animationend, function () {
                    $(this).removeClass(animationName);
                });


            }
        }, 1000);

        setTimeout(function () { // upon receiving dmg if it bigger then 0 activate animation to acknowledge the hit

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

BloodElf.prototype = new ArenaCombatants();