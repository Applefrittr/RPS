let pWins = 0                         //Player wins counter
let cWins = 0                          //Computer wins counter
               

                    

function computerPlay() {
    let arr = [`rock` , `paper` , `scissors`]
    let compChoice = arr[Math.floor(Math.random()*arr.length)]

    console.log(`The Machines choose: ` + compChoice)

    return compChoice
}

function playerChoose() {
    let choice = prompt(`Choose your Weapon`)
    choice = choice.toLowerCase()
    return choice
}

function playRound()   {
    let playerSelection = playerChoose()
    let computerSelection = computerPlay()

    
    if( playerSelection == `rock` ) {

        if( computerSelection == `rock`) {
            console.log(`TIE!`)
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else if( computerSelection == `paper`) {
            console.log(`You Lose!  Paper beats Rock.`)
            cWins++
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else    {
            console.log(`You Win!  Rock beats Scissors.`)
            pWins++
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
    }
    else if( playerSelection == `paper`)    {

        if( computerSelection == `rock`) {
            console.log(`You Win!  Paper beats Rock.`)
            pWins++
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else if( computerSelection == `paper`) {
            console.log(`TIE!`)
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else    {
            console.log(`You Lose!  Scissors beats Paper.`)
            cWins++
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
    }
    else if( playerSelection == `scissors`)    {
        
        if( computerSelection == `rock`) {
            console.log(`You Lose!  Rock beats Scissors`)
            cWins++
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else if( computerSelection == `paper`) {
            console.log(`You Win!  Scissors beats Paper.`)
            pWins++
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else    {
            console.log(`TIE!`)
            console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
    }
    else    {
        console.log(`Invalid weapon of choice.  Please try again.`)
    }
}
