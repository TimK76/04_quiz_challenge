// Global Variables Library
var choiceOne = document.getElementById("choice1");
var choiceTwo = document.getElementById("choice2"); 
var choiceThree = document.getElementById("choice3");
var choiceFour = document.getElementById("choice4");
var countdown;
var correct;
var i = 0;
var questionTitle = document.getElementById("title");
var quizStop;
var select;
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var timeLeft = 75;
var timerEl = document.getElementById("timer");


// Default timer start
timerEl.innerHTML = "Remaining Time: " + timeLeft;

// Functions library
        function timer() {
            timeLeft --;
            console.log(timeLeft);
            timerEl.innerHTML = "Remaining Time: " + timeLeft;
            if(timeLeft <=0) {
                clearInterval(countdown);
                quizStop();
            }else if(questions <=0){
                // tell the quiz to proceed to the end of the quiz and display score
                document.getElementById("quizFinished");
            }
        }

        function quizStart() {
            //start button starts timer
            countdown = setInterval(timer, 1000);
            //start button starts quiz
            questionsDisplay();
        };

// Create function to allower user to input their answer.
function inputAnswer(){
    choiceOne;
    choiceTwo; 
    choiceThree;
    choiceFour;
    
};

// Create function to check user's answer.
function checkAnswer(){
    // if()
};

// Create function to move on to the next question.
function nextQuestion(){

};

// Create function to stop the quiz.
function quizStop() {


}

// Write an array for the quiz with each question being a separate object with questions, answer choices (as nested arrays), and correct answer.
var questions = [
    {
    title: "Commonly used date types DO NOT include __________ .",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correct: 2,
},
    {
    title: "Arrays in JavaScript can be used to store _____________.",
    choices: ["1. numbers & strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correct: 3,
},
    {
    title: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correct: 2,
},
    {
    title: "The condition of an if/else statement is ecnlosed with ___________.",
    choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correct: 2,
},
    {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:__________)",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correct: 3,
},
];

function questionsDisplay(){
    questionTitle.innerHTML = questions[i].title;
    choiceOne.innerHTML = questions[i].choices[0];
    choiceTwo.innerHTML = questions[i].choices[1];
    choiceThree.innerHTML = questions[i].choices[2];
    choiceFour.innerHTML = questions[i].choices[3];

}


// Event Listeners Library
startButton.addEventListener("click", quizStart);
// submitButton.addEventListener("click", nextQuestion);
choiceOne.addEventListener("click", inputAnswer);
choiceTwo.addEventListener("click", inputAnswer);
choiceThree.addEventListener("click", inputAnswer);
choiceFour.addEventListener("click", inputAnswer);
