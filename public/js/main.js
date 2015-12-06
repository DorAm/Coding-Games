function loginField() {
    //$('.loginWindow').removeClass('hide');
    $('.loginWindow').popup('show');
    //setTimeout(function (){
    //    $('.confirmessage').fadeOut(1000);
    //}, 2000)

}


function login(userDtl) {
    if (userDtl[0].value === 'admin' && userDtl[1].value === 'admin') {

        $('#adminPanel').removeClass('hide');
    }
    $('.loginWindow').popup('hide');
    //$('.loginWindow').fadeOut(1000);
    //$('.loginWindow').addClass('hide');
    $('#loginBtn').addClass('hide');
    $('#logoutBtn').removeClass('hide');

}

function logout() {
    $('#adminPanel').addClass('hide');
    $('#logoutBtn').addClass('hide');
    $('#loginBtn').removeClass('hide');

}

