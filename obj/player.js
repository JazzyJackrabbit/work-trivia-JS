class Player{
    constructor(game, playerName){
        this.game = game;
        this.Name = "";
        this.inPenaltyBox = "";
        this.isWinner = "";
        this.initPlayer(playerName);
    }
    initPlayer(playerName){
        this.Name = playerName;
        this.score = "";
        this.inPenaltyBox = false;
        this.isWinner = false;
    }

}