function getComputerChoice() {
  var choice = ['Rock','Paper','Scissor']
  return choice[~~(Math.random() * choice.length)]
}

function getPlayerChoice() {
  return prompt('Choose: Rock, Paper or Scissor')
} 
