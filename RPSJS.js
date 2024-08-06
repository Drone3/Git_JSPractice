
const choices = ["rock","paper","scissors"];

function playGame(){
 
  let humanScore = 0;
  let computerScore= 0;



for (
  let i= 0; i < 5; i++){
  

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const Winner = playRound(humanSelection,computerSelection);
if( 
  Winner === "Computer Wins!") {
    computerScore ++;
    console.log( "one round for Computer")
  }
  else if( 
  Winner === "Player Wins!") {
    humanScore ++;
    console.log( "one round for Player")
  }
  else if( 
  Winner === "Tie") {
  
    console.log( "Draw")
  }
 
  }
  
  if(humanScore < computerScore) {console.log("You Lose The Game!")}
  else if ( humanScore > computerScore) {console.log ("You Win The Game!")}
  else{ console.log ("Tie")}
  
  
//play 5 rounds command//


    // make computer have choices of rock,paper, scissors,
   function getComputerChoice (){
    
    // randomly select one of the 3 options 
    let RPC =  Math.floor(Math.random() * choices.length);
    // state the value
    return choices[RPC]
   }
   
  // get human choice, use a prompt to pick from an array
  function getHumanChoice(){
    
   let answer = prompt ("whats your awnser?");
       answer = answer.toLowerCase();

  if(
    answer === "rock") {
      return choices[0];}
    
   else if( answer === "paper") {
     return choices[1];}
    

   else if( answer === "scissors"){ 
      return choices[2];}  
  
    else (
      alert ("please try again")
    )
    return getHumanChoice();
  }

 
 // create a functoin to playRound for human choice and computer choice


function playRound(humanChoice, computerChoice)  { 
  
if(
  humanChoice === computerChoice){
  return "Tie";

  } else if(( humanChoice === choices[0] && computerChoice === choices[1]) 
  || (humanChoice === choices[1] && computerChoice === choices[2])
  || (humanChoice === choices[2] && computerChoice === choices[0]))
  {
    humanScore++;
   return "Player Wins!";
  } else {
   computerScore++;
   return "Computer Wins!";
      }
     
}
  
}

   playGame();