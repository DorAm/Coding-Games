

$.getJSON('api/games/', function(data){

    console.log(data);
    //var htmlString = '<ul class="gamesList">';
    var htmlString = '';
    $.each(data, function(key, val){
        //htmlString += '<h3>' + val.name +'</h3></br>';
        //htmlString += '<li class="child child-' + key + ' ' + val.id+'"><img src="../img/'+val.id+'.png">';
        //htmlString += '</li>';
        htmlString += '<h3>' + val.name +'</h3>';
        htmlString += '<div class="child child-' + key + ' ' + val.id+'"><img src="../img/'+val.id+'.png">';
        htmlString += '</div>';

    });
    htmlString += '</ul>';
    $('.gamesArea').html(htmlString);

});

$(".nav-toggle").on('click', function (e) {
    $("nav").toggleClass("show");
    e.preventDefault();
});