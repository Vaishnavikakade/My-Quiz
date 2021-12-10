var readlineSync=require("readline-sync");
var chalk=require('chalk');
var score=0;
var userName=readlineSync.question(chalk.blue.bold("Hey!!!!...what's your name??"));
console.log("\n");
console.log(chalk.blue.italic("Welcome In GK Quiz!! Are You Ready??"+userName));
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase()==answer)
  {
    console.log(chalk.cyan.bold("you are right"));
    score=score+1;
  
  }
  else{
    console.log(chalk.cyan.bold("You are wrong!!"));
  }
  console.log(chalk.magenta.bold("current score",score));
  console.log("\n");
  console.log(chalk.bold.red("---------"));
  console.log("\n");
}
var questionOne = {
  question:chalk.red.bold("1.What is the Capital Of India??")+chalk.blue.bold("\n(A)delhi\n(B) mumbai\n(C) pune\n(D) chennai\n"),
  answer:"a"
}
var questionTwo={
  question:chalk.red.bold("2.Which game is our national game")+chalk.blue.bold("\n(A)cricket\n(B) hockey\n(C) football\n(D)kabbadi\n"),
  answer:"b"
}

  var questionThree={
    question:chalk.red.bold("3.Who is our national bird")+chalk.blue.bold("\n(A)parrot\n(B) peacock\n(C) eagle\n(D) pigeon\n"),
    answer:"b"
  }
  var questionFour={
    question:chalk.red.bold("4.Who is our national flower")+chalk.blue.bold("\n(A)lotus\n(B) rose\n(C) lily\n(D) orchids\n"),
    answer:"a"
  }
  
  var questionFive={
      question:chalk.red.bold("5.Who is our national animal")+chalk.blue.bold("\n(A)lion\n(B) elephant\n(C) tiger\n(D) giraffe\n"),
      answer:"c"
    }
  var questionSix={
    question:chalk.red.bold("6.What is our national fruit")+chalk.blue.bold("\n(A)apple\n(B) guava\n(C) orange\n(D) mango\n"),
    answer:"d"
  }
  var questionSeven={
    question:chalk.red.bold("7.Who wrote our national anthem")+chalk.blue.bold("\n(A)rabindranath tagore\n(B) bakim chandra chattopadhyay\n(C) makhanlal chaturvedi\n(D) meera bai\n"),
    answer:"a"
  }
  var questionEight={
    question:chalk.red.bold("8.When we got independance")+chalk.blue.bold("\n(A)15 august 1949\n(B) 26 january 1949\n(C)15 august 1947\n(D) 26 january 1947\n"),
    answer:"d"
  }
  var questionNine={
    question:chalk.red.bold("9.What is the capital of maharashtra")+chalk.blue.bold("\n(A)mumbai\n(B) delhi\n(C) pune\n(D) chennai\n"),
    answer:"a"
  }
  var questionTen={
    question:chalk.red.bold("10.How many states do we have")+chalk.blue.bold("\n(A)21\n(B) 29\n(C) 30\n(D) 28\n"),
    answer:"d"
  }
  var questionEleven={
    question:(chalk.red.bold("11.What is the emergency number for fire"))+(chalk.blue.bold("\n(A)101\n(B) 102\n(C) 100\n(D) 105\n")),
    answer:"a"
  }
  var questionTwelve={
    question:(chalk.red.bold("12.What is the emergency number for police"))+(chalk.blue.bold("\n(A)100\n(B) 101\n(C) 107\n(D) 102\n")),
    answer:"a"
  }
  var questionThirteen={
    question:(chalk.red.bold("13.Who is the largest animal in the world"))+(chalk.blue.bold("\n(A)Blue whale\n(B) elehant\n(C) dinasaur\n(D) girrafe\n ")),
    answer:"a"
  }
  var questionFourteen={
    question:(chalk.red.bold("14.Who is the smallest animal in the world"))+(chalk.blue.bold("\n(A)ant\n(B) bat\n(C) mosquito\n(D) mouse\n")),
    answer:"b"
  }
  var questionFifteen={
    question:(chalk.red.bold("15.Who is the mammel from given option"))+(chalk.blue.bold("\n(A)cat\n(B) dinasaur\n(C) mosquito\n(D) elephant\n")),
    answer:"a"
  }

  var questions1=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
  console.log(chalk.yellow.bold.italic("\nLEVEL 1 !!!"));
  console.log(chalk.red.bold("-------"));
  console.log("\n");

  for(var i=0; i <questions1.length; i++)
  {
    var currentQuestion=questions1[i];

    play(currentQuestion.question, currentQuestion.answer);
  }
    if(score>=7)
    
      
      {
      console.log(chalk.magenta.bold("Congratulation!!!! you completed level 1!!! now..you are going to next level"));
      console.log("\n");

      console.log(chalk.magenta.bold("let's start!!! are you excited for this level??"));
      }
      
      else
      {
        console.log("Well playes!!!....")
      }
  
  var questions2=[questionEleven, questionTwelve, questionThirteen,questionFourteen,questionFifteen];
  console.log(chalk.yellow.bold.italic("\nLEVEL 2!!!"));
  console.log(chalk.red.bold("------"));
  console.log("\n");

  
  for(var i=0; i<questions2.length; i++)
  {
    var currentQuestion2=questions2[i];
    play(currentQuestion2.question,currentQuestion2.answer)
  }
    if(score>=4)
    {
      console.log(chalk.magenta.bold("Wow!!! You are champion!!! Hope you liked the quiz!!!"));
    }
    else
    {
    console.log(chalk.magenta.bold("Well played!!!"));
    }
  


s