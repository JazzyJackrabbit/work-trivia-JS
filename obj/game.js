class Game{
    constructor(){
        this.players = new Players(this);
        this.console = new Console(this);
        this.currentPlayer = null;
    }
    createGame(){
        this._createGameNplayers(this.console.prompt("Num of players: "));
    }
    _createGameNplayers(nPlayers){
        this.players = new Players(this);
        this.currentPlayer = null;
        for(let i = nPlayers; i > 0; i--){
            let player = new Player();
            this.players.add(player, nPlayers - i + 1);
            this.currentPlayer = player;
        }

        this.play();
    }
    play(){
        
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
