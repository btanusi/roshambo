class Rock{
    static beats(){
        return Scissors
    }
}

class Paper{
    static beats(){
        return Rock
    }
}

class Scissors{
    static beats(){
        return Paper
    }
}

class Game{
    constructor(playerPlay){
        this.playerPlayStr = playerPlay
        this.playerPlay = this.type(playerPlay)
        this.computerPlayStr = this.randomizedComputerPlay()
        this.computerPlay = this.type(this.computerPlayStr)
    }

    randomizedComputerPlay(){
        var randomPlay = Math.ceil(Math.random()*3);
        if (randomPlay === 1){
            return this.computerPlayStr = 'rock'
        } else if (randomPlay === 2){
            return this.computerPlayStr = 'paper'
        } else {
            return this.computerPlayStr = 'scissors'
        }
    }

    type(playStr){
        if (playStr === 'rock'){
            return Rock
        } else if (playStr === 'paper'){
            return Paper 
        } else {
            return Scissors
        }
    }

    compete(){
        var winner = '';
        if (this.playerPlay === this.computerPlay){
            winner = 'Player and Computer tie.'
        } else if (this.playerPlay.beats() === this.computerPlay){
            winner = `Player wins.`
        } else {
            winner = `Computer wins.`
        }
        console.log(`Playing a game of Roshambo against the computer.\nPlayer plays ${this.playerPlayStr}!\nComputer plays ${this.computerPlayStr}!\n~${winner}~`)
    }
}

const { argv } = require('yargs')
var playerPlay = argv.move
var myGame = new Game(playerPlay)
myGame.compete()