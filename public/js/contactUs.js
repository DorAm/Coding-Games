
function sendForm(elForm) {
    $.ajax({
        url: 'api/contact/',
        data: {name: elForm[0].value, Email: elForm[1].value, subject: elForm[2].value, message: elForm[3].value},
        type: 'POST',
        success: function () {
            $('.contact-form').trigger("reset");
            $('.confirmessage').fadeIn(1000);
            setTimeout(function (){
                $('.confirmessage').fadeOut(1000);
            }, 2000)

        }
    });
}
