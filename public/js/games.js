

$.getJSON('api/games/', function(jsonItems) {

    console.log(jsonItems);
    var htmlString = '';

    jsonItems.forEach(function(item){

        var name = item.name;
        var id = item.id;

        //create a game box
        htmlString += '<div id="' + item.id + '" class="game" onclick="popUp(id)">';
            htmlString += '<h3>' + name + '</h3></br>';
            htmlString += '<img src="img/' + id + '.jpg">'
        htmlString += '</div>';
    });
    //console.log(htmlString);
    $('.gamesArea').append(htmlString);

});

function popUp(id){

    var myWindow = window.open("", "MsgWindow", "width=200, height=200");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

}

//    //var htmlString = '<ul class="gamesList">';
//    var htmlString = '';
//    $.each(data, function(key, val){
//        htmlString += '<h3>' + val.name +'</h3></br>';
//        htmlString += '<li class="child child-' + key + ' ' + val.id+'"><img src="../img/'+val.id+'.png">';
//        htmlString += '</li>';
//        htmlString += '<h3>' + val.name +'</h3>';
//        htmlString += '<div class="child child-' + key + ' ' + val.id+'"><img src="../img/'+val.id+'.png">';
//        htmlString += '</div>';
//
//    });
//    htmlString += '</ul>';
//    $('.gamesArea').html(htmlString);
//
//});

//$(".nav-toggle").on('click', function (e) {
//    $("nav").toggleClass("show");
//    e.preventDefault();
//});