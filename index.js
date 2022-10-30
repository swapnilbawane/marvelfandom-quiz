// Marvel Fan Quiz 

var readlineSync = require("readline-sync");
const chalk = require('chalk');
const boldRed = chalk.bold.red;
const yellowBold = chalk.yellowBright.bold;
const boldGreen = chalk.bold.green;
const green = chalk.green;
const bgWhite = chalk.bgWhite;
const greenBright = chalk.greenBright;
const yellowBright = chalk.yellowBright;

var score = 0;
var checkFlag = 0;
let userName;

var questionOne = {
  question: "1. When was the first Iron man movie was released?",
  options: ["2000", "1987", "2016", "2008"],
  answer: "4"
};

var questionTwo = {
  question: "2) How many  Captain America movies are released?",
  options: ["4", "3", "0", "1"],
  answer: "2"
};

var questionThree = {
  question: "3) Which year was Black Panther released?",
  options: ["2005", "2018", "2016", "2010"],
  answer: "2"
};

var questionFour = {
  question: "4) Name of Black Panther actor?",
  options: ["Chadwick Boseman", "Chris Evans", "Leanardo Di Caprio", "Tom Cruise"],
  answer: "1"
};

var questionFive = {
  question: "5) How many Iron Man movies released?",
  options: ["2", "3", "1", "0"],
  answer: "2"
};

var questionSix = {
  question: "6) What is the name of the last Avengers Movies released?",
  options: ["Avengers", "Avenger's End Game", "Avenger's Ultron", "Avenger's Life or Death"],
  answer: "2"
};

 
// creating array of all question objects
var questionsDatabase = [questionOne, questionTwo, questionThree, questionFour, questionFive,questionSix];

function breakLine() {
  console.log("-------------");
}

function emptyLine() {
  console.log("");
}

function rules() {
  console.log(chalk.magenta("-----GUIDELINES FOR QUIZ--------"));
  emptyLine();
  console.log("There are 6 questions in here. Each question will have four options.");
  emptyLine();
  console.log("Enter 1,2,3 or 4 as the correct answer and press enter. Enjoy the game.");
  emptyLine();
  console.log("Press q or Q to quit at any question.");

  emptyLine();

  console.log(chalk.magenta("-----LET'S BEGIN--------"));
}

// function welcome 
function welcome() {
  console.log("Are you a Marvel fan? - Let's find out in this Marvel Quiz");
  userName = readlineSync.question(chalk.red("What's your name? "));

  breakLine();

  console.log("Welcome " + chalk.bgWhite(userName) + " to the Marvel Quiz!");

  emptyLine();
  rules();
  emptyLine();

}

// // quiz function
function quiz(questionAsked, options, answerStored) {

  emptyLine();

  console.log(boldGreen(questionAsked));

  for (var i = 0; i < 4; i++) {
    console.log(chalk.cyan.bold(i + 1 + ") " + options[i]));
  }

  var userAnswer = readlineSync.question(green("Enter your answer: "));

  if (userAnswer == "Q" | userAnswer == "q") {
    return 1;
  }

  else

    if (userAnswer == answerStored) {
      emptyLine();
      console.log(yellowBold("Your answer is correct."));
      emptyLine();
      // console.log("----Next question----");
      score = score + 1;
      return 0;

    }

    else {
      emptyLine();
      console.log(yellowBold("Your answer is wrong."));
      emptyLine();
      // console.log("----Next question----");
      return 0;

    }


}


// processing

//game function  
function game() {
  for (var i = 0; i < questionsDatabase.length; i++) {
    var currentQuestion = questionsDatabase[i];
    checkFlag = quiz(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
    console.log("");
    if (checkFlag == 1) {
      emptyLine();

      if (score > 0) {
        console.log(boldRed("You have exited the game midway."));
        console.log("Hello " + userName + " You SCORED: ", score);
      }
      else {
        emptyLine();
        console.log(chalk.red.bold("You have exited the game without answering any questions."));
        break;
      }
    }

  }
}

// checkScores function 
function checkScores(checkFlag) {
  if (checkFlag == 1) { }
  else
    if (score < questionsDatabase.length) {
      emptyLine();
      console.log(boldRed("Out of " + questionsDatabase.length + " questions, you answered " + score + " questions correctly."));
    }

    else {
      console.log(boldRed("Congratulations. You completed the game. Your total score is " + score));
    }

}


//  function showresults
function showResults() {
  emptyLine();
  console.log(bgWhite("And now let's look at all answers."));

  console.log(greenBright("1. When was the first Iron man movie was released? Answer: 2008"));

  console.log(yellowBright("2. How many Captain America movies are released? Answer: 3"));

  console.log(greenBright("3. Which year was Black Panther released? Answer: 2018"));

  console.log(yellowBright("4. Name of Black Panther actor? Answer: Chadwick Boseman"));

  console.log(greenBright("5. How many Iron Man movies released? Answer: 3"));

  console.log(yellowBright("6. What is the name of the last Avengers Movies released? Answer: Avenger's End Game"));

}

// running the functions 

welcome();
game();
checkScores(checkFlag);
showResults();
