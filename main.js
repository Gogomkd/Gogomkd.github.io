import {ArenaLook} from "/ArenaDisplay.js"

async function Main() {
    var match = await new ArenaLook("Nagrand");
    match.battleField();
}
Main();
