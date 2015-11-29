
$.getJSON('../server/games.json', function(data){
    var htmlString = '<ul class="gamesList">';
    $.each(data, function(key, val){
        htmlString += '<li>';
        htmlString += '<h3>' + val.name +'</h2>';
        htmlString += '</li>';
    });
    htmlString += '</ul>';
    $('#gamesArea').html(htmlString);

}); //get JSON
