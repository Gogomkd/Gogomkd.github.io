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


            this.fight();
            return;


            // here starts code block for 2v2 fight 1st
        } else if (this.hordeCombatant.length === 2 && this.humanCombatant.length === 2) {

            if ((tepac1.isAlive || tepac2.isAlive) && (tepac4.isAlive || tepac5.isAlive)) {
                // if there is at least one of both sides alive fight continues
                if (tepac1.type === "warrior" && tepac2.type === "warrior" && tepac4.type === "warrior" && tepac5.type === "warrior") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.block - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.block - tepac5.armor));
                            }

                        }



                    }, tepac1.attackSpeed);


                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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
                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.block - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac2.attack(tepac4, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.block - tepac4.armor));
                            }

                        }
                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac1.isAlive && tepac4.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.block - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.block - tepac2.armor));
                            }

                        }



                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.block - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.block - tepac1.armor));
                            }

                        }



                    }, tepac5.attackSpeed);
                    return combo1, combo2, combo3, combo4;

                    //different combination starts here 2nd
                } else if (tepac1.type === "warrior" && tepac2.type === "warrior" && tepac4.type === "warrior" && tepac5.type === "mage") {
                    //implementing another combo
                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.block - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac1.warCrit) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.armor));
                            }

                        }



                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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
                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac2.warCrit) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac2.attack(tepac4, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.block - tepac4.armor));
                            }

                        }
                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac1.isAlive && tepac4.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.block - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.block - tepac2.armor));
                            }

                        }



                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac2.reflect) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.reflect) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.armor));
                            }

                        }



                    }, tepac5.attackSpeed);


                    return combo1, combo2, combo3, combo4;

                    //another combination code starts here 3rd
                } else if (tepac1.type === "warrior" && tepac2.type === "warrior" && tepac4.type === "mage" && tepac5.type === "warrior") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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
                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac1.warCrit) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.block - tepac5.armor));
                            }

                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac5.minDamage, tepac2.maxDamage) - tepac5.block - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac2.warCrit) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.armor));
                            }

                        }



                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac1.isAlive && tepac4.isAlive) {
                            if (tepac1.reflect) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.reflect) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.armor));
                            }

                        }



                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.block - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.block - tepac1.armor));
                            }

                        }



                    }, tepac5.attackSpeed);
                    return combo1, combo2, combo3, combo4;

                    //another combination starts here 4th
                } else if (tepac1.type === "warrior" && tepac2.type === "mage" && tepac4.type === "warrior" && tepac5.type === "warrior") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.block - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.block - tepac5.armor));
                            }

                        }



                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac5.reflect) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.reflect) {
                                tepac2.attack(tepac4, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.armor));
                            }

                        }



                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {

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

                        } else if (tepac1.isAlive && tepac4.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.block - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac4.warCrit) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.armor));
                            }

                        }



                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac5.warCrit) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.block - tepac1.armor));
                            }

                        }
                    }, tepac5.attackSpeed);
                    return combo1, combo2, combo3, combo4;

                    //another combination code 5th
                } else if (tepac1.type === "warrior" && tepac2.type === "mage" && tepac4.type === "mage" && tepac5.type === "warrior") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {

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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac1.warCrit) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.block - tepac5.armor));
                            }

                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {

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

                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac5.reflect) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.isSpellBlock) {
                                tepac2.attack(tepac4, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.armor));
                            }

                        }
                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {

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

                        } else if (tepac1.isAlive && tepac4.isAlive) {
                            if (tepac1.reflect) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(tepac4, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.isSpellBlock) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.armor));
                            }

                        }
                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {

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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac5.warCrit) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac5, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac1.minDamage, tepac5.maxDamage) - tepac1.block - tepac1.armor));
                            }

                        }
                    }, tepac5.attackSpeed);

                    return combo1, combo2, combo3, combo4

                    //another combination starts here 6th
                } else if (tepac1.type === "warrior" && tepac2.type === "mage" && tepac4.type === "warrior" && tepac5.type === "mage") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.warCrit) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.block - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac1.warCrit) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.armor));
                            }

                        }



                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac5.isSpellBlock) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.reflect) {
                                tepac2.attack(tepac4, 0);
                            } else if (tepac2.isCritical) {
                                tepac2.attack(tepac4, getRandom(tepac4.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.armor));
                            }

                        }



                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac1.isAlive && tepac4.isAlive) {
                            if (tepac1.isBlocking) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.block - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac4.warCrit) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac4.armor));
                            }

                        }



                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac2.isSpellBlock) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.reflect) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.armor));
                            }

                        }



                    }, tepac5.attackSpeed);
                    return combo1, combo2, combo3, combo4;

                    //another combination starts here 7th
                } else if (tepac1.type === "mage" && tepac2.type === "warrior" && tepac4.type === "warrior" && tepac5.type === "warrior") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.reflect) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.reflect) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.armor));
                            }

                        }



                    }, tepac1.attackSpeed);


                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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
                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.block - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac2.attack(tepac4, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.block - tepac4.armor));
                            }

                        }
                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {

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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.warCrit) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac5.minDamage, tepac4.maxDamage) - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac1.minDamage, tepac4.maxDamage) - tepac2.block - tepac2.armor));
                            }

                        }
                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.block - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac5.warCrit) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.armor));
                            }

                        }



                    }, tepac5.attackSpeed);

                    return combo1, combo2, combo3, combo4;

                    //another combination starts here 8th
                } else if (tepac1.type === "mage" && tepac2.type === "warrior" && tepac4.type === "mage" && tepac5.type === "warrior") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.isSpellBlock) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.reflect) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.armor));
                            }

                        }



                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac5.isBlocking) {
                                tepac2.attack(tepac5, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.block - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac2.warCrit) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.armor));
                            }

                        }



                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac1.isSpellBlock) {
                                tepac4.attack(tepac1, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.reflect) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.isCritical) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.armor));
                            }

                        }



                    }, tepac4.attackSpeed);

                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {
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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.warCrit) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.block - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac5.warCrit) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.armor));
                            }

                        }



                    }, tepac5.attackSpeed);

                    return combo1, combo2, combo3, combo4
                    //another combinations starts here 9th  
                } else if (tepac1.type === "mage" && tepac2.type === "warrior" && tepac4.type === "warrior" && tepac5.type === "mage") {

                    var combo1 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {

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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.reflect) {
                                tepac1.attack(tepac4, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(tepac4, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac4, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac4.armor));
                            }
                        } else if (!tepac4.isAlive && tepac1.isAlive) {
                            if (tepac5.isSpellBlock) {
                                tepac1.attack(tepac5, 0);
                            } else if (tepac1.isCritical) {
                                tepac1.attack(tepac5, getRandom(tepac1.minDamage + 70, tepac1.maxDamage + 70));
                            } else {
                                tepac1.attack(tepac5, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac5.armor));
                            }

                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        if (!tepac4.isAlive && !tepac5.isAlive) {

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

                        } else if (tepac5.isAlive && tepac2.isAlive) {
                            if (tepac2.warCrit) {
                                tepac2.attack(tepac5, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac5, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac5.armor));
                            }
                        } else if (!tepac5.isAlive && tepac2.isAlive) {
                            if (tepac4.isBlocking) {
                                tepac5.attack(tepac4, 0);
                            } else if (tepac2.warCrit) {
                                tepac2.attack(tepac4, getRandom(tepac2.minDamage + 70, tepac2.maxDamage + 70));
                            } else {
                                tepac2.attack(tepac4, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac4.block - tepac4.armor));
                            }

                        }
                    }, tepac2.attackSpeed);

                    var combo3 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {

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

                        } else if (tepac4.isAlive && tepac1.isAlive) {
                            if (tepac4.warCrit) {
                                tepac4.attack(tepac1, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac1, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac1.armor));
                            }
                        } else if (!tepac1.isAlive && tepac4.isAlive) {
                            if (tepac2.isBlocking) {
                                tepac4.attack(tepac2, 0);
                            } else if (tepac4.warCrit) {
                                tepac4.attack(tepac2, getRandom(tepac4.minDamage + 70, tepac4.maxDamage + 70));
                            } else {
                                tepac4.attack(tepac2, (getRandom(tepac4.minDamage, tepac4.maxDamage) - tepac2.block - tepac2.armor));
                            }

                        }
                    }, tepac4.attackSpeed);


                    var combo4 = await setInterval(() => {
                        if (!tepac1.isAlive && !tepac2.isAlive) {

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

                        } else if (tepac2.isAlive && tepac5.isAlive) {
                            if (tepac2.reflect) {
                                tepac5.attack(tepac2, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(tepac2, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac2, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac2.armor));
                            }
                        } else if (!tepac2.isAlive && tepac5.isAlive) {
                            if (tepac1.isSpellBlock) {
                                tepac5.attack(tepac1, 0);
                            } else if (tepac5.isCritical) {
                                tepac5.attack(tepac1, getRandom(tepac5.minDamage + 70, tepac5.maxDamage + 70));
                            } else {
                                tepac5.attack(tepac1, (getRandom(tepac5.minDamage, tepac5.maxDamage) - tepac1.armor));
                            }

                        }
                    }, tepac5.attackSpeed);

                    return combo1, combo2, combo3, combo4;
                }

            }

        }

    }




    this.getHumanWarrior = function () {
        this.humanCombatant.push(this.human);
        console.log(this.humanCombatant);
        if (this.humanCombatant.length === 2) {
            $("#button1").css("display", "none");
            $("#button2").css("display", "none");
            $("#button3").css("display", "none");
        }

    }

    this.getHumanSorcerer = function () {
        this.humanCombatant.push(this.humanMage);
        console.log(this.humanCombatant);
        if (this.humanCombatant.length === 2) {
            $("#button1").css("display", "none");
            $("#button2").css("display", "none");
            $("#button3").css("display", "none");
        }
    }
    this.getDwarfWarrior = function () {
        this.humanCombatant.push(this.dwarf);
        console.log(this.humanCombatant);
        if (this.humanCombatant.length === 2) {
            $("#button1").css("display", "none");
            $("#button2").css("display", "none");
            $("#button3").css("display", "none");
        }
    }

    this.getOrcWarrior = function () {
        this.hordeCombatant.push(this.orc);
        console.log(this.hordeCombatant);
        if (this.hordeCombatant.length === 2) {
            $("#button4").css("display", "none");
            $("#button5").css("display", "none");
            $("#button6").css("display", "none");
        }
    }

    this.getBloodElf = function () {
        this.hordeCombatant.push(this.bloodElf);
        console.log(this.hordeCombatant);
        if (this.hordeCombatant.length === 2) {
            $("#button4").css("display", "none");
            $("#button5").css("display", "none");
            $("#button6").css("display", "none");
        }
    }

    this.getUndeadWarrior = function () {
        this.hordeCombatant.push(this.undead);
        console.log(this.hordeCombatant);
        if (this.hordeCombatant.length === 2) {
            $("#button4").css("display", "none");
            $("#button5").css("display", "none");
            $("#button6").css("display", "none");
        }
    }


}