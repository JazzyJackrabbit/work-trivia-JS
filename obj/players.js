class Players{
    constructor(game, idPlayer){
        this.game = game;
        this.PlayerList = [];
    }
    add(playerName, idPlayer){
        let newPlayer = new Player(this.game, playerName);
        this.PlayerList.push(newPlayer);
        this.game.console.prompt("Pseudo player: "+ idPlayer);
        this.game.console.log(newPlayer.playerName + " was added");
        this.game.console.log("They are player number " + this.PlayerList.length);

        return newPlayer;
    };
    howManyPlayers()
    {
        return this.PlayerList.length;
    }
}