
function sendForm (elForm){
    $.ajax({
        url: '../server/data/contact',
        data:{name: elForm[0].value, } ,
        type: 'POST',
        success: function(elForm) {
           console.log('elForm');
        }
    });
}
