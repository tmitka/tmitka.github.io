//create topics arry and set up initial variables
var topics = ["super saiyan", "link", "woody harrleson"];
var newTopic;
var search;
var state;

$(document).ready(function () {

    //for all the items in the topics array display them
    function displayButtons() {
        $('.buttons-container').empty();
        for (i = 0; i < topics.length; i+=1) {
            $('.buttons-container').append('<button class="btn btn-info added-button" value="' + topics[i] + '">' + topics[i] + '</button>');
        }
    }

    //make sure to actually display them
    displayButtons();

    //adding new topics 
    $('.add-button').click(function (event) {
        event.preventDefault();
        newTopic = $('input').val();
        newTopic = newTopic.toLowerCase();
        newTopic = newTopic.trim();

        //this if statement is to handle the valid input fields. when the add button is clicked make sure that it cannot be empty and that it doesn't exist
        if (newTopic !== "" && topics.indexOf(newTopic) === -1) {
            topics.push(newTopic);
            displayButtons();
            $('input').val('');
            $('.user-alert').empty();
        }
        else if (topics.indexOf(newTopic) !== -1) {
            $('.user-alert').html('<p>(That topic already exists.)</p>');
        }
        else if (newTopic === "") {
            $('.user-alert').html('<p>(Submit cannot be blank.)</p>');
        };
    });

    //function to display Gifs, will be added to a click event to only display correctly added topics
    function displayGifs() {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (i = 0; i < results.length; i+=1) {
                var gifColumn = $('<div class=col-4><br />');
                var rating = results[i].rating;
                rating = rating.toUpperCase();
                var gifRating = $('<p class="card-header text-center">').text('Rating: ' + rating);

                var gifImage = $('<img>');
                //give the gifs attr for on creation to manage their animated vs still state
                gifImage.attr('src', results[i].images.fixed_height_still.url);
                gifImage.attr('gif-still', results[i].images.fixed_height_still.url);
                gifImage.attr('gif-animate', results[i].images.fixed_height.url);
                gifImage.attr('gif-state', 'still');
                gifColumn.append(gifRating);
                gifColumn.append(gifImage);
                $('.gif-container').prepend(gifColumn);
            };
        });
    };

    //create a function to add 10 more gifs to the page
    function addTenGifs() {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&offset=" + 10 + "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (i = 0; i < results.length; i+=1) {
                var gifColumn = $('<div class=col-4><br />');
                var rating = results[i].rating;
                rating = rating.toUpperCase();
                var gifRating = $('<p class="card-header text-center">').text('Rating: ' + rating);

                var gifImage = $('<img>');
                //give the gifs attr for on creation to manage their animated vs still state
                gifImage.attr('src', results[i].images.fixed_height_still.url);
                gifImage.attr('gif-still', results[i].images.fixed_height_still.url);
                gifImage.attr('gif-animate', results[i].images.fixed_height.url);
                gifImage.attr('gif-state', 'still');

                gifColumn.append(gifRating);
                gifColumn.append(gifImage);
                $('.gif-container').prepend(gifColumn);
            };
        });
    };

    //when a user clicks the added button display this topic
    $(document).on('click', '.added-button', function () {
        search = $(this).val();
        $('.gif-container').empty();
        displayGifs();
        $('.more-results').html('<button class="see-more btn btn-success">Click for more.</button>');
    });

    //when clicking a gif, check its state and animate it or don't based on its state
    $(document).on('click', 'img', function () {
        state = $(this).attr('gif-state');
        //if the gif state is still change it to animate
        if (state === 'still') {
            $(this).attr('src', $(this).attr('gif-animate'));
            $(this).attr('gif-state', 'animate');
        }
        //if the gif state is animate, change its state to still
        else {
            $(this).attr('src', $(this).attr('gif-still'));
            $(this).attr('gif-state', 'still');
        };
    });

    $(document).on('click', '.see-more', function () {
        addTenGifs();
    });
});