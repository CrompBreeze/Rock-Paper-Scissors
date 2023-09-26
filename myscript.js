function computerChoice() {
    const choices =['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];

}
let playerScore =0, computerScore=0;

function playRound(playerChoice) {
    computerSelection = computerChoice();
    document.getElementById('score').innerHTML = '';
    
    
    if (playerChoice == 'rock' && computerSelection == 'paper') {
        computerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. You Lose! Paper beats Rock. Score: '+playerScore+' : '+computerScore;
        
    }
    else if (playerChoice == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. You Win! Rock beats Scissors. Score: '+playerScore+' : '+computerScore;
        
    }
    else if (playerChoice == 'paper' && computerSelection == 'rock') {
        playerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. You Win! Paper beats Rock. Score: '+playerScore+' : '+computerScore;
        
    }
    else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. You Lose! Scissors beats Paper. Score: '+playerScore+' : '+computerScore;
        
    }
    else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. You Lose! Rock beats Scissors. Score: '+playerScore+' : '+computerScore;
        
    }
    else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. You Win! Scissors beats Paper. Score: '+playerScore+' : '+computerScore;
        
    }
    else {
        playerScore++;
        computerScore++;
        document.getElementById('message').innerHTML = 'Computer chose '+computerSelection+'. Draw!. Score: '+playerScore+' : '+computerScore;
        
    }
    if (playerScore == 5 || computerScore == 5) {
        let winner = (playerScore == 5) ? 'Player' : 'Computer';
        document.getElementById('score').innerHTML = 'End of the Round, '+winner+' wins the round';
        playerScore=0;
        computerScore=0;
    }
}
document.getElementById('rock').addEventListener('click',() => playRound('rock') );

document.getElementById('paper').addEventListener('click',() => playRound('paper'));

document.getElementById('scissors').addEventListener('click',() => playRound('scissors'));
