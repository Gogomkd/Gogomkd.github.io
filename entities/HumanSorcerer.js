export function HumanSorcerer (name){
    this.name = name;
    this.health = 1800;
    this.minDamage = 100;
    this.maxDamage = 140;
    this.spell = getRandom(15,25);
    this.armor = getRandom(1,4);
    this.type = "mage";
    this.attackSpeed = 1400;
    this.updateHealthBar = function (total, damage) {
        var total = 1800;
        var value = this.health;
        var hBar = $('.healthBar2');
        hBar.find(".healthBarP").html(value)
        var bar = $('.bar2');
        var hit = $('.hit2');

        if (value < 0) {
            console.log("you dead, reset");
            return;
        }
        var newValue = value - damage;

        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if(value < 900){
            bar.css("background", "#FA6600")
        }
        setTimeout(function () {
            hit.css({ 'width': '0' });
            bar.css('width', barWidth + "%");
        }, 500);
        console.log("curent health "+value+ " damage dealth " +damage+ " percentage of health left "+barWidth);
        if (value < 0) {
            console.log("you dead, reset");
            return;

        }
    }
}

HumanSorcerer.prototype = new ArenaCombatants();