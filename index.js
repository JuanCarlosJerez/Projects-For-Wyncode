let rl = require('readline-sync');

let userName = rl.question('Welcome young traverler, I am you. Would you mind doing me the favor, what was our name again? ');
console.log('What a pleasure, ' + userName + '.');

let playerChoice = ["Mac", "Linux", "Windows Vista"]


if (userName){
  let firstChoice = rl.question('As long has man has walked this planet, one question remains unanswered. You have been selected by the Angeldude himself to retrieve this answer. Before we begin your journey, you must select your weapon of choice: Mac, Linux, or Windows Vista. Please choose one.');
  console.log()

  if (playersChoice.includes(firstChoice)){
    if (playerChoice.toUpperCase === "WINDOWS VISTA") {
      console.log('Seriously, ' + userName + '? Does this seem like a game to you? This is      serious...Pick again.')
    }
      else if (playerChoice.toUpperCase === "LINUX") {
        console.log('Fair choice, but does anyone really like Linux. Honestly, using linux is like "Ooooh, look at me I\'m differnt." Just stick to the damn script and pick again.');
          }
        else if (playerChoice.toUpperCase === "MAC") {
          console.log('Wonderful, your journey is about to chart it\'s course.');
   }
}
}
