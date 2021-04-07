var readlineSync = require("readline-sync");
const chalk = require('chalk');
 
var score=0;
var userName = readlineSync.question("Enter your name:\n");
console.log(chalk.blueBright("Hey,"+userName+"."));
console.log("let's play a short game on how good you know Shehriyar?\n");
console.log("Note: Use only lowercase letters\n");
function quiz(question,answer){
  var useranswer=readlineSync.question(question);

  if(useranswer===answer){
    console.log(chalk.greenBright("you got it right! ;)"));
    score++;
  }
  else{
    console.log(chalk.red("Oh!No problem :("));
    console.log(chalk.greenBright("Correct answer is:"+answer));
  }
    console.log(chalk.blueBright("Your current score is:"+score));
    console.log("---------------------------")
}
var quests = [{
    question:"What's my current age?",
    answer:"20"
  },
  {
    question:"My Birthday month?",
    answer:"august"
  },
  {
    question:"Did i ever visited to a city out of Hyderabad?",
    answer: "yes"
  },
  {
    question:"Which city it was?",
    answer:"mumbai"
  },
  {
    question:"My college name?Just initial",
    answer: "isl"
  },
]

for(i=0; i<quests.length; i++){
  var currentQuestion = quests[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}
console.log("Your Final score is"+" "+score)
console.log("Thanks"+" "+userName+" "+"for playing this game")
