
$.getJSON('api/games/', function(data){
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
