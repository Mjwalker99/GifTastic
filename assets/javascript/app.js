$(document).ready(function () {


    var rappers = ["Post Malone", "Vince Staples", "Asap Rocky", "Migos", "Kanye West", "Childish Gambino", "Lil Yachty", "J Cole", "Desiinger", "2 Chainz", "Drake", "Lil Uzi Vert", "Jay Z", "Asap Ferg", "Mac Miller", "Kendrick Lamar"];

    function makeButtons() {

        $('.button').empty();

        for (var i = 0; i < rappers.length; i++) {

            var j = $('<button>')
            j.addClass('rap');
            j.attr('data-name', rappers[i]);
            j.text(rappers[i]);
            $('.button').prepend(j);
        }
    }

    $(".addRapper").on("click", function () {

        var rap = $(".rapper-input").val().trim();

        rappers.push(rap);

        makeButtons();

        return false;
    })
    function displayGifs() {

        var rap = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            rap + "&api_key=7efG4IOfEuxLwvMi3tt1SNF6P5bsT7oP&limit=10";

        $.ajax({ url: queryURL, method: "GET" }).done(function (response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var gifDiv = $('.gifs');

                var showGif = $('<img>');

                showGif.attr('src', results[i].images.fixed_height_still.url);

                showGif.attr('title', "Rating: " + results[i].rating);

                showGif.attr('data-still', results[i].images.fixed_height_still.url);

                showGif.attr('data-state', 'still');

                showGif.addClass('gif');

                showGif.attr('data-animate', results[i].images.fixed_height.url);

                gifDiv.prepend(showGif)

                $(".gifs").prepend(gifDiv);
            }

        });
    }

    $(document).on('click', '.gif', function () {
        var state = $(this).attr('data-state');

        if (state == 'still') {

            $(this).attr('src', $(this).data('animate'));

            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));

            $(this).attr('data-state', 'still');
        };
    });




    $(document).on("click", ".rap", displayGifs);

    makeButtons();

});
