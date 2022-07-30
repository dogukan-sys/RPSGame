function getComputerChoice() {
  const choice = ['Rock','Paper','Scissor']
  return choice[~~(Math.random() * choice.length)]
}

