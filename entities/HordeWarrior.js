export function OrcWarrior(name) {
    this.name = name;
    this.health = 2300;
    this.minDamage = 70;
    this.maxDamage = 110;
    this.block = getRandom(16, 26);
    this.armor = getRandom(4, 7);
    this.type = "warrior";
    this.attackSpeed = 1800;
    this.updateHealthBar = function (total, damage) {
        var total = 2300;
        var value = this.health;
        var hBar = $('.healthBar4');
        hBar.find(".healthBarP").html(value)
        var bar = $('.bar4');
        var hit = $('.hit4');

        if (value < 0) {
            console.log("you dead, reset");
            return;
        }
        var newValue = value - damage;

        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if(value < 1150){
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

OrcWarrior.prototype = new ArenaCombatants();