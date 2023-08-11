function computerChoice() {
    const choices =['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random()*3)];

}
function playRound(playerChoice,computerSelection) {
    computerSelection = computerChoice();
    playerChoice = prompt('What is your choice ?');
    console.log('Computer chose ' + computerSelection);
    if (playerChoice == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock'
    }
    else if (playerChoice == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win! Rock beats Scissors'
    }
    else if (playerChoice == 'Paper' && computerSelection == 'Rock') {
        return 'You Win! Paper beats Rock'
    }
    else if (playerChoice == 'Paper' && computerSelection == 'Scissors') {
        return 'You Lose! Scissors beats Paper'
    }
    else if (playerChoice == 'Scissors' && computerSelection == 'Rock') {
        return 'You Lose! Rock beats Scissors'
    }
    else if (playerChoice == 'Scissors' && computerSelection == 'Paper') {
        return 'You Win! Scissors beats Paper'
    }
    else {
        return 'Draw!'
    }
}
console.log(playRound());