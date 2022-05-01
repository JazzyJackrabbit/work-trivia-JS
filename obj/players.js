class Players{
    constructor(game){
        this.game = game;
        this.indexPlayer = 0;
        this.PlayerList = [];
        this.pseudo = undefined;
    }
    add(player, idPlayer){
        let newPlayer = player; // new Player(this.game, playerName);
        this.PlayerList.push(newPlayer);
        newPlayer.pseudo = this.game.console.prompt("Pseudo player: "+ idPlayer);
        this.game.console.log(newPlayer.pseudo + " was added");
        this.game.console.log("They are player number " + this.PlayerList.length);

        return newPlayer;
    };
    howManyPlayers()
    {
        return this.PlayerList.length;
    };
    next(){
        this.indexPlayer++;
        if(this.indexPlayer >= this.PlayerList.length) this.indexPlayer = 0;
        return this.PlayerList[this.indexPlayer];
    }
}