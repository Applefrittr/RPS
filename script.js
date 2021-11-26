let pWins = 0                         //Player wins counter
let cWins = 0                          //Computer wins counter
               
const winner = false
                    

function computerPlay() {                   // computer's choice randomly generated using Math functions and and array of strings.  Math functions point to a string element in the array
    let arr = [`rock` , `paper` , `scissors`]
    let compChoice = arr[Math.floor(Math.random()*arr.length)]

    console.log(`The Machines choose: ` + compChoice)

    return compChoice
}


const container = document.querySelector('.container')    //DOM created divs to display results, updates in the within playRound() conditional statements
const result = document.createElement('div')
const score = document.createElement('div')

container.appendChild(result)
container.appendChild(score)

function playRound(button)   {
    let playerSelection = button            //parameter button comes from the string ID on the onevent click of the specific button
    let computerSelection = computerPlay()  // value stored from computerPlay()
        
    if( playerSelection == `rock` ) {               // conditional statements start here for each of the choices availble to the player

        if( computerSelection == `rock`) {
            result.textContent = `TIE!`         
            
            score.textContent = "Player wins: " + pWins +  " Machine wins: " + cWins
            
            //console.log(`TIE!`)
            //console.log(`Player wins: ` + pWins + ` Machine wins: ` + cWins)
        }
        else if( computerSelection == `paper`) {
            result.textContent = `You Lose!  Paper beats Rock.`
            cWins++
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
        else    {
            result.textContent = `You Win!  Rock beats Scissors.`
            pWins++
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
    }
    else if( playerSelection == `paper`)    {

        if( computerSelection == `rock`) {
            result.textContent = `You Win!  Paper beats Rock.`
            pWins++
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
        else if( computerSelection == `paper`) {
            result.textContent = `TIE!`
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
        else    {
            result.textContent = `You Lose!  Scissors beats Paper.`
            cWins++
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
    }
    else if( playerSelection == `scissors`)    {
        
        if( computerSelection == `rock`) {
            result.textContent = `You Lose!  Rock beats Scissors`
            cWins++
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
        else if( computerSelection == `paper`) {
            result.textContent = `You Win!  Scissors beats Paper.`
            pWins++
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
        else    {
            result.textContent = `TIE!`
            score.textContent = `Player wins: ` + pWins + ` Machine wins: ` + cWins
        }
    }
    else    {                       // Invalid entry handler.  Triggers if player inputs something other than `rock` `paper` or `scissors` 
        console.log(`Invalid weapon of choice.  Please try again.`)
    }


    if (pWins == 5) {
        alert(`YOU WIN!`)
        pWins = 0
        cWins = 0
    } else if (cWins == 5)    {
        alert(`YOU LOSE!`)
        pWins = 0
        cWins = 0
    }

    return [pWins , cWins]          // playRound() returns an array w/ player and computer wins as the elements.  Will be our score variable
}


const btn = document.querySelectorAll('button');


btn.forEach((button) => {
    
    button.addEventListener('click', () => {
        console.log(button.id)
        playRound(button.id)
    })
})


