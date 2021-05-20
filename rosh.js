console.log('\t Hello, welcome to Roshambo')

var userInput = process.argv[2]

class MoveGenerator{
    constructor(){
        
    }

    static GetMove(){
        let num = Math.floor( Math.random()*3 +1 )
        
        if(num === 1){
            return 'rock'
        }

        if(num === 2){
            return 'paper'
        }

        if(num === 3){
            return 'scissors'
        }
    }
}

class Move {
    constructor(input, name){
        this.move = input
        this.name = name

        if(input === undefined || (input !== 'rock' && input !== 'paper' && input !== 'scissors')){
            this.move = MoveGenerator.GetMove()
            if(this.name === 'Player'){
                console.log('\t Unexpected entry, generating move at random')
            }
        }
    }

    PrintMove(){
        console.log(`\t ${this.name} has picked ${this.move}`)
    }

    Compare(playerMove){
        if(this.move === 'rock'){
            if(playerMove.move === 'rock'){
                Move.Draw(this, playerMove)
            }

            if(playerMove.move === 'paper'){
                Move.Win(playerMove)
            }

            if(playerMove.move === 'scissors'){
                Move.Win(this)
            }
        }

        if(this.move === 'paper'){
            if(playerMove.move === 'rock'){
                Move.Win(this)
            }

            if(playerMove.move === 'paper'){
                Move.Draw(this, playerMove)
            }

            if(playerMove.move === 'scissors'){
                Move.Win(playerMove)
            }
        }

        if(this.move === 'scissors'){
            if(playerMove.move === 'rock'){
                Move.Win(playerMove)
            }

            if(playerMove.move === 'paper'){
                Move.Win(this)
            }

            if(playerMove.move === 'scissors'){
                Move.Draw(this, playerMove)
            }
        }
    }

    static Win(winner){
        console.log(`\t ${winner.name} wins`)
    }

    static Draw(player1, player2){
        console.log(`\t ${player1.name} and ${player2.name} draw`)
    }
}



let computer = new Move('', 'Computer')
let player = new Move(userInput, 'Player')

player.PrintMove()
computer.PrintMove()

player.Compare(computer)