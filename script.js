 var startBtn =document.querySelector(".start-button").addEventListener("click", startQuiz);
 var mainContent = document.querySelector('main');
// mainContent.innerHTML= startquiz();
 function startQuiz (){
    var timerEl = document.querySelector(".timer");
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      
      } else {
        timerEl.textContent = timeLeft;
        clearInterval(timeInterval);
      }
    }, 1000);

//   Sound effects
var correctSound = new Audio("./sound/correct.mp3");
var wrongSound = new Audio("./sound/wrong.wav");
   
mainContent.innerHTML=""

// declaring the first question
 question1();
   function question1(){ 
    
    var questionEl= document.createElement("section");
    var listEl = document.createElement("ol");
    console.log(listEl)
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
      questionEl.textContent='How do you write "Hello World" in an alert box?'
      li1.textContent='msg("Helllo World");'
      li2.textContent='alert("Helllo World");'
      li3.textContent='alertBox("Helllo World");'
      li4.textContent='msgBox("Helllo World");'
      mainContent.appendChild(questionEl);
      questionEl.appendChild(listEl);
      listEl.appendChild(li1).addEventListener("click",wrongAnswer);
      listEl.appendChild(li2).addEventListener("click",correctAnswer);
      listEl.appendChild(li3).addEventListener("click",wrongAnswer);
      listEl.appendChild(li4).addEventListener("click",wrongAnswer);
    //   styling my li
    li1.setAttribute("style", "border-radius:5px; border: solid 3px white ; 5px; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em; padding-bottom:2px;")
    li2.setAttribute("style", "border-radius:5px; border: solid 3px white ; 5px; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
    li3.setAttribute("style", "border-radius:5px; border: solid 3px white ; 5px; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
    li4.setAttribute("style", "border-radius:5px; border: solid 3px white ; 5px; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
   
    // add an event listener on each answer
    // var answer1 = document.querySelector('li1').addEventListener("click",answer1a);
    // console.log(answer1);
    function wrongAnswer(event){
      var responseEl = document.querySelector("#response");
     
      var response1 = "Wrong answer";
       responseEl.textContent= response1;
       
       timeLeft -=5;
       timerEl.textContent = timeLeft;
       wrongSound.play();
       question2();
    }
    function correctAnswer(event){
      var responseEl = document.querySelector("#response");
      var response1 = "Correct answer";
       responseEl.textContent= response1;
       correctSound.play();
       question2();
    }
 }

// declaring the first question
function question2(){ 
  mainContent.innerHTML=""
  
 var questionEl= document.createElement("section");
 var listEl = document.createElement("ol");
 console.log(listEl)
 // Create ordered list items
 var li1 = document.createElement("li");
 var li2 = document.createElement("li");

   questionEl.textContent='The external JavaScript file must contain the <script> tag.'
   li1.textContent='True'
   li2.textContent='False'
   
   mainContent.appendChild(questionEl);
   questionEl.appendChild(listEl);
   listEl.appendChild(li1).addEventListener("click",wrongAnswer);
   listEl.appendChild(li2).addEventListener("click",correctAnswer);
 //   styling my li
 li1.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em; padding-bottom:2px;")
 li2.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")


 // add an event listener on each answer
 // var answer1 = document.querySelector('li1').addEventListener("click",answer1a);
 // console.log(answer1);
 function wrongAnswer(event){
   var responseEl = document.querySelector("#response");
   var response1 = "Wrong answer";
   timeLeft -=5;
   timerEl.textContent = timeLeft;
   wrongSound.play();
    responseEl.textContent= response1;
    question3()
 }
 function correctAnswer(event){
   var responseEl = document.querySelector("#response");
   var response1 = "Correct answer";
    responseEl.textContent= response1;
    correctSound.play();
   question3()
 }
}


   function question3(){ 
  mainContent.innerHTML=""
   
    var questionEl= document.createElement("section");
    var listEl = document.createElement("ol");
    console.log(listEl)
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
      questionEl.textContent='How to write an IF statement in JavaScript?'
      li1.textContent='if i = 5'
      li2.textContent='if i == 5 then'
      li3.textContent='if (i == 5)  '
      li4.textContent='if i = 5 then'
      mainContent.appendChild(questionEl);
      questionEl.appendChild(listEl);
      listEl.appendChild(li1).addEventListener("click",wrongAnswer);
      listEl.appendChild(li2).addEventListener("click",wrongAnswer);
      listEl.appendChild(li3).addEventListener("click",correctAnswer);
      listEl.appendChild(li4).addEventListener("click",wrongAnswer);
    //   styling my li
    li1.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em; padding-bottom:2px;")
    li2.setAttribute("style", "border-radius: 5px; border: solid 3px white ;  cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
    li3.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
    li4.setAttribute("style", "border-radius: 5px; border: solid 3px white ;   cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
   
    // add an event listener on each answer
    // var answer1 = document.querySelector('li1').addEventListener("click",answer1a);
    // console.log(answer1);
    function wrongAnswer(event){
      var responseEl = document.querySelector("#response");
      var response1 = "Wrong answer";
      timeLeft -=5;
      timerEl.textContent = timeLeft;
      wrongSound.play();
       responseEl.textContent= response1;
       question4();
    }
    function correctAnswer(event){
      var responseEl = document.querySelector("#response");
      var response1 = "Correct answer";
       responseEl.textContent= response1;
       correctSound.play();
       question4();
    }
  }



//  
  function question4(){ 
     mainContent.innerHTML=""
   
   var questionEl= document.createElement("section");
   var listEl = document.createElement("ol");
   console.log(listEl)
   // Create ordered list items
   var li1 = document.createElement("li");
   var li2 = document.createElement("li");
   var li3 = document.createElement("li");
     questionEl.textContent='How do you create a function in JavaScript?'
     li1.textContent='function = myFunction()'
     li2.textContent='function:myFunction()'
     li3.textContent='function myFunction()'
     mainContent.appendChild(questionEl);
     questionEl.appendChild(listEl);
     listEl.appendChild(li1).addEventListener("click",wrongAnswer);
     listEl.appendChild(li2).addEventListener("click",wrongAnswer);
     listEl.appendChild(li3).addEventListener("click",correctAnswer);
   //   styling my li
   li1.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em; padding-bottom:2px;")
   li2.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
   li3.setAttribute("style", "border-radius: 5px; border: solid 3px white ; cursor: pointer; margin:auto; background-color:aqua; font-size: 1em;")
  
  
   // add an event listener on each answer
   // var answer1 = document.querySelector('li1').addEventListener("click",answer1a);
   // console.log(answer1);
   function wrongAnswer(event){
     var responseEl = document.querySelector("#response");
     var response1 = "Wrong answer";
     timeLeft -=5;
     timerEl.textContent = timeLeft;
      responseEl.textContent= response1;
      wrongSound.play();
      clearInterval(timeInterval);
      allDone();
      
   }
   function correctAnswer(event){
     var responseEl = document.querySelector("#response");
     var response1 = "Correct answer";
      responseEl.textContent= response1;
      correctSound.play();
      clearInterval(timeInterval);
      allDone();
      
   }
 }

 function allDone(){

  var responseEl = document.querySelector("#response");
  responseEl.textContent="";
  mainContent.innerHTML= "";
  // creating a Heading
  var newH1 = document.createElement("h1")
   newH1.textContent="All done!"
  //  newH1.setAttribute("id", "newH1");
  mainContent.appendChild(newH1);
 console.log(newH1)
  
 

// creating a paragraph
 var newP = document.createElement("p");
 newP.textContent=" Your final score is: " + timeLeft;
 mainContent.appendChild(newP);
 // creathing the initial field
 var createLabel = document.createElement("label");
 createLabel.textContent = "Enter your initials: ";
 createLabel.setAttribute("id", "createLabel");
 mainContent.appendChild(createLabel);

 // creating the input
 var createInput = document.createElement("input");
 createInput.setAttribute("type", "text");
 createInput.setAttribute("id", "initials");
 createInput.textContent = "";

 mainContent.appendChild(createInput);

 // creating the submit buttom
 var createSubmit = document.createElement("button");
 createSubmit.setAttribute("type", "submit");
 createSubmit.setAttribute("id", "Submit");
 createSubmit.textContent = "Submit";

 mainContent.appendChild(createSubmit);


// adding an event listener on the submit button to capture the initials an the score
createSubmit.addEventListener("click", function(){

var init = createInput.value;
console.log(init)
if (!init){
  console.log(" Error, No value has been entered");
  return;
} else {
var scoreFinal ={
  initials: init,
  score: timeLeft
}
console.log(scoreFinal);
}
var totalScore = localStorage.getItem("totalScore");
if (!totalScore){
  totalScore = [];
} else{
  totalScore = JSON.parse(totalScore);
}
totalScore.push(scoreFinal);
            var newScore = JSON.stringify(totalScore);
            localStorage.setItem("totalScore", newScore);
           // Travels to final page
            window.location.replace("./highScores.html");
})

}


 
}

// var scoreFinal_serealized = JSON.stringify(scoreFinal);

// localStorage.setItem("scoreFinal", scoreFinal_serealized)