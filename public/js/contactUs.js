function sendForm(elForm) {
    $.ajax({
        url: 'api/contact/',
        data: {name: elForm[0].value, Email: elForm[1].value, subject: elForm[2].value, message: elForm[3].value},
        type: 'POST',
        success: function () {
            console.log('success');
        }
    });
}
