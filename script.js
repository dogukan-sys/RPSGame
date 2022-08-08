var comp = 0 
var player = 0
var winner = ""

function playRound(choice1, choice2) {
  if (choice1 == choice2){
    winner = 'tie'
    updateScoreboard(choice1, choice2)
    return
  }
  switch(choice2){
    case "rock":
      if (choice1 == 'paper'){
        comp++
        winner = 'computer'
      } else player++, winner = 'player'
      break
    case "paper":
      if (choice1 == 'scissor'){
        comp++
        winner = 'computer'
      } else player++, winner = 'player'
      break
    case "scissor":
      if (choice1 == 'rock'){
        comp++
        winner = 'computer'
      } else player++, winner = 'player'
      break
  }
  updateScoreboard(choice1, choice2)

}

function updateScoreboard(computerchoice,playerchoice){
  playerScore.textContent = `Player: ${player}`
  compScore.textContent = `Computer: ${comp}`
  
  switch (winner) {
    case 'tie':
      scoreInfo.textContent = 'Its a Tie!'
      if (computerchoice == 'rock') {
        scoreMessage.textContent = 'Rock ties with rock.'
      } else if (computerchoice == 'paper'){
        scoreMessage.textContent = 'Paper ties with paper.'
      } else {
        scoreMessage.textContent = 'Scissor ties with scissor.'
      }
      break;

    case 'player':
      scoreInfo.textContent = 'You Win!'
      if (computerchoice == 'rock') {
        scoreMessage.textContent = 'Paper beats rock.'
      } else if (computerchoice == 'paper'){
        scoreMessage.textContent = 'Scissor is beats paper.'
      } else {
        scoreMessage.textContent = 'Rock beats scissor.'
      }
      break;
    case 'computer':
      scoreInfo.textContent = 'You Lose!'
      if (computerchoice == 'rock') {
        scoreMessage.textContent = 'Scissor is beaten by rock.'
      } else if (computerchoice == 'paper'){
        scoreMessage.textContent = 'Rock is beaten by paper.'
      } else {
        scoreMessage.textContent = 'Paper is beaten by scissor.'
      }
      break;
  }


  switch (computerchoice) {
    case 'rock':
      commpSign.textContent = "✊"
      break;
    case 'paper':
      commpSign.textContent = "✋"
      break;
    case 'scissor':
      commpSign.textContent = "✌"
  }
  switch (playerchoice) {
    case 'rock':
      playerSign.textContent = "✊"
      break;
    case 'paper':
      playerSign.textContent = "✋"
      break;
    case 'scissor':
      playerSign.textContent = "✌"
  }

}


function getComputerChoice() {
  var choice = ['rock','paper','scissor']
  return choice[~~(Math.random() * choice.length)]
}

function isGameOver(){
  return player === 5 || comp === 5
}

const scoreInfo = document.querySelector('.score-info')
const scoreMessage = document.querySelector('.score-message')
const compScore = document.getElementById('compScore')
const playerScore = document.getElementById('playerScore')
const buttons = document.querySelectorAll('button')
const playerSign = document.getElementById('playerSign')
const commpSign = document.getElementById('compSign')


buttons.forEach(button => button.addEventListener('click', () =>{
  const computerSelection = getComputerChoice()
  const playerSelection = button.id
  if (isGameOver()){
    return
  }
  playRound(computerSelection, playerSelection)
  
}))


