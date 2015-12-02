function loginField() {
    $('.login').removeClass('hide');
}


function login(userDtl) {
    if (userDtl[0].value === 'admin' && userDtl[1].value === 'admin') {

        $('#adminPanel').removeClass('hide');
    }
    $('.login').addClass('hide');
    $('#loginBtn').addClass('hide');
    $('#logoutBtn').removeClass('hide');
}

function logout() {
    $('#adminPanel').addClass('hide');
    $('#logoutBtn').addClass('hide');
    $('#loginBtn').removeClass('hide');

}

