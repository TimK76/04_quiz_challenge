var goBack=document.getElementById("go-back");

function rank() {
    // get scores from local storage
    var highScoreList = JSON.parse(localStorage.getItem("endGameData"));
    // put scores into an array
    for(let k = 0; k < highScoreList.length; k++) {
        console.log("initials",highScoreList[k].intials);
        console.log("scores", highScoreList[k].scores);
    }
}
if(window.location.pathname==="higscores"){
    rank();

}

goBack.addEventListener("click", function(){
    timeLeft=75;
    score=0;
    i=0;
    var startingPage = document.getElementById("original-div");
    startingPage.style.display = "block";
    document.querySelector(".questions").style.display = "none";
    var lastPage = document.getElementById("completed");
    lastPage.style.display = "none";
})