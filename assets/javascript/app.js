$(document).ready(function() {


var rappers = ["Vince Staples", "A$ap Rocky", "Kendrick Lamar", "Future", "Drake", "Travis Scott"];

for (var i = 0; i < rappers.length; i++) {

    var j = $('<button>') 
    j.addClass('rappers'); 
    j.attr('data-name', rappers[i]);
    j.text(rappers[i]); 
    $('.button').append(j); 

}

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    rappers + "&api_key=7efG4IOfEuxLwvMi3tt1SNF6P5bsT7oP&limit=10";


$.ajax({
    url: queryURL,
    method: "GET" 



});
});