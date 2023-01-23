var readlineSync = require("readline-sync");

var score = 0;

console.log("Welcome to The Cricket quiz");

var name = readlineSync.question("What's your name? ");

console.log("Hey! " + name + " Lets see how well you know about cricket ");
var highScores = [
  {
    name: "Paresh",
    score: 5,
  },
  {
    name: "Vaibhav",
    score: 4,
  }
]

function play(question, answer) {
  var userInput = readlineSync.question(question);

  if (answer.toLowerCase()== userInput.toLowerCase()) {
    console.log("You are right!");
    score = score + 1;
  }

  else {
    console.log("You are wrong!");

  }

  console.log("Current score : " + score);

}

var questions = [
  {
    question: "1. Who won the inaugural season of IPL? ",
    answer: "rajasthan royals"
  },

  {
    question: "2. Who won the Cricket world cup in 2015? ",
    answer: "australia"
  },

  {
    question: "3. Which country hosted the T20 WC 2009? ",
    answer: "england"
  },

  {
    question: "4. Which IPL team does Virat Kohli represent? ",
    answer: "RCB"
  },

  {
    question: "5. Which team has won the most IPL titles ?",
    answer: "mumbai indians"
  },

  

];


for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}

console.log(" You have scored ", score);

console.log("***********************************************");
console.log("High Scores");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ":" + highScores[i].score);
}
