function getComputerChoice() {
  var choice = ['Rock','Paper','Scissor']
  return choice[~~(Math.random() * choice.length)]
}

function getPlayerChoice() {
  var choice = prompt('Choose: Rock, Paper or Scissor')  
  return choice[0].toUpperCase() + choice.slice(1)
} 

function checkWinner(choice1, choice2) {
  
  if (choice1 == 'Rock' && choice2 == 'Rock') {
    result = 'It\'s a Tie!'
  } else if (choice1 == 'Rock' && choice2 == 'Paper') {
    result = 'Player Wins!'
  } else if (choice1 == 'Rock' && choice2 == 'Scissor') {
    result = 'Computer Wins!'
  } else if (choice1 == 'Paper' && choice2 == 'Paper') {
    result = 'It\'s a Tie!'
  } else if (choice1 == 'Paper' && choice2 == 'Scissor') {
    result = 'Player Wins!'
  } else if (choice1 == 'Paper' && choice2 == 'Rock') {
    result = 'Computer Wins!'
  } else if (choice1 == 'Scissor' && choice2 == 'Scissor') {
    result = 'It\'s a Tie!'
  } else if (choice1 == 'Scissor' && choice2 == 'Rock') {
    result = 'Player Wins!'
  } else if (choice1 == 'Scissor' && choice2 == 'Paper') {
    result = 'Computer Wins!'
  } else return 'Invalid input'
  return `You chose ${choice2} and the Computer chose ${choice1}, ${result}`
}

function game() {
  var comp = getComputerChoice()
  var player = getPlayerChoice()
  alert(checkWinner(comp,player))  
}

while (true){
  game()
}