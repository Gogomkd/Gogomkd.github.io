export function BloodElf (name){
    this.name = name;
    this.health = 2000;
    this.minDamage = 140;
    this.maxDamage = 199;
    this.block = getRandom(30,40);
    this.armor = getRandom(3,6);
    this.type = "warrior";
    this.attackSpeed = 2100;
    this.updateHealthBar = function (total, damage) {
        var total = 2000;
        var value = this.health;
        var box = $(".flip-card-front5")
        var p = $("#damageP1")
        var fB = $(".fightDesno");
        var takeHit = new Audio("audio/feyvea.mp3");
        var hBar = $('.healthBar5');
        hBar.find(".healthBarP").html(value);
        
        
        setTimeout(function(){
            var animationName = "heartBeat";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                hBar.find(".healthBarP").addClass(animationName).one(animationend,function() {
                $(this).removeClass(animationName);
            });
        
        }, this.attackSpeed - 200)
        var bar = $('.bar5');
        var hit = $('.hit5');
        if(value < 0){
            console.log("dead");
            return
            
        }
        var newValue = value - damage;

        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        hBar.data('value', newValue);
        if(barWidth < 0){
            barWidth = 0;
            hitWidth = 0;
        }
        if(value < 1000){
            bar.css("background", "#FA6600")
            
        }
        setTimeout(function () {
            if (damage > 0 && damage < 200) {
                fB.find("#damageP1").html("Feyvea takes " + damage+ " dmg").css("color", "white")
                hit.css({ 'width': '0' }); 
                bar.css('width', barWidth + "%");
            } else if(damage > 200){
                fB.find("#damageP1").html("Feyvea takes crit " + damage).css("color", "red").addClass("animated heartBeat")
                hit.css({ 'width': '0' });
                bar.css('width', barWidth + "%");
                takeHit.play();
            }
            else{
                hitWidth = 0;
                barWidth = 0;
                fB.find("#damageP1").html("Feyvea blocked").css("color", "white");
        
            }
        }, 500);
        
        setTimeout(function () {
            var animationName = "animated shake";
            var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd";
                box.addClass(animationName).one(animationend,function() {
                $(this).removeClass(animationName);
            });
        }, this.attackSpeed-200)
  
    }
}

BloodElf.prototype = new ArenaCombatants();