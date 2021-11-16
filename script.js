let pWins = 0                         //Player wins counter
let cWins = 0                          //Computer wins counter
               

                    

function computerPlay() {                   // computer's choice randomly generated using Math functions and and array of strings.  Math functions point to a string element in the array
    let arr = [`rock` , `paper` , `scissors`]
    let compChoice = arr[Math.floor(Math.random()*arr.length)]

    console.log(`The Machines choose: ` + compChoice)

    return compChoice
}

function playerChoose() {                   // player inputs their choice in a prompt window.  Case insensitive.  Invalid entry caught in playRound() conditional statements
    let choice = prompt(`Choose your Weapon`)
    choice = choice.toLowerCase()
    return choice
}

function playRound()   {
    let playerSelection = playerChoose()    // value stored from playerChoose()
    let computerSelection = computerPlay()  // value stored from computerPlay()

    
    if( playerSelection == `rock` ) {               // conditional statements start here for each of the choices availble to the player

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
    else    {                       // Invalid entry handler.  Triggers if player inputs something other than `rock` `paper` or `scissors` 
        console.log(`Invalid weapon of choice.  Please try again.`)
    }

    return [pWins , cWins]          // playRound() returns an array w/ player and computer wins as the elements.  Will be our score variable
}
