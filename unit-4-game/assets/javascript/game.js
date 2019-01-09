$(document).ready(function() {
    //when the game starts assign the user a score to target
    var targetScore = Math.floor(Math.random() * (121 - 19)) + 19;
    console.log(targetScore);

    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //reset function
    function reset(){
        userScore = 0;
        $("#userScore").html("<div>" + userScore + "</div>");
        targetScore = Math.floor(Math.random() * (121 - 19)) + 19;
        $("#targetScore").html("<div> Target Score: " + targetScore + "</div>");
        $("#wins").html("<div> Wins: " + wins + "</div>");
        $("#losses").html("<div> Losses: " + losses + "</div>");
    }

    //helper function to handle the if statement for each click event
    function clickCondition(){
        //if the userScore equals the target score the user "wins", update the win count, reset the game
        if (userScore === targetScore){

            
            $("#winOrLose").html("You have Won!");
            wins += 1;
            reset();

            //if the userScore becomes greater than the target score, the user "loses" the game, update loses, reset game
        } else if (userScore > targetScore){
            $("#winOrLose").html("You have Lost!");
            losses +=1;
            reset();
        };
    }

    //display the targetScore
    $("#targetScore").html("<div> Target Score: " + targetScore + "</div>");

    //display wins
    $("#wins").html("<div> Wins: " + wins + "</div>");

    //display losses
    $("#losses").html("<div> Losses: " + losses + "</div>");

    //display userScore
    $("#userScore").html("<div>" + userScore + "</div>");


    //assign values to each crystal
    $("#redGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(redGem);

    $("#blueGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(blueGem);

    $("#whiteGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(whiteGem);

    $("#darkRedGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(darkRedGem);

    //when a crystal is clicked update the user score with what the crystal value represents
    $("#redGem").on("click", function(){
        var redGemValue = ($(this).attr("data-gemValue"));
        redGemValue = parseInt(redGemValue);
        userScore += redGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

        clickCondition();

    });

    $("#blueGem").on("click", function(){
        var blueGemValue = ($(this).attr("data-gemValue"));
        blueGemValue = parseInt(blueGemValue);
        userScore += blueGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

        clickCondition();

    });

    $("#whiteGem").on("click", function(){
        var redGemValue = ($(this).attr("data-gemValue"));
        redGemValue = parseInt(redGemValue);
        userScore += redGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

        clickCondition();

    });

    $("#darkRedGem").on("click", function(){
        var darkRedGemValue = ($(this).attr("data-gemValue"));
        darkRedGemValue = parseInt(darkRedGemValue);
        userScore += darkRedGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

        clickCondition();

    });
    
});