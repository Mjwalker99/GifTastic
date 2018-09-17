var topics = ["Vince Staples", "A$ap Rocky", "Kendrick Lamar", "Future", "Drake", "Travis Scott"];

$("button").on("click", function() {
    var topics = $(this).attr("data-person");


var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=7efG4IOfEuxLwvMi3tt1SNF6P5bsT7oP&limit=10";


$.ajax({
    url: queryURL,
    method: "GET" 
})

.then(function(response) {

});
});
