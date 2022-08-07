
var comp = 0 
var player = 0
/**
 * Get the Computer Choice
 * @returns rock, paper or scissor as string
 */
function getComputerChoice() {
  var choice = ['rock','paper','scissor']
  return choice[~~(Math.random() * choice.length)]
}
 
/**
 * Check who won the round
 * @param {Computer Choice} choice1 
 * @param {Players Choice} choice2 
 * @returns The result
 */
function checkWinner(choice1, choice2) {
  if (choice1 == choice2){
    return
  }
  switch(choice2){
    case "rock":
      if (choice1 == 'paper'){
        comp++
      } else player++
      break
    case "paper":
      if (choice1 == 'scissor'){
        comp++
      } else player++
      break
    case "scissor":
      if (choice1 == 'rock'){
        comp++
      } else player++
      break
  }

}
// main function that calls the other functions
function playRound(playerChoice) {
  var computerSelection = getComputerChoice()
  var playerSelection = playerChoice
  alert(checkWinner(computerSelection,playerSelection))  
}
/**
 * Checks who has a higher score
 * @returns Winner 
 */
function announceWinner() {
  if (player > comp) {
    return 'You Win!'
  } else return 'Computer Wins!'
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', () =>{
  playRound(button.id)
}))