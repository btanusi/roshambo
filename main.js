const { argv } = require('yargs')

class Rock{
    constructor(){
        this._type = 'Rock'
    }

    get type(){
        return this._type;
    }
    beats(){
        return 'Scissors'
    }
}

class Paper{
    constructor(){
        this._type = 'Paper'
    }

    get type(){
        return this._type;
    }
    beats(){
        return 'Rock'
    }
}

class Scissors{
    constructor(){
        this._type = 'Scissors'
    }
    
    get type(){
        return this._type;
    }
    beats(){
        return 'Paper'
    }
}

class Game{
    constructor(playerMove){
        if (playerMove === 'rock'){
            this.playerMove = new Rock
        } else if (playerMove === 'paper'){
            this.playerMove = new Paper 
        } else {
            this.playerMove = new Scissors
        }
        var randomMove = Math.ceil(Math.random()*3);
        if (randomMove === 1){
            this.computerMove = new Rock
        } else if (randomMove === 2){
            this.computerMove = new Paper
        } else {
            this.computerMove = new Scissors
        }
    }

    compete(){
        var winner = '';
        var playerMove = this.playerMove.type();
        var computerMove = this.computerMove.type();
        if ( playerMove === computerMove ){
            winner = 'Player and Computer tie.'
        } else if (this.playerMove.beats() === computerMove){
            winner = `Player wins.`
        } else {
            winner = `Computer wins.`
        }
        console.log(`Playing a game of Roshambo against the computer.\nPlayer plays ${playerMove}!\nComputer plays ${computerMove}!\n~${winner}~`)
    }
}

var myGame = new Game(argv.move)
myGame.compete()