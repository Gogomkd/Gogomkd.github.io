import { DeathMatch } from "/DeathMatch.js"

export function ArenaLook(arenaName) {
    this.arenaName = arenaName;
    this.arena = new DeathMatch();


    $("<div>").addClass("mainContainer").appendTo(".bodyWrap"); // Main Div

    this.battleField = async function () {

        $("<div>").addClass("allianceWarrior").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card1").appendTo(".allianceWarrior");
        $("<div>").addClass("flip-card-inner1").appendTo(".Warriorflip-card1");
        $("<div>").addClass("flip-card-front1").appendTo(".flip-card-inner1");
        $(".flip-card-front1").prepend("<img src='img/knight.png' alt='Avatar'  id='img' />");
        $("<div>").addClass("flip-card-back1").appendTo(".flip-card-inner1");
        $(".flip-card-back1").prepend("<p> Health:" + this.arena.human.health + "</br>Armor:" + this.arena.human.armor + "</br>Block:" + this.arena.human.block + "</p>").prepend("<h2>" + this.arena.human.name + "</h2>");/// Tepac 1


        $("<div>").addClass("allianceSorcerer").css("margin-top", "90px").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card2").appendTo(".allianceSorcerer");
        $("<div>").addClass("flip-card-inner2").appendTo(".Warriorflip-card2");
        $("<div>").addClass("flip-card-front2").appendTo(".flip-card-inner2");
        $(".flip-card-front2").prepend("<img src='img/allianceMage.png' alt='Avatar'  id='img2' />");
        $("<div>").addClass("flip-card-back2").appendTo(".flip-card-inner2");
        $(".flip-card-back2").prepend("<p>Health:" + this.arena.humanMage.health + "</br>Armor:" + this.arena.humanMage.armor + "</br>Spell:" + this.arena.humanMage.spell + " </p>").prepend("<h2>" + this.arena.humanMage.name + "</h2>"); // Tepac 2


        $("<div>").addClass("allianceDwarf").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card3").appendTo(".allianceDwarf");
        $("<div>").addClass("flip-card-inner3").appendTo(".Warriorflip-card3");
        $("<div>").addClass("flip-card-front3").appendTo(".flip-card-inner3");
        $(".flip-card-front3").prepend("<img src='img/dwarf.png' alt='Avatar'  id='img3' />");
        $("<div>").addClass("flip-card-back3").appendTo(".flip-card-inner3");
        $(".flip-card-back3").prepend("<p>Health:" + this.arena.dwarf.health + "</br>Armor:" + this.arena.dwarf.armor + "</br>Block:" + this.arena.dwarf.block + "</p>").prepend("<h2>" + this.arena.dwarf.name + "</h2>"); // Tepac 3


        $("<div>").addClass("hordeWarrior").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card4").appendTo(".hordeWarrior");
        $("<div>").addClass("flip-card-inner4").appendTo(".Warriorflip-card4");
        $("<div>").addClass("flip-card-front4").appendTo(".flip-card-inner4");
        $(".flip-card-front4").prepend("<img src='img/orc.png' alt='Avatar'  id='img4' />");
        $("<div>").addClass("flip-card-back4").appendTo(".flip-card-inner4");
        $(".flip-card-back4").prepend("<p>Health:" + this.arena.orc.health + "</br>Armor:" + this.arena.orc.armor + "</br>Block:" + this.arena.orc.block + "</p>").prepend("<h2>" + this.arena.orc.name + "</h2>"); // Tepac 4


        $("<div>").addClass("hordeBloodElf").css("margin-top", "90px").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card5").appendTo(".hordeBloodElf");
        $("<div>").addClass("flip-card-inner5").appendTo(".Warriorflip-card5");
        $("<div>").addClass("flip-card-front5").appendTo(".flip-card-inner5");
        $(".flip-card-front5").prepend("<img src='img/Elf.png' alt='Avatar'  id='img5' />");
        $("<div>").addClass("flip-card-back5").appendTo(".flip-card-inner5");
        $(".flip-card-back5").prepend("<p>Health:" + this.arena.bloodElf.health + "</br>Armor:" + this.arena.bloodElf.armor + "</br>Block:" + this.arena.bloodElf.block + "</p>").prepend("<h2>" + this.arena.bloodElf.name + "</h2>"); // Tepac 5


        $("<div>").addClass("hordeUndead").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card6").appendTo(".hordeUndead");
        $("<div>").addClass("flip-card-inner6").appendTo(".Warriorflip-card6");
        $("<div>").addClass("flip-card-front6").appendTo(".flip-card-inner6");
        $(".flip-card-front6").prepend("<img src='img/undead-png-8.png' alt='Avatar'  id='img6' />");
        $("<div>").addClass("flip-card-back6").appendTo(".flip-card-inner6");
        $(".flip-card-back6").prepend("<p>Health:" + this.arena.undead.health + "</br>Armor:" + this.arena.undead.armor + "</br>Spell:" + this.arena.undead.spell + "</p>").prepend("<h2>" + this.arena.undead.name + "</h2>"); // Tepac 6


        $("<div>").addClass("fightContainer").appendTo(".mainContainer");
        $("<div>").addClass("healthBar1");
        $("<div>").addClass("bar");
        $("<div>").addClass("hit");
        $("<div>").addClass("fightButtons").appendTo(".mainContainer")
        $("<button>").addClass("fightButton").html("FIGHT").appendTo(".fightButtons").on("click", (event) => {
            $("#button1").off(".allianceWarrior");
            var result = this.arena.fight();
            event = result;
            console.log(event);
            
        });
        $("<button>").addClass("resetButton").html("RESET").appendTo(".fightButtons").on("click", (event) => {
            event.preventDefault();
            $(".mainContainer").html("");
            this.arena.humanCombatant = [];
            this.arena.hordeCombatant = [];
            this.battleField(event.target);
        })
        $("<button>").attr("id", "button1").html("Choose").appendTo(".allianceWarrior").on("click", (event) => {
            event = this.arena.getHumanWarrior();
            $(".allianceWarrior").appendTo(".fightContainer");
            var that = this;
            $("<div>").addClass("healthBar1").appendTo(".fightContainer");
            $("<div>").addClass("bar").appendTo(".healthBar1");
            $("<div>").addClass("hit").appendTo(".bar");
            $("<p>").addClass("healthBarP").html(that.arena.human.health).appendTo(".healthBar1");
            console.log(that.arena.human.health);
            console.log(event);
            $("#button1").css("display","none");

        });
        $("<button>").attr("id", "button2").html("Choose").appendTo(".allianceSorcerer").on("click", (event) => {
            event = this.arena.getHumanSorcerer();
            var that = this;
            $(".allianceSorcerer").css("margin", "0").appendTo(".fightContainer");
            $("<div>").addClass("healthBar1").appendTo(".fightContainer");
            $("<div>").addClass("bar").appendTo(".healthBar1");
            $("<div>").addClass("hit").appendTo(".bar");
            $("<p>").addClass("healthBarP").appendTo(".healthBar1").html(that.arena.humanMage.health);
            console.log(event);
            $("#button2").css("display","none");
        });
        $("<button>").attr("id", "button3").html("Choose").appendTo(".allianceDwarf").on("click", (event) => {
            event = this.arena.getDwarfWarrior();
            var that = this;
            $(".allianceDwarf").appendTo(".fightContainer");
            $("<div>").addClass("healthBar1").appendTo(".fightContainer");
            $("<div>").addClass("bar").appendTo(".healthBar1");
            $("<div>").addClass("hit").appendTo(".bar");
            $("<p>").addClass("healthBarP").appendTo(".healthBar1").html(that.arena.dwarf.health);
            console.log(event);
            $("#button3").css("display","none");
        });
        $("<button>").attr("id", "button4").html("Choose").appendTo(".hordeWarrior").on("click", (event) => {
            event = this.arena.getOrcWarrior();
            var that = this;
            $(".hordeWarrior").appendTo(".fightContainer");
            $("<div>").addClass("healthBar2").appendTo(".fightContainer");
            $("<div>").addClass("bar").appendTo(".healthBar2");
            $("<div>").addClass("hit").appendTo(".bar");
            $("<p>").addClass("healthBarP").appendTo(".healthBar2").html(that.arena.orc.health);
            console.log(event);
            $("#button4").css("display","none");
        });
        $("<button>").attr("id", "button5").html("Choose").appendTo(".hordeBloodElf").on("click", (event) => {
            event = this.arena.getBloodElf();
            var that = this;
            $(".hordeBloodElf").css("margin", "0").appendTo(".fightContainer");
            $("<div>").addClass("healthBar2").appendTo(".fightContainer");
            $("<div>").addClass("bar").appendTo(".healthBar2");
            $("<div>").addClass("hit").appendTo(".bar");
            $("<p>").addClass("healthBarP").appendTo(".healthBar2").html(that.arena.bloodElf.health);
            console.log(event);
            $("#button5").css("display","none");
        });
        $("<button>").attr("id", "button6").html("Choose").appendTo(".hordeUndead").on("click", (event) => {
            event = this.arena.getUndeadWarrior();
            var that = this;
            $(".hordeUndead").appendTo(".fightContainer");
            $("<div>").addClass("healthBar2").appendTo(".fightContainer");
            $("<div>").addClass("bar").appendTo(".healthBar2");
            $("<div>").addClass("hit").appendTo(".bar");
            $("<p>").addClass("healthBarP").appendTo(".healthBar2").html(that.arena.undead.health);
            console.log(event);
            $("#button6").css("display","none");
        });
    }
}