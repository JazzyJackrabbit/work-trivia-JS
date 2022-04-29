class Question{
  constructor(game,player,responseQuestion,categoryQuestion,questionSentence){
      this.game = game;
      this.player = player;
      this.responseQuestion = responseQuestion | "";
      this.categoryQuestion = categoryQuestion | ""; // Sport Science Rock Pop
      this.questionSentence = questionSentence | "";
      this.purposeQuestion = purposeQuestion | "";

      // TODO
      this.responses = ["1","2","3","4"];
      this.validResponses = ["1","2"];
      this.typeQuestion = "";


  }  

  /*
  wrongAnswer(currentPlayer){ // If Player Responds Badly to the Question he is sent in PenaltyBox and it is the turn of the player against him to play
    this.game.console.log('Question was incorrectly answered');
    this.game.console.log(this.player.Name + " was sent to the penalty box");
    this.player.inPenaltyBox = true; // Affecting Player To The Penalty Box
  }
  askQuestion(){ // This function asks the question, checks if the response is True or false and redirects on the right function

    this.game.console.log("Question Type : ", this.categoryQuestion); 
    playerResponse = this.game.console.prompt(this.questionSentence);
    
      if(playerResponse == this.responseQuestion)
        this.wasCorrectlyAnswered()
      else
        this.wrongAnswer();
        
      console.log("Your Response : ",playerResponse);
  }

  wasCorrectlyAnswered(){
        if(this.player.inPenaltyBox == true){
            this.game.console.log('Answer was correct!!!!');
            this.player.score += 1;
            this.game.console.log(this.player.Name + " now has " +
              this.player.score  + " Gold Coins.");
    
        }
  }
  */
 
}