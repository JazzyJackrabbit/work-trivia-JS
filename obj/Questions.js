class Questions{
    constructor(game){
        this.game = game;
        this.questionList = [];
        this.questionList.push(new Question(game, ))

        this.addQuestions();
    }

    addQuestions(){
        this.questionList.push(new Question(this.game, "Global", ["1","2"], "1 & 2"))
        this.questionList.push(new Question(this.game, "Global", ["2","3"], "2 & 3"))
        this.questionList.push(new Question(this.game, "Global", ["3","4"], "3 & 4"))
        this.questionList.push(new Question(this.game, "Global", ["4"], "4"))
    }

    getQuestionsCategory(category){
        let questionsCategory = [];
        this.questionList.forEach((question)=>{
            
            if(question.categoryQuestion == category) 
                questionsCategory.push(question);
        })
        return questionsCategory;
    }
    getRandomQuestion(player, category){
        let questionsCategory = this.getQuestionsCategory(category);
        let randomIndex = this.getRandomInt(questionsCategory.length)
        let questionSelected = questionsCategory[randomIndex];
        let playerResponse = this.game.console.prompt("QUESTION for PLAYER "+player.pseudo+": "+questionSelected.questionSentence)
        console.log(questionSelected);
        questionSelected.responseQuestion.forEach((r)=>{
            if(playerResponse == r) return true;
        })
        return false;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    
}