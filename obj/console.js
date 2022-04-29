class Console{
    constructor(game){
        this.game = game;
        this.log = (l)=>{console.log(l)};
        this.prompt = (p)=>prompt(p);
    }
}