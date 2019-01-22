import { DeathMatch } from "/DeathMatch.js"

export function ArenaLook(arenaName) {
    this.arenaName = arenaName;
    this.arena = new DeathMatch();


    $("<div>").addClass("mainContainer").appendTo(".bodyWrap"); // Main Div

    this.battleField = async function () {
        //visual code fighter 1
        $("<div>").addClass("allianceWarrior").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card1").appendTo(".allianceWarrior");
        $("<div>").addClass("flip-card-inner1").appendTo(".Warriorflip-card1");
        $("<div>").addClass("flip-card-front1").appendTo(".flip-card-inner1");
        $(".flip-card-front1").prepend("<img src='img/knight.png' alt='Avatar'  id='img' />").addClass("animated");
        $("<div>").addClass("flip-card-back1").appendTo(".flip-card-inner1");
        $(".flip-card-back1").prepend("<p> Health:" + this.arena.human.health + "</br>Armor:" + this.arena.human.armor + "</br>Block:" + this.arena.human.block + "</p>").prepend("<h2>" + this.arena.human.name + "</h2>");//visual code fighter 1 end

        //visual code fighter 2
        $("<div>").addClass("allianceSorcerer").css("margin-top", "50px").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card2").appendTo(".allianceSorcerer");
        $("<div>").addClass("flip-card-inner2").appendTo(".Warriorflip-card2");
        $("<div>").addClass("flip-card-front2").appendTo(".flip-card-inner2");
        $(".flip-card-front2").prepend("<img src='img/allianceMage.png' alt='Avatar'  id='img2' />").addClass("animated");
        $("<div>").addClass("flip-card-back2").appendTo(".flip-card-inner2");
        $(".flip-card-back2").prepend("<p>Health:" + this.arena.humanMage.health + "</br>Armor:" + this.arena.humanMage.armor + "</br>Spell:" + this.arena.humanMage.spell + " </p>").prepend("<h2>" + this.arena.humanMage.name + "</h2>"); //visual code fighter 2 end

        //visual code fighter 3
        $("<div>").addClass("allianceDwarf").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card3").appendTo(".allianceDwarf");
        $("<div>").addClass("flip-card-inner3").appendTo(".Warriorflip-card3");
        $("<div>").addClass("flip-card-front3").appendTo(".flip-card-inner3");
        $(".flip-card-front3").prepend("<img src='img/dwarf.png' alt='Avatar'  id='img3' />").addClass("animated");
        $("<div>").addClass("flip-card-back3").appendTo(".flip-card-inner3");
        $(".flip-card-back3").prepend("<p>Health:" + this.arena.dwarf.health + "</br>Armor:" + this.arena.dwarf.armor + "</br>Block:" + this.arena.dwarf.block + "</p>").prepend("<h2>" + this.arena.dwarf.name + "</h2>"); //visual code fighter 3 end

        //visual code fighter 4
        $("<div>").addClass("hordeWarrior").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card4").appendTo(".hordeWarrior");
        $("<div>").addClass("flip-card-inner4").appendTo(".Warriorflip-card4");
        $("<div>").addClass("flip-card-front4").appendTo(".flip-card-inner4");
        $(".flip-card-front4").prepend("<img src='img/orc.png' alt='Avatar'  id='img4' />").addClass("animated");
        $("<div>").addClass("flip-card-back4").appendTo(".flip-card-inner4");
        $(".flip-card-back4").prepend("<p>Health:" + this.arena.orc.health + "</br>Armor:" + this.arena.orc.armor + "</br>Block:" + this.arena.orc.block + "</p>").prepend("<h2>" + this.arena.orc.name + "</h2>"); //visual code fighter 4 end

        //visual code fighter 5
        $("<div>").addClass("hordeBloodElf").css("margin-top", "40px").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card5").appendTo(".hordeBloodElf");
        $("<div>").addClass("flip-card-inner5").appendTo(".Warriorflip-card5");
        $("<div>").addClass("flip-card-front5").appendTo(".flip-card-inner5");
        $(".flip-card-front5").prepend("<img src='img/Elf.png' alt='Avatar'  id='img5' />").addClass("animated");
        $("<div>").addClass("flip-card-back5").appendTo(".flip-card-inner5");
        $(".flip-card-back5").prepend("<p>Health:" + this.arena.bloodElf.health + "</br>Armor:" + this.arena.bloodElf.armor + "</br>Block:" + this.arena.bloodElf.block + "</p>").prepend("<h2>" + this.arena.bloodElf.name + "</h2>"); //visual code fighter 5 end

        //visual code fighter 6
        $("<div>").addClass("hordeUndead").appendTo(".mainContainer");
        $("<div>").addClass("Warriorflip-card6").appendTo(".hordeUndead");
        $("<div>").addClass("flip-card-inner6").appendTo(".Warriorflip-card6");
        $("<div>").addClass("flip-card-front6").appendTo(".flip-card-inner6");
        $(".flip-card-front6").prepend("<img src='img/undead-png-8.png' alt='Avatar'  id='img6' />").addClass("animated");
        $("<div>").addClass("flip-card-back6").appendTo(".flip-card-inner6");
        $(".flip-card-back6").prepend("<p>Health:" + this.arena.undead.health + "</br>Armor:" + this.arena.undead.armor + "</br>Spell:" + this.arena.undead.spell + "</p>").prepend("<h2>" + this.arena.undead.name + "</h2>"); //visual code fighter 6 end

        
        $("<div>").addClass("fightContainer").appendTo(".mainContainer");///fithing space code
        $("<p></p>").attr("id", "#damageP").appendTo(".fightContainer")
        $("<div>").addClass("fightLevo").appendTo(".fightContainer");
        $("<div>").addClass("fightDesno").appendTo(".fightContainer");
        $("<p>").attr("id", "damageP1").appendTo(".fightDesno");
        $("<div>").attr("id", "leftScreen").addClass("leftScreen").appendTo(".mainContainer")
        $("<div>").attr("id", "rightScreen").addClass("rightScreen").appendTo(".mainContainer")
        $("<p></p>").attr("id", "info1").appendTo(".mainContainer")
        $("<p></p>").attr("id", "info").appendTo(".mainContainer")
        $("<p>").attr("id", "damageP2").appendTo(".fightLevo");
        

        
        $("<div>").addClass("holder").css("visibility", "hidden", "margin-top", "130").appendTo(".mainContainer")//fithing space code end

        //Arena Fight Start Button
        $("<div>").addClass("button").css("visibility", "hidden").appendTo(".holder").on("click", async (event) => {
            $("#button1").css("display", "none");
            $("#button2").css("display", "none");
            $("#button3").css("display", "none");
            $("#button4").css("display", "none");
            $("#button5").css("display", "none");
            $("#button6").css("display", "none");
            var result = await this.arena.fight();
            event = result;
            // console.log(event);
         
        });
        $("<p>Ready</p>").addClass("btnText").appendTo(".button");
        $("<div>").addClass("btnTwo").appendTo(".button");
        $("<p>Fight</p>").addClass("btnText2").appendTo(".btnTwo");//Arena Fight Start Button code end


        //Arena Reset Button
        $("<div>").addClass("button1").css("visibility", "hidden").appendTo(".holder").on("click", (event) => {
            event.preventDefault();
            $(".mainContainer").html("");
            this.arena.humanCombatant = [];
            this.arena.hordeCombatant = [];
            this.battleField(event.target);
        });
        $("<p>Arena</p>").addClass("btnText").appendTo(".button1");
        $("<div>").addClass("btnTwo1").appendTo(".button1");
        $("<p>Reset</p>").addClass("btnText2").appendTo(".btnTwo1");//Arena Reset Button code end 


        //Fighter 1 code
        $("<button>").addClass("button2").attr("id", "button1").appendTo(".allianceWarrior").on("click", (event) => {
            event = this.arena.getHumanWarrior();
            $(".allianceWarrior").appendTo(".fightLevo");


            var that = this;
            $(".button").css("visibility", "visible");//fight button
            $(".button1").css("visibility", "visible");///reset button
            $("<div>").addClass("healthBar1").appendTo(".allianceWarrior");
            $("<div>").addClass("bar1").appendTo(".healthBar1")
            $("<div>").addClass("hit1").appendTo(".bar1");
            $("<p>").addClass("healthBarP").html(this.arena.human.health).appendTo(".healthBar1");
    
            console.log(that.arena.human.health);
            console.log(event);
            $("#button1").css("display", "none");///choose button for fighter to be hidden

        });
        $("<p>Choose</p>").addClass("btnText").appendTo(".button2");
        $("<div>").addClass("btnTwo3").appendTo(".button2");
        $("<p>Varian</p>").addClass("btnText2").appendTo(".btnTwo3");//fighter 1 code end
        
        

        //Fighter 2 code
        $("<button>").addClass("button3").attr("id", "button2").appendTo(".allianceSorcerer").on("click", (event) => {
            event = this.arena.getHumanSorcerer();
            var that = this;
            $(".button").css("visibility", "visible");//fight button
            $(".button1").css("visibility", "visible");//reset button
            $(".allianceSorcerer").css("margin", "0").appendTo(".fightLevo");
            $("<div>").addClass("healthBar2").appendTo(".allianceSorcerer");
            $("<div>").addClass("bar2").appendTo(".healthBar2");
            $("<div>").addClass("hit2").appendTo(".bar2");
            $("<p>").addClass("healthBarP").html(this.arena.humanMage.health).appendTo(".healthBar2");

            console.log(event);
            $("#button2").css("display", "none");///choose button for fighter to be hidden
            
        });
        $("<p>Choose</p>").addClass("btnText").appendTo(".button3");
        $("<div>").addClass("btnTwo4").appendTo(".button3");
        $("<p>Jaina</p>").addClass("btnText2").appendTo(".btnTwo4");//fighter 2 code end
        
        //Fighter 3 code
        $("<button>").addClass("button4").attr("id", "button3").appendTo(".allianceDwarf").on("click", (event) => {
            event = this.arena.getDwarfWarrior();
            var that = this;
            $(".button").css("visibility", "visible");
            $(".button1").css("visibility", "visible");
            $(".allianceDwarf").appendTo(".fightLevo");
            $("<div>").addClass("healthBar3").appendTo(".allianceDwarf");
            $("<div>").addClass("bar3").appendTo(".healthBar3");
            $("<div>").addClass("hit3").appendTo(".bar3");
            $("<p>").addClass("healthBarP").html(this.arena.dwarf.health).appendTo(".healthBar3");
    
            console.log(event);
            $("#button3").css("display", "none");
            
        });
        $("<p>Choose</p>").addClass("btnText").appendTo(".button4");
        $("<div>").addClass("btnTwo5").appendTo(".button4");
        $("<p>Brann</p>").addClass("btnText2").appendTo(".btnTwo5");//fighter 3 code end
     
        //Fighter 4 code
        $("<button>").addClass("button5").attr("id", "button4").appendTo(".hordeWarrior").on("click", (event) => {
            event = this.arena.getOrcWarrior();
            var that = this;
            $(".button").css("visibility", "visible");
            $(".button1").css("visibility", "visible");
            $(".hordeWarrior").appendTo(".fightDesno");
            console.log(event);
            $("#button4").css("display", "none");
            $("<div>").addClass("healthBar4").appendTo(".hordeWarrior");
            $("<div>").addClass("bar4").appendTo(".healthBar4");
            $("<div>").addClass("hit4").appendTo(".bar4");
            $("<p>").addClass("healthBarP").html(this.arena.orc.health).appendTo(".healthBar4");

        });
        $("<p>Choose</p>").addClass("btnText").appendTo(".button5");
        $("<div>").addClass("btnTwo6").appendTo(".button5");
        $("<p>Thrall</p>").addClass("btnText2").appendTo(".btnTwo6");//fighter 4 code end
        
        //Fighter 5 code
        $("<button>").addClass("button6").attr("id", "button5").appendTo(".hordeBloodElf").on("click", (event) => {
            event = this.arena.getBloodElf();
            var that = this;
            $(".button").css("visibility", "visible");
            $(".button1").css("visibility", "visible");
            $(".hordeBloodElf").css("margin", "0").appendTo(".fightDesno");
            $("<div>").addClass("healthBar5").appendTo(".hordeBloodElf");
            $("<div>").addClass("bar5").appendTo(".healthBar5");
            $("<div>").addClass("hit5").appendTo(".bar5");
            $("<p>").addClass("healthBarP").html(this.arena.bloodElf.health).appendTo(".healthBar5");
    
            console.log(event);
            $("#button5").css("display", "none");
           
        });
        $("<p>Choose</p>").addClass("btnText").appendTo(".button6");
        $("<div>").addClass("btnTwo7").appendTo(".button6");
        $("<p>Feyvea</p>").addClass("btnText2").appendTo(".btnTwo7");//fighter 5 code end 
      
        //Fighter 6 code
        $("<button>").addClass("button7").attr("id", "button6").appendTo(".hordeUndead").on("click", (event) => {
            event = this.arena.getUndeadWarrior();
            var that = this;
            $(".button").css("visibility", "visible");
            $(".button1").css("visibility", "visible");
            $(".hordeUndead").appendTo(".fightDesno");
            console.log(event);
            $("#button6").css("display", "none");
            $("<div>").addClass("healthBar6").appendTo(".hordeUndead");
            $("<div>").addClass("bar6").appendTo(".healthBar6");
            $("<div>").addClass("hit6").appendTo(".bar6");
            $("<p>").addClass("healthBarP").html(this.arena.undead.health).appendTo(".healthBar6");
    
            
        });
        $("<p>Choose</p>").addClass("btnText").appendTo(".button7");
        $("<div>").addClass("btnTwo8").appendTo(".button7");
        $("<p>Talbot</p>").addClass("btnText2").appendTo(".btnTwo8");//fighter 6 code end 
      
        
        
    }
}