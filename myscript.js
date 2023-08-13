function computerChoice() {
    const choices =['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random()*3)];

}
function playRound(playerChoice,computerSelection) {
    computerSelection = computerChoice().toLowerCase();
    playerChoice = prompt('What is your choice ?').toLowerCase();
    console.log('Computer chose ' + computerSelection);
    if (playerChoice == 'rock' && computerSelection == 'paper') {
        console.log('You Lose! Paper beats Rock');
        return 'You Lose! Paper beats Rock';
    }
    else if (playerChoice == 'rock' && computerSelection == 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return 'You Win! Rock beats Scissors';
    }
    else if (playerChoice == 'paper' && computerSelection == 'rock') {
        console.log('You Win! Paper beats Rock');
        return 'You Win! Paper beats Rock';
    }
    else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        console.log('You Win! Scissors beats Paper');
        return 'You Win! Scissors beats Paper';
    }
    else {
        console.log('Draw!');
        return 'Draw!';
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0;i<5;i++) {
        let result = playRound();
        if (result.search('Win') != -1) {
            playerScore++;
        }
        else if (result.search('Lose') != -1){
            computerScore++;
        }
        
    }
    console.log('The score is ' + playerScore +'-' + computerScore);
    if (playerScore > computerScore) {
        return 'You won the round';
    }
    else if (playerScore < computerScore) {
       return 'You lost the round';
    }
    else {
        return 'The round is drawn';
    }
}
console.log(game());