console.log("Im linked");
var timer = 30;
var intervalId;
var correctAnswer = 0;
var wrongAnswer = 0;




//when the start button is clicked initialize a countdown and display the trivia questions
$("#start").on("click", run);
function run() {
    console.log("start clicked")
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease timer by one.
    timer--;

    //  Show the timer in the #timer tag.
    $("#timer").html("<h2>" + timer + "</h2>");


    //  Once number hits zero...
    if (timer === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }
    //trivia questions can only have one answer
    //store correct and incorrect answers to be displayed later

//when the timer hits 0 display the number of correct and incorrect answers
    //if the user clicks the done button end the timer and display the correct and incorrect answers
$(":button").click(function(){
    var answerOne = $('input[answerOne]:checked').val()

    console.log(answerOne);
    console.log("done clicked");
});