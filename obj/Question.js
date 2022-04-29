class Question{
  constructor(game,player,responseQuestion,categoryQuestion,questionSentence){
      this.game = game;
      this.player = player;
      this.responseQuestion = responseQuestion | "";
      this.categoryQuestion = categoryQuestion | ""; // Sport Science Rock Pop
      this.questionSentence = this.questionSentence | "";
  }  
  wrongAnswer(currentPlayer){ // If Player Responds Badly to the Question he is sent in PenaltyBox and it is the turn of the player against him to play
    this.game.console.log('Question was incorrectly answered');
    this.game.console.log(this.player.Name + " was sent to the penalty box");
    this.player.inPenaltyBox = true; // Affecting Player To The Penalty Box
  }
  askQuestion(){
    this.game.console.log("Question Type : ", this.categoryQuestion);
    this.game.console.log(this.questionSentence);

  }

  wasCorrectlyAnswered(){
        if(this.player.inPenaltyBox == true){
          if(isGettingOutOfPenaltyBox){
            this.game.console.log('Answer was correct!!!!');
            purses[currentPlayer] += 1;
            this.game.console.log(players[currentPlayer] + " now has " +
                        purses[currentPlayer]  + " Gold Coins.");
    
            var winner = didPlayerWin();
            currentPlayer += 1;
            if(currentPlayer == players.length)
              currentPlayer = 0;
    
            return winner;
          }else{
            currentPlayer += 1;
            if(currentPlayer == players.length)
              currentPlayer = 0;
            return true;
          }}
        }
}
module.exports = Question;