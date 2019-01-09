export function HumanSorcerer (name){
    this.name = name;
    this.health = 800;
    this.minDamage = 100;
    this.maxDamage = 140;
    this.spell = getRandom(15,25);
    this.armor = getRandom(1,4);
    this.type = "mage";
    this.attackSpeed = 1400;
    this.updateHealthBar = function (total, damage) {
        var total = 800;
        var value = this.health;
        var hBar = $('.healthBar3');
        var bar = $('.bar3');
        var hit = $('.hit3');

        if (value < 0) {
            console.log("you dead, reset");
            return;
        }
        var newValue = value - damage;

        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        setTimeout(function () {
            hit.css({ 'width': '0' });
            bar.css('width', barWidth + "%");
        }, 500);
        console.log(value, damage, hitWidth);
        if (value < 0) {
            console.log("you dead, reset");
            return;

        }
    }
}

HumanSorcerer.prototype = new ArenaCombatants();