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


        for (let index = 0; index < this.humanCombatant.length; index++) {
            for (let index2 = 0; index2 < this.hordeCombatant.length; index2++) {
                var tepac1 = this.humanCombatant[index];
                var tepac2 = this.hordeCombatant[index2];

            }
        }
        if (this.hordeCombatant.length === 0 && this.humanCombatant.length === 0) {
            console.log("Choose your figthers");
        } else if (this.humanCombatant.length > 1 || this.hordeCombatant.length > 1) {
            console.log("Cant select allies to fight");

        } else if ((this.hordeCombatant.length > 1 && this.humanCombatant.length === 1) || this.hordeCombatant.length === 1 && this.humanCombatant.length > 1) {
            console.log("Unfair Fight");
        } else if (this.hordeCombatant.length === 0 && this.humanCombatant.length > 0 || this.hordeCombatant.length > 0 && this.humanCombatant.length === 0) {
            console.log("Choose opponent");
        }


        if (this.hordeCombatant.length != 0 && this.humanCombatant.length != 0) {
            if (tepac1.isAlive && tepac2.isAlive) {
                if (tepac1.type === "warrior" && tepac2.type === "warrior") {
                    var combo1 = await setInterval(() => {
                        tepac1.attack(tepac2, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac2.block - tepac2.armor))
                        if (!tepac2.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info1.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");
                            return
                        }
                        tepac2.attack(tepac1, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac1.block - tepac1.armor));
                        if (!tepac1.isAlive) {
                            clearInterval(combo1);
                            clearInterval(combo2);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info1.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");

                            return
                        }
                    }, tepac2.attackSpeed);

                    console.log("");

                    return combo1, combo2;
                }

                if (tepac1.type === "warrior" && tepac2.type === "mage") {
                    var combo1 = await setInterval(() => {
                        tepac1.attack(tepac2, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac2.armor));
                        if (!tepac2.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info.addClass("animated flash").css("color", "#007f00").html("VICTORY").addClass("animated flash")
                            info1.addClass("animated flash").css("color", "#cc0000").html("DEFEAT").addClass("animated flash")
                            return
                        }
                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        tepac2.attack(tepac1, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac1.armor + tepac2.spell));
                        if (!tepac1.isAlive) {
                            clearInterval(combo1);
                            clearInterval(combo2);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info1.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");

                            return
                        }
                    }, tepac2.attackSpeed);

                    console.log("");

                    return combo1, combo2;
                }

                else if (tepac1.type === "mage" && tepac2.type === "warrior") {
                    var combo1 = await setInterval(() => {
                        tepac1.attack(tepac2, (getRandom(tepac1.minDamage, tepac1.maxDamage) + tepac1.spell - tepac2.armor));
                        if (!tepac2.isAlive) {
                            clearInterval(combo1);
                            clearInterval(combo2);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info1.style.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");
                            return
                        }

                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        tepac2.attack(tepac1, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac1.armor));
                        if (!tepac1.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info1.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");
                            return
                        }

                    }, tepac2.attackSpeed);

                    console.log("");
                    return combo1, combo2;
                }


                else if (tepac1.type === "mage" && tepac2.type === "mage") {
                    var combo1 = await setInterval(() => {
                        tepac1.attack(tepac2, (getRandom(tepac1.minDamage, tepac1.maxDamage) - tepac2.armor + tepac1.spell));
                        if (!tepac2.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info1.style.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");
                        }

                    }, tepac1.attackSpeed);

                    var combo2 = await setInterval(() => {
                        tepac2.attack(tepac1, (getRandom(tepac2.minDamage, tepac2.maxDamage) - tepac1.armor + tepac2.spell));
                        if (!tepac1.isAlive) {
                            clearInterval(combo2);
                            clearInterval(combo1);
                            var info = $("#info")
                            var info1 = $("#info1")
                            info1.css("color", "#007f00").html("VICTORY").addClass("animated flash");
                            info.css("color", "#cc0000").html("DEFEAT").addClass("animated flash");
                        }

                    }, tepac2.attackSpeed);
                    console.log("");

                    return combo1, combo2;
                }

            }


            this.fight();
            return;
        }


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