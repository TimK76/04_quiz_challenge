// Global Variables Library
var answer = document.getElementById("answer");
var btnChoices = document.getElementsByClassName("btn-choices");
var choiceOne = document.getElementById("choice1");
var choiceTwo = document.getElementById("choice2");
var choiceThree = document.getElementById("choice3");
var choiceFour = document.getElementById("choice4");
var countdown;
var correct;
var highscores;
var i = 0;
var originalDiv = document.getElementById("original-div")
var originalMessage = document.getElementById("original-title");
var originalTitle = document.getElementById("original-message");
var questionsTitle = document.getElementById("questions-title");
var questions = document.querySelector(".questions");
var quizStop;
var score;
var select;
var startButton = document.getElementById("start");
// var submitButton = document.getElementById("submit");
var timeLeft = 75;
var timerEl = document.getElementById("timer");
var lastPage;

//make buttons not show up on first page

// Default timer start; Default Timer = 75
timerEl.innerHTML = "Remaining Time: " + timeLeft;

// Functions library

// Create a function to count down from 75 seconds. 
function timer() {
    // decrement timer by 1
    timeLeft--;
    // Display Remaining Time Left
    timerEl.innerHTML = "Remaining Time: " + timeLeft;
    // Resets timer if timer hits zero before quiz finishes.
    if (timeLeft <= 0) {
        clearInterval(countdown);
        quizStop();
        // tell the quiz to proceed to the end of the quiz and display score
    } else if (questions <= 0) {
        document.getElementById("quizFinished");
    }
}
// Create a function to start the quiz questions and timer upon clicking the start button
function quizStart() {
    var startingPage = document.getElementById("original-div");
    startingPage.style.display = "none";
    document.querySelector(".questions").style.display = "block";
    //start button starts timer
    countdown = setInterval(timer, 1000);
    //start button displays the first question
    questionsDisplay();
};

for (let k = 0; k < btnChoices.length; k++) {
    if (btnChoices.clicked === 0) {
        choiceOne.addEventListener("click");
    }
}


// Create function to check user's answer. We pass two values to the funciton. The first is the answer the second is it's position in the array.
function checkAnswer(e, f) {
    // console.log(e, f);
    if (f === questions[i].correct) {
        answer.innerHTML = "Correct!";
        console.log(i);
    }
    else {
        answer.innerHTML = "Incorrect!";
        //should remove a 10 second penalty from the timer
        timeLeft -= 10;
    }
    i++
    if (i >= questions.length) {
        // Call the function for ending page
        quizStop();
    }
    else {
        setTimeout(questionsDisplay, 2000);
    }
};
// Create function to move from the questions to the score page.
function lastQuestion() {
    // check if we're at the last question
    // if(i > questions.length) {
    //     quizStop()
    //     timeleft = score;

};
// Create function to stop the quiz.
function quizStop() {
    //stop timer
    clearInterval(countdown);
    //log the time that's left as the score
    score = timeLeft;
    //move to the All Done page
    var questions = document.querySelector(".questions");
    questions.style.display = "none";
    var lastPage = document.getElementById("completed");
    lastPage.style.display = "block"
}
//Write a function to display user score on final page and log it and user initials to local storage.
function gameOver() {
    var userScore = document.getElementById("final-score");
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
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log()"],
        correct: 3,
    },
];

function questionsDisplay() {
    if (questions[i]) {
        
        answer.innerTHML = "";

        questionsTitle.innerHTML = questions[i].title;
        choiceOne.innerHTML = questions[i].choices[0];
        choiceTwo.innerHTML = questions[i].choices[1];
        choiceThree.innerHTML = questions[i].choices[2];
        choiceFour.innerHTML = questions[i].choices[3];

    }
    else {
        quizStop()
    }
}

// Event Listeners Library
startButton.addEventListener("click", quizStart);

// submitButton.addEventListener("click", nextQuestion);

// fixed button event listeners which were firing immediately by wrapping the checkAnswer function in a separate anonymous function
choiceOne.addEventListener("click", function () {
    checkAnswer(/*choiceOne.innerHTML = questions[i].choices[0]*/5, 0);
}
);
choiceTwo.addEventListener("click", function () {
    checkAnswer(/*choiceTwo.innerHTML = questions[i].choices[1]*/5, 1);
});
choiceThree.addEventListener("click", function () {
    checkAnswer(choiceThree.innerHTML = questions[i].choices[2], 2);
});
choiceFour.addEventListener("click", function () {
    checkAnswer(choiceFour.innerHTML = questions[i].choices[3], 3);
});
