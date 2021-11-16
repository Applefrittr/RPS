function computerPlay() {
    let arr = [`rock` , `paper` , `scissors`];
    let compChoice = arr[Math.floor(Math.random()*arr.length)];

    console.log(`The Machines choose: ` + compChoice);

    return compChoice;
}


