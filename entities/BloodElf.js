export function BloodElf (name){
    this.name = name;
    this.health = 1500;
    this.minDamage = 120;
    this.maxDamage = 160;
    this.block = getRandom(30,40);
    this.armor = getRandom(3,6);
    this.type = "warrior";
    this.attackSpeed = 2100;
    this.updateHealthBar = function (total, damage) {
        var total = 1500;
        var value = this.health;
        var hBar = $('.healthBar5');
        hBar.find(".healthBarP").html(value)
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
        if(value < 750){
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

BloodElf.prototype = new ArenaCombatants();