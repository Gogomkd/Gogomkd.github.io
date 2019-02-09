import {ArenaLook} from "./presentation-layer/ArenaDisplay.js"

async function Main() {
    
    var match =  new ArenaLook("Nagrand");
    var newMatch = await match.battleField();
    return newMatch;
}
Main();
