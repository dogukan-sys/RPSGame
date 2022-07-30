while (true) {
  var comp = 0 
  var player = 0

  function getComputerChoice() {
    var choice = ['rock','paper','scissor']
    return choice[~~(Math.random() * choice.length)]
  }

  function getPlayerChoice() {
    var choice = prompt('Choose: Rock, Paper or Scissor')  
    return choice.toLowerCase()
  } 

  function checkWinner(choice1, choice2) {

    if (choice1 == 'rock' && choice2 == 'rock') {
      result = 'It\'s a Tie!'
    } else if (choice1 == 'rock' && choice2 == 'paper') {
      result = 'Player Wins, this round!'
      player++
    } else if (choice1 == 'rock' && choice2 == 'scissor') {
      result = 'Computer Wins, this round!'
      comp++
    } else if (choice1 == 'paper' && choice2 == 'paper') {
      result = 'It\'s a Tie, this round!'
    } else if (choice1 == 'paper' && choice2 == 'scissor') {
      result = 'Player Wins, this round!'
      player++
    } else if (choice1 == 'paper' && choice2 == 'rock') {
      result = 'Computer Wins, this round!'
      comp++
    } else if (choice1 == 'scissor' && choice2 == 'scissor') {
      result = 'It\'s a Tie, this round!'
    } else if (choice1 == 'scissor' && choice2 == 'rock') {
      result = 'Player Wins, this round!'
      player++
    } else if (choice1 == 'scissor' && choice2 == 'paper') {
      result = 'Computer Wins, this round!'
      comp++
    } else return 'Invalid input'
    return `You chose ${choice2} and the Computer chose ${choice1}, ${result}`
  }

  function game() {
    var computerSelection = getComputerChoice()
    var playerSelection = getPlayerChoice()
    alert(checkWinner(computerSelection,playerSelection))  
  }

  function announceWinner() {
    if (player > comp) {
      return 'You Win!'
    } else return 'Computer Wins!'
  }

  for (i=0;i<5;i++){
    game()
  }

  alert(announceWinner())
}
