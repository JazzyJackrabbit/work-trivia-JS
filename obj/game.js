class Game{
    constructor(){
        this.players = new Players(this);
        this.console = new Console(this);
        this.currentPlayer = null;
    }
    createGame(nPlayers){
        this.players = new Players(this);
        this.currentPlayer = null;
        for(let i = nPlayers; i < 0; i--){
            let player = new player();
            players.add(player);
            this.currentPlayer = player;
        }
    }
    /*   var winner = didPlayerWin();
    currentPlayer += 1;
    if(currentPlayer == players.length)
        currentPlayer = 0;

    return winner;
    }else{
    currentPlayer += 1;
    if(currentPlayer == players.length)
        currentPlayer = 0;
    return true;
    }}*/
}
import { Players } from "players.js";
module.exports = Game;
