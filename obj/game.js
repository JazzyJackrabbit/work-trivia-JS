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
}
import { Players } from "players.js";
module.exports = Game;
