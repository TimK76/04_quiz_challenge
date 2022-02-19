// Build the Timer countdown function.
var countdown;
var time = 75;
// var quizStart = document.getElementById("timer");
var quizStop;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
function timer() {
    time --;
    console.log(time);
    timerEl.innerHTML = "Remaining Time: " + time;
    if(time <=0) {
        clearInterval(countdown);
    }else if(questions <=0){
        // tell the quiz to proceed to the end of the quiz and display score
        document.getElementById("quizFinished");
    }
}

function quizStart() {
    countdown = setInterval(timer, 1000);
    // if(quizStart) timer--;
    //     quizStop();
    // }
    //     console.log(timer)
}  

// Tell the timer to start when the "Start Quiz" button is pressed and to continue running until the end of the quiz.    
startButton.addEventListener("click", quizStart);

//tell the timer to stop either when all quiz questions are answered or when the timer reaches 0
