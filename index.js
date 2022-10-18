// Marvel Fan Quiz 

var readlineSync = require("readline-sync");
var score = 0;
var checkFlag = 0; 
let userName;

 
// array of objects
var questionsDatabase =
  [
    {
      question: "1. When was the first Iron man movie was released? -- (1). 2000 -- (2). 1987 -- (3).2016 -- (4).2008?-->",
      answer: "4"
    },


    {
      question: "2. How many  Captain America movies are released? -- (1). 4 -- (2). 3 -- (3).0 -- (4).1?-->",
      answer: "2"
    },

    {
      question: "3. Which year was Black Panther released? -- (1). 2005 -- (2). 2018 -- (3).2016 -- (4).2010?-->",
      answer: "2"
    },

    {
      question: "4. Name of Black Panther actor? -- (1). Chadwick Boseman -- (2). Chris Evans -- (3).Leanardo Di Caprio -- (4).Tom Cruise?-->",
      answer: "1"
    },

    {
      question: "5. How many Iron Man movies released? -- (1). 2 -- (2). 3 -- (3).1 -- (4).0?-->",
      answer: "2"
    },

    {
      question: "6. What is the name of the last Avengers Movies released? -- (1). Avengers -- (2). Avenger's End Game -- (3).Avenger's Ultron -- (4).Avenger's Life or Death?-->",
      answer: "2"
    },
  ];

// function welcome 
function welcome() 
{
  console.log("Are you a Marvel fan? - Let's find out in this Marvel Quiz");
  userName = readlineSync.question("What's your name? ");
  console.log("-------------");
  console.log("Welcome " + userName + " to the Marvel Quiz!");
  console.log("");
  console.log("-----GUIDELINES FOR QUIZ--------");
  console.log("There are 6 questions in here. Each question will have four options.");
  console.log("Enter 1,2,3 or 4 as the correct answer and press enter. Enjoy the game.");
  console.log("Press Enter key to begin or enter Q to quit at any question.");
  console.log("");
  console.log("-----LET'S BEGIN..--------");
  console.log("");
}

// quiz function
function quiz(questionAsked, answerStored) 
{
  //input
  var userAnswer = readlineSync.question(questionAsked);
  // processing
  if (userAnswer == "Q" | userAnswer == "q" ) 
        { 
         return 1;
         }
  
  else 
    
  if (userAnswer == answerStored ) 
  { 
    console.log("");
    console.log("Your answer is correct.");
    console.log("");
    console.log("----Next question----");
    score = score + 1;
    return 0;
    
  } 
  
  else 
  
  {
    console.log("Your answer is wrong.");
    console.log("");
    console.log("----Next question----");
    return 0;
   
  }

  
}



// game function  
function game() 
{
  for (var i = 0; i < questionsDatabase.length; i++) 
  {
    var currentQuestion = questionsDatabase[i];
    checkFlag=quiz(currentQuestion.question, currentQuestion.answer);
    console.log("");
    if (checkFlag==1) 
    { 
      console.log("");

      if(score>0)
      { console.log("YAY! "+userName+ " You SCORED: ", score); }
      else 
      { console.log("You did not answer any questions.") }
      console.log("");
      console.log("You have exited the game");
      
      break;    
    }
  }

}

// checkScores function 
function checkScores() {
  if (score < questionsDatabase.length) {
    console.log("");
    console.log("Out of "+questionsDatabase.length+" questions, you answered " + score + " questions correctly.");
  }

  else {
    console.log("Congratulations. You completed the game. Your total score is " + score);
  }

}


//  function showresults
function showResults() 
  {
    console.log("");
    console.log("And now let's look at all answers."); 
    console.log("1. When was the first Iron man movie was released? Answer: 2008");
    console.log("2. How many Captain America movies are released? Answer: 3");
    console.log("3. Which year was Black Panther released? Answer: 2018");
    console.log("4. Name of Black Panther actor? Answer: Chadwick Boseman");
    console.log("5. How many Iron Man movies released? Answer: 3");
    console.log("6. What is the name of the last Avengers Movies released? Answer: Avenger's End Game");
    
  }

// running the functions 

welcome();
game();
checkScores();
showResults();
