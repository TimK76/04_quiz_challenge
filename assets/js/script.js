// Build the Timer countdown function.
var countdown = setInterval(timer, 1000);
function quizStart() {
    if(quizStart) timer--;
    if(timer <=0) {
        quizStop();
        timer = 75*1000;
    }
        timerEl.innerHTML = "Remaining Time: " + timer;
        console.log(timer)
    }  
// Tell the timer to start when the "Start Quiz" button is pressed and to continue running until the end of the quiz.    
addEventListener("click", quizStart);



 
//tell the timer to stop either when all quiz questions are answered or when the timer reaches 0
clearInterval(quizStop)