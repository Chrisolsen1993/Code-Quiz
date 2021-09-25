var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
 clear.addEventListener("click", function(){
     localStorage.clear();
     location.reload();
 });

 var totalScore = localStorage.getItem("totalScore");
totalScore = JSON.parse(totalScore);

if (totalScore) {

    for (var i = 0; i < totalScore.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = totalScore[i].initials + " " + totalScore[i].score;
        highScore.appendChild(createLi);
console.log(totalScore)
        console.log(createLi);
    }
    
}

console.log(highScore)
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
