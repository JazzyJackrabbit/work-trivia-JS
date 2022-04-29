class Console{
    constructor(game){
        this.game = game;
        this.log = (l)=>{console.log(l)};
    }
}
module.exports = Console;