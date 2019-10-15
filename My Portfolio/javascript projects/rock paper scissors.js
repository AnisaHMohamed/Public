const getUserChoice = userInput =>{
   userInput = userInput.toLowerCase();
  if ((userInput ==='rock')||(userInput === 'paper' )|| (userInput ==='scissors')) {
    return userInput;
  }
  else{
    return console.log('error');
  }
};
//getUserChoice('RoCk');

const getComputerChoice = () =>{
 if ((Math.floor(Math.random()*3)) === 0 ){
   return 'rock'
 }
 else if ((Math.floor(Math.random()*3)) === 1 ){
   return 'paper'
 }
   else{
   return 'scissors'
 }
}
const determineWinner = (userChoice, computerChoice) =>{
if(userChoice===computerChoice){
 return console.log('It was a tie')
}
if (userChoice === 'rock'){
  if (computerChoice === 'paper'){
    return console.log('The computer won!')
  }
  else{
    console.log('User Wins!')
  }
}
 else if (userChoice === 'paper'){
  if (computerChoice === 'scissors'){
    return console.log('The computer won!')
  }
  else{
    console.log('User Wins!')
  }
}
   else if (userChoice === 'scissors'){
  if (computerChoice === 'rock'){
    return console.log('The computer won!')
  }
  else{
    console.log('User Wins!')
  }
}
}
const playGame = ()=>{
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and the Computer chose ${computerChoice}`);
  determineWinner(userChoice,computerChoice);
}

playGame();
