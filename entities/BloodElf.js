export function BloodElf (name){
    this.name = name;
    this.health = 900;
    this.minDamage = 120;
    this.maxDamage = 160;
    this.block = getRandom(30,40);
    this.armor = getRandom(3,6);
    this.type = "warrior";
    this.attackSpeed = 2100;
    this.updateHealthBar = function (total, damage) {
        var total = 900;
        var value = this.health;
        var hBar = $('.healthBar5');
        var bar = $('.bar5');
        var hit = $('.hit5');

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

BloodElf.prototype = new ArenaCombatants();