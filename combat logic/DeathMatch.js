import { BloodElf } from "/entities/BloodElf.js";
import { OrcWarrior } from "/entities/HordeWarrior.js";
import { Undead } from "/entities/Undead.js";
import { HumanWarrior } from "/entities/HumanWarrior.js";
import { HumanSorcerer } from "/entities/HumanSorcerer.js";
import { DwarfWarrior } from "/entities/DwarfWarrior.js";

export function DeathMatch() {
    this.human = new HumanWarrior("Varian Wrynn");
    this.humanMage = new HumanSorcerer("Jaina Proudmore");
    this.dwarf = new DwarfWarrior("Brann Bronzebeard");
    this.orc = new OrcWarrior("Thrall");
    this.bloodElf = new BloodElf("Feyvea Dawntwist");
    this.undead = new Undead("Talbot Emmit");
    this.humanCombatant = [];
    this.hordeCombatant = [];

    this.fight = async function () {

        var tepac1 = this.humanCombatant[0];
        var tepac2 = this.humanCombatant[1];
        var tepac3 = this.humanCombatant[2];
        var tepac4 = this.hordeCombatant[0];
        var tepac5 = this.hordeCombatant[1];
        var tepac6 = this.hordeCombatant[2];

        if (this.hordeCombatant.length === 0 && this.humanCombatant.length === 0) {

            var info = $("#info1")
            info.css("color", "#007f00").addClass("animated flash").html("CHOOSE YOUR FIGHTERS")

            this.humanCombatant = [];
            this.hordeCombatant = [];
        } else if ((this.hordeCombatant.length === 2 && this.humanCombatant.length === 1) || (this.hordeCombatant.length === 1 && this.humanCombatant.length === 2)) {

            var info = $("#info1");
            info.css("color", "#cc0000").html("Unfair Fight").addClass("animated flash")

            this.humanCombatant = [];
            this.hordeCombatant = [];

        } else if (this.hordeCombatant.length === 0 && this.humanCombatant.length > 0 || this.hordeCombatant.length > 0 && this.humanCombatant.length === 0) {
            var info = $("#info1");
            info.css("color", "#007f00").html("You have to choose opponent").addClass("animated flash")

            this.humanCombatant = [];
            this.hordeCombatant = [];

        }


        if ((this.hordeCombatant.length === 1 && this.humanCombatant.length === 1)) {
            if (tepac1.isAlive && tepac4.isAlive) {
                if (tepac1.type === "warrior" && tepac4.type === "warrior") {
                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var victory = $("#leftScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#rightScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");

                            return
                        }
                        if (tepac4.isBlocking) {
                            tepac1.attack(tepac4, 0)
                        } else if (tepac1.warCrit) {
                            tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.block - tepac4.armor))

                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac1.isAlive) {
                            clearInterval(combo1);
                            clearInterval(combo2);
                            var victory = $("#rightScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#leftScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");

                            return
                        }
                        if (tepac1.isBlocking) {
                            tepac4.attack(tepac1, 0);
                        } else if (tepac4.warCrit) {
                            tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                        } else {
                            tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.block - tepac1.armor));

                        }
                    }, tepac4.attackSpeed);

                    console.log("");

                    return combo1, combo2;
                }

                if (tepac1.type === "warrior" && tepac4.type === "mage") {
                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var victory = $("#leftScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#rightScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");

                            return
                        } if (tepac1.warCrit) {
                            tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor));
                        }

                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (tepac1.reflect) {
                            tepac4.attack(tepac1, 0);
                        }
                        else if (tepac4.isCritical) {
                            tepac4.attack(tepac1, (getRandom(tepac4.minDamage + 90, tepac4.maxDamage + 60)))
                        } else {
                            tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor + tepac4.spell));
                            if (!tepac1.isAlive) {
                                clearInterval(combo1);
                                clearInterval(combo2);
                                var victory = $("#rightScreen");
                                $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                                victory.addClass("animated flash")
                                var looser = $("#leftScreen");
                                $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                                looser.addClass("animated flash");

                                return
                            }
                        }
                    }, tepac4.attackSpeed);

                    console.log("");

                    return combo1, combo2;
                }

                else if (tepac1.type === "mage" && tepac4.type === "warrior") {
                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive) {
                            clearInterval(combo1);
                            clearInterval(combo2);
                            var victory = $("#leftScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#rightScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");

                            return
                        }
                        if (tepac4.reflect) {
                            tepac1.attack(tepac4, 0);
                        }
                        else if (tepac1.isCritical) {
                            tepac1.attack(tepac4, getRandom(tepac1.minDamage + 90, tepac1.maxDamage + 60));
                        }
                        else {
                            tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) + tepac1.spell - tepac4.armor));

                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac1.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var victory = $("#rightScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#leftScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");

                            return
                        } if (tepac1.warCrit) {
                            tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor));
                        }

                    }, tepac4.attackSpeed);

                    console.log("");
                    return combo1, combo2;
                }


                else if (tepac1.type === "mage" && tepac4.type === "mage") {
                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var victory = $("#leftScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#rightScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");

                            return
                        }
                        if (tepac4.isSpellBlock) {
                            tepac1.attack(tepac4, 0)
                        } else if (tepac1.isCritical) {
                            tepac1.attack(tepac4, getRandom(tepac1.minDamage + 90, tepac1.maxDamage + 60))
                        } else {
                            tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor + tepac1.spell));

                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac1.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var victory = $("#rightScreen");
                            $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                            victory.addClass("animated flash")
                            var looser = $("#leftScreen");
                            $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                            looser.addClass("animated flash");


                            return
                        }
                        if (tepac1.isSpellBlock) {
                            tepac4.attack(tepac1, 0)
                        } else if (tepac4.isCritical) {
                            tepac4.attack(tepac1, getRandom(tepac4.minDamage + 90, tepac4.maxDamage + 60));
                        } else {
                            tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor + tepac4.spell));

                        }
                    }, tepac4.attackSpeed);
                    console.log("");

                    return combo1, combo2;
                }

            }


            // HERE STARTS CODE FOR 2v2

        }else if(this.hordeCombatant.length === 2 && this.humanCombatant.length === 2){
            var combo1 = await setInterval(() => {
                var victim = this.hordeCombatant[getRandom(0, this.hordeCombatant.length - 1)]
                if (!tepac4.isAlive && !tepac5.isAlive) {
                    
                    clearInterval(combo5);
                    clearInterval(combo4);
                    clearInterval(combo2);
                    clearInterval(combo1);
                    var victory = $("#leftScreen");
                    $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                    victory.addClass("animated flash")
                    var looser = $("#rightScreen");
                    $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                    looser.addClass("animated flash");
                    return;
                }else if(!tepac1.isAlive){
                    clearInterval(combo1);
                }else if(!victim.isAlive){
                    return combo1;
                }else if (tepac1.type === "warrior"  && tepac1.isAlive) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.isBlocking) {
                            tepac1.attack(victim, 0);
                        } else if (tepac1.warCrit) {
                            tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor - victim.block));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (tepac1.warCrit) {
                            tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor));
                        }

                    }

                } else if (tepac1.type === "mage"  && tepac1.isAlive) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.reflect) {
                            tepac1.attack(victim, 0);
                        } else if (tepac1.isCritical) {
                            tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor + tepac1.spell));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (victim.isSpellBlock) {
                            tepac1.attack(victim, 0);
                        } else if (tepac1.isCritical) {
                            tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                        } else {
                            tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor + tepac1.spell));
                        }

                    }
                }

            }, tepac1.attackSpeed);

            var combo2 = await setInterval(() => {
                var victim = this.hordeCombatant[getRandom(0, this.hordeCombatant.length - 1)]
                if (!tepac4.isAlive && !tepac5.isAlive) {
                    
                    clearInterval(combo5);
                    clearInterval(combo4);
                    clearInterval(combo2);
                    clearInterval(combo1);
                    var victory = $("#leftScreen");
                    $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                    victory.addClass("animated flash")
                    var looser = $("#rightScreen");
                    $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                    looser.addClass("animated flash");
                    return;
                }else if(!tepac2.isAlive){
                    clearInterval(combo2);
                }else if(!victim.isAlive){
                    return combo2;
                }else if (tepac2.type === "warrior"  && tepac2.isAlive) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.isBlocking) {
                            tepac2.attack(victim, 0);
                        } else if (tepac2.warCrit) {
                            tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                        } else {
                            tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor - victim.block));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (tepac2.warCrit) {
                            tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                        } else {
                            tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor));
                        }

                    }

                } else if (tepac2.type === "mage"  && tepac2.isAlive) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.reflect) {
                            tepac2.attack(victim, 0);
                        } else if (tepac2.isCritical) {
                            tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                        } else {
                            tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor + tepac2.spell));
                        }
                    } else if (victim.isAlive && victim.type === "mage" ) {
                        if (victim.isSpellBlock) {
                            tepac2.attack(victim, 0);
                        } else if (tepac2.isCritical) {
                            tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                        } else {
                            tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor + tepac2.spell));
                        }

                    }
                }

            }, tepac2.attackSpeed);

            var combo4 = await setInterval(() => {
                var victim = this.humanCombatant[getRandom(0, this.humanCombatant.length - 1)]
                if (!tepac1.isAlive && !tepac2.isAlive) {
                   
                    clearInterval(combo5);
                    clearInterval(combo4);
                    clearInterval(combo2);
                    clearInterval(combo1);
                    var victory = $("#rightScreen");
                    $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                    victory.addClass("animated flash")
                    var looser = $("#leftScreen");
                    $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                    looser.addClass("animated flash");
                    return;

                } else if(!tepac4.isAlive){
                    clearInterval(combo4);
                }else if(!victim.isAlive){
                    return combo4;
                }else if (tepac4.type === "warrior" && tepac4.isAlive) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.isBlocking) {
                            tepac4.attack(victim, 0);
                        } else if (tepac4.warCrit) {
                            tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                        } else {
                            tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor - victim.block));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (tepac4.warCrit) {
                            tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                        } else {
                            tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor));
                        }

                    }

                } else if (tepac4.type === "mage"  && tepac4.isAlive ) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.reflect) {
                            tepac4.attack(victim, 0);
                        } else if (tepac4.isCritical) {
                            tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                        } else {
                            tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor + tepac4.spell));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (victim.isSpellBlock) {
                            tepac4.attack(victim, 0);
                        } else if (tepac4.isCritical) {
                            tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70 ));
                        } else {
                            tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor + tepac4.spell));
                        }

                    }
                }

            }, tepac4.attackSpeed);

            var combo5 = await setInterval(() => {
                var victim = this.humanCombatant[getRandom(0, this.humanCombatant.length - 1)]
                if (!tepac1.isAlive && !tepac2.isAlive) {
                    
                    clearInterval(combo5);
                    clearInterval(combo4);
                    clearInterval(combo2);
                    clearInterval(combo1);
                    var victory = $("#rightScreen");
                    $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                    victory.addClass("animated flash")
                    var looser = $("#leftScreen");
                    $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                    looser.addClass("animated flash");
                    return;
                }else if(!tepac5.isAlive){
                    clearInterval(combo5);
                }else if(!victim.isAlive){
                    return combo5;
                }else if (tepac5.type === "warrior" && tepac5.isAlive) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.isBlocking) {
                            tepac5.attack(victim, 0);
                        } else if (tepac5.warCrit) {
                            tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                        } else {
                            tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor - victim.block));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (tepac5.warCrit) {
                            tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                        } else {
                            tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor));
                        }

                    }

                } else if (tepac5.type === "mage"  && tepac5.isAlive ) {
                    if (victim.isAlive && victim.type === "warrior") {
                        if (victim.reflect) {
                            tepac5.attack(victim, 0);
                        } else if (tepac5.isCritical) {
                            tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                        } else {
                            tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor + tepac5.spell));
                        }
                    } else if (victim.isAlive && victim.type === "mage") {
                        if (victim.isSpellBlock) {
                            tepac5.attack(victim, 0);
                        } else if (tepac5.isCritical) {
                            tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                        } else {
                            tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor + tepac5.spell));
                        }

                    }
                }

            }, tepac5.attackSpeed);

        
            return combo1, combo2, combo4 , combo5;



       //here starts 3v3 code 
    
    } else if (this.hordeCombatant.length === 3 && this.humanCombatant.length === 3) {
            if ((tepac1.isAlive || tepac2.isAlive || tepac3.isAlive) && (tepac4.isAlive || tepac5.isAlive || tepac6.isAlive)) {

                var combo1 = await setInterval(() => {
                    var victim = this.hordeCombatant[getRandom(0, this.hordeCombatant.length - 1)]
                    if (!tepac4.isAlive && !tepac5.isAlive && !tepac6.isAlive) {
                        clearInterval(combo6);
                        clearInterval(combo5);
                        clearInterval(combo4);
                        clearInterval(combo3);
                        clearInterval(combo2);
                        clearInterval(combo1);
                        var victory = $("#leftScreen");
                        $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                        victory.addClass("animated flash")
                        var looser = $("#rightScreen");
                        $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                        looser.addClass("animated flash");
                        return;
                    }else if(!tepac1.isAlive){
                        clearInterval(combo1);
                    }else if(!victim.isAlive){
                        return combo1;
                    }else if (tepac1.type === "warrior"  && tepac1.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.isBlocking) {
                                tepac1.attack(victim, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor - victim.block));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (tepac1.warCrit) {
                                tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor));
                            }

                        }

                    } else if (tepac1.type === "mage"  && tepac1.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.reflect) {
                                tepac1.attack(victim, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor + tepac1.spell));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (victim.isSpellBlock) {
                                tepac1.attack(victim, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(victim, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(victim, (getRandom(tepac1.minDamage, tepac1.maxDamage) - victim.armor + tepac1.spell));
                            }

                        }
                    }

                }, tepac1.attackSpeed);

                var combo2 = await setInterval(() => {
                    var victim = this.hordeCombatant[getRandom(0, this.hordeCombatant.length - 1)]
                    if (!tepac4.isAlive && !tepac5.isAlive && !tepac6.isAlive) {
                        clearInterval(combo6);
                        clearInterval(combo5);
                        clearInterval(combo4);
                        clearInterval(combo3);
                        clearInterval(combo2);
                        clearInterval(combo1);
                        var victory = $("#leftScreen");
                        $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                        victory.addClass("animated flash")
                        var looser = $("#rightScreen");
                        $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                        looser.addClass("animated flash");
                        return;
                    } else if(!tepac2.isAlive){
                        clearInterval(combo2);
                    }else if(!victim.isAlive){
                        return combo2;
                    }else if (tepac2.type === "warrior"  && tepac2.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.isBlocking) {
                                tepac2.attack(victim, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor - victim.block));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (tepac2.warCrit) {
                                tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor));
                            }

                        }

                    } else if (tepac2.type === "mage"  && tepac2.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.reflect) {
                                tepac2.attack(victim, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor + tepac2.spell));
                            }
                        } else if (victim.isAlive && victim.type === "mage" ) {
                            if (victim.isSpellBlock) {
                                tepac2.attack(victim, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(victim, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(victim, (getRandom(tepac2.minDamage, tepac2.maxDamage) - victim.armor + tepac2.spell));
                            }

                        }
                    }

                }, tepac2.attackSpeed);

                var combo3 = await setInterval(() => {
                    var victim = this.hordeCombatant[getRandom(0, this.hordeCombatant.length - 1)]
                    if (!tepac4.isAlive && !tepac5.isAlive && !tepac6.isAlive) {
                        clearInterval(combo6);
                        clearInterval(combo5);
                        clearInterval(combo4);
                        clearInterval(combo3);
                        clearInterval(combo2);
                        clearInterval(combo1);
                        var victory = $("#leftScreen");
                        $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                        victory.addClass("animated flash")
                        var looser = $("#rightScreen");
                        $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                        looser.addClass("animated flash");
                        return;
                    }else if(!tepac3.isAlive){
                        clearInterval(combo3);
                    }else if(!victim.isAlive){
                        return combo3;
                    }else if (tepac3.type === "warrior"  && tepac3.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.isBlocking) {
                                tepac3.attack(victim, 0);
                            } else if (tepac3.warCrit) {
                                tepac3.attack(victim, getRandom(tepac3.minDamage + 70, tepac3.maxDamage + 70));
                            } else {
                                tepac3.attack(victim, (getRandom(tepac3.minDamage, tepac3.maxDamage) - victim.armor - victim.block));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (tepac3.warCrit) {
                                tepac3.attack(victim, getRandom(tepac3.minDamage + 70, tepac3.maxDamage + 70));
                            } else {
                                tepac3.attack(victim, (getRandom(tepac3.minDamage, tepac3.maxDamage) - victim.armor));
                            }

                        }

                    } else if (tepac3.type === "mage"  && tepac3.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.reflect) {
                                tepac3.attack(victim, 0);
                            } else if (tepac3.isCritical) {
                                tepac3.attack(victim, getRandom(tepac3.minDamage + 70, tepac3.maxDamage + 70));
                            } else {
                                tepac3.attack(victim, (getRandom(tepac3.minDamage, tepac3.maxDamage) - victim.armor + tepac3.spell));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (victim.isSpellBlock) {
                                tepac3.attack(victim, 0);
                            } else if (tepac3.isCritical) {
                                tepac3.attack(victim, getRandom(tepac3.minDamage + 70, tepac3.maxDamage + 70));
                            } else {
                                tepac3.attack(victim, (getRandom(tepac3.minDamage, tepac3.maxDamage) - victim.armor + tepac3.spell));
                            }

                        }
                    }

                }, tepac3.attackSpeed);


                var combo4 = await setInterval(() => {
                    var victim = this.humanCombatant[getRandom(0, this.humanCombatant.length - 1)]
                    if (!tepac1.isAlive && !tepac2.isAlive && !tepac3.isAlive) {
                        clearInterval(combo6);
                        clearInterval(combo5);
                        clearInterval(combo4);
                        clearInterval(combo3);
                        clearInterval(combo2);
                        clearInterval(combo1);
                        var victory = $("#rightScreen");
                        $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                        victory.addClass("animated flash")
                        var looser = $("#leftScreen");
                        $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                        looser.addClass("animated flash");
                        return;
                    } else if(!tepac4.isAlive){
                        clearInterval(combo4);
                    }else if(!victim.isAlive){
                        return combo4;
                    }else  if (tepac4.type === "warrior" && tepac4.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.isBlocking) {
                                tepac4.attack(victim, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor - victim.block));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (tepac4.warCrit) {
                                tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor));
                            }

                        }

                    } else if (tepac4.type === "mage"  && tepac4.isAlive ) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.reflect) {
                                tepac4.attack(victim, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor + tepac4.spell));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (victim.isSpellBlock) {
                                tepac4.attack(victim, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(victim, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70 ));
                            } else {
                                tepac4.attack(victim, (getRandom(tepac4.minDamage, tepac4.maxDamage) - victim.armor + tepac4.spell));
                            }

                        }
                    }

                }, tepac4.attackSpeed);


                var combo5 = await setInterval(() => {
                    var victim = this.humanCombatant[getRandom(0, this.humanCombatant.length - 1)]
                    if (!tepac1.isAlive && !tepac2.isAlive && !tepac3.isAlive) {
                        clearInterval(combo6);
                        clearInterval(combo5);
                        clearInterval(combo4);
                        clearInterval(combo3);
                        clearInterval(combo2);
                        clearInterval(combo1);
                        var victory = $("#rightScreen");
                        $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                        victory.addClass("animated flash")
                        var looser = $("#leftScreen");
                        $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                        looser.addClass("animated flash");
                        return;
                    }else if(!tepac5.isAlive){
                        clearInterval(combo5);
                    }else if(!victim.isAlive){
                        return combo5;
                    }else  if (tepac5.type === "warrior" && tepac5.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.isBlocking) {
                                tepac5.attack(victim, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor - victim.block));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (tepac5.warCrit) {
                                tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor));
                            }

                        }

                    } else if (tepac5.type === "mage"  && tepac5.isAlive ) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.reflect) {
                                tepac5.attack(victim, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor + tepac5.spell));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (victim.isSpellBlock) {
                                tepac5.attack(victim, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(victim, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(victim, (getRandom(tepac5.minDamage, tepac5.maxDamage) - victim.armor + tepac5.spell));
                            }

                        }
                    }
                    
                }, tepac5.attackSpeed);

                var combo6 = await setInterval(() => {
                    var victim = this.humanCombatant[getRandom(0, this.humanCombatant.length - 1)]
                    if (!tepac1.isAlive && !tepac2.isAlive && !tepac3.isAlive) {
                        clearInterval(combo6);
                        clearInterval(combo5);
                        clearInterval(combo4);
                        clearInterval(combo3);
                        clearInterval(combo2);
                        clearInterval(combo1);
                        var victory = $("#rightScreen");
                        $("<img src='img/victory.png' />").addClass("victoryImg").appendTo(victory)
                        victory.addClass("animated flash")
                        var looser = $("#leftScreen");
                        $("<img src='img/defeat.png'/>").addClass("defeatImg").appendTo(looser);
                        looser.addClass("animated flash");
                        return;
                    }else if(!tepac6.isAlive){
                        clearInterval(combo6);
                    }else if(!victim.isAlive){
                        return combo6;
                    }else  if (tepac6.type === "warrior" && tepac6.isAlive) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.isBlocking) {
                                tepac6.attack(victim, 0);
                            } else if (tepac6.warCrit) {
                                tepac6.attack(victim, getRandom(tepac6.minDamage + 70, tepac6.maxDamage + 70));
                            } else {
                                tepac6.attack(victim, (getRandom(tepac6.minDamage, tepac6.maxDamage) - victim.armor - victim.block ));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (tepac6.warCrit) {
                                tepac6.attack(victim, getRandom(tepac6.minDamage + 70, tepac6.maxDamage + 70));
                            } else {
                                tepac6.attack(victim, (getRandom(tepac6.minDamage, tepac6.maxDamage) - victim.armor));
                            }

                        }

                    } else if (tepac6.type === "mage"  && tepac6.isAlive ) {
                        if (victim.isAlive && victim.type === "warrior") {
                            if (victim.reflect) {
                                tepac6.attack(victim, 0);
                            } else if (tepac6.isCritical) {
                                tepac6.attack(victim, getRandom(tepac6.minDamage + 70, tepac6.maxDamage + 70));
                            } else {
                                tepac6.attack(victim, (getRandom(tepac6.minDamage, tepac6.maxDamage) - victim.armor + tepac6.spell));
                            }
                        } else if (victim.isAlive && victim.type === "mage") {
                            if (victim.isSpellBlock) {
                                tepac6.attack(victim, 0);
                            } else if (tepac6.isCritical) {
                                tepac6.attack(victim, getRandom(tepac6.minDamage + 70, tepac6.maxDamage + 70));
                            } else {
                                tepac6.attack(victim, (getRandom(tepac6.minDamage, tepac6.maxDamage) - victim.armor + tepac6.spell));
                            }

                        }
                    }

                }, tepac6.attackSpeed);
            }
            return combo1,combo2,combo3,combo4,combo5,combo6;
        }
        this.fight();
        return;
    }




    this.getHumanWarrior = function () {
        this.humanCombatant.push(this.human);
        console.log(this.humanCombatant);

    }

    this.getHumanSorcerer = function () {
        this.humanCombatant.push(this.humanMage);
        console.log(this.humanCombatant);

    }
    this.getDwarfWarrior = function () {
        this.humanCombatant.push(this.dwarf);
        console.log(this.humanCombatant);

    }

    this.getOrcWarrior = function () {
        this.hordeCombatant.push(this.orc);
        console.log(this.hordeCombatant);

    }

    this.getBloodElf = function () {
        this.hordeCombatant.push(this.bloodElf);
        console.log(this.hordeCombatant);

    }

    this.getUndeadWarrior = function () {
        this.hordeCombatant.push(this.undead);
        console.log(this.hordeCombatant);

    }


}