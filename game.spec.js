require('./game.js');

describe("Vérification de la création du joueur", function() {
  it("should Create Player", function() {
    let PlayerTest = new Player(null,"TEST");
    expect(Player.Name).toBeDefined("TEST");
  });
});

describe("Vérification de la création du joueur", function() {
  it("should Create Question", function() {
    let QuestionTest = new Question(null,null,"TEST","Sport","Le Sport");
    expect(QuestionTest.categoryQuestion).toBeDefined("Sport");
  });
});
/*
do{



game.roll(Math.floor(Math.random()*6)+ 1);



if(Math.floor(Math.random()*10)== 7){

notAWinner= game.wrongAnswer();

}else{

notAWinner= game.wasCorrectlyAnswered();

}


}while(notAWinner);