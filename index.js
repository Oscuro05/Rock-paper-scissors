function compMove () {
  const randomnumber = Math.random();
  let computerMove = '';

    if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computerMove = 'rock'
      } else if (randomnumber >= 1/3  && randomnumber < 2/3 ) {
        computerMove = 'paper'
      } else if (randomnumber >= 2/3 && randomnumber < 1) {
        computerMove = 'scissors'
      }

      return computerMove;
}

function playGame (playerMove) {
    const computerMove = compMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = alert('You picked rock. Computer picked rock. Tie');
          }
      
          if (computerMove === 'paper') {
            result = alert('You picked rock. Computer picked paper. You lose');
          }
      
          if (computerMove === 'scissors') {
            result = alert('You picked rock. Computer picked scissors. You win');
          } 
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = alert('You picked paper. Computer picked rock. You win');
          }
      
          if (computerMove === 'paper') {
            result = alert('You picked paper. Computer picked paper. It was a tie');
          }
      
          if (computerMove === 'scissors') {
            result = alert('You picked paper. Computer picked scissors. You lose');
          } 
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = alert('You picked scissors. Computer picked rock. You lose');
          }
      
          if (computerMove === 'paper') {
            result = alert('You picked scissors. Computer picked paper. You win');
          }
      
          if (computerMove === 'scissors') {
            result = alert('You picked scissors. Computer picked scissors. It was a tie');
          } 
        }

    result;

}