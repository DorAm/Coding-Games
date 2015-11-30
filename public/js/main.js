<<<<<<< HEAD
$.getJSON('../server/games.json', function(data){
=======

$.getJSON('api/games/', function(data){
>>>>>>> 630c49c32050cff564c3e2a5a416e052c09d07e9
    console.log(data);
    var htmlString = '<ul class="gamesList">';
    $.each(data, function(key, val){
        htmlString += '<li>';
        htmlString += '<h3>' + val.name +'</h3>';
        htmlString += '</li>';
    });
    htmlString += '</ul>';
    $('.gamesArea').html(htmlString);

}); //get JSON

