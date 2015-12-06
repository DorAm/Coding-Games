function showMessage() {
    $.getJSON('api/contact', function (messages) {
        var htmlMsg = messages.map(function (message) {
            console.log(messages);
            return '<tr>' +
                '<td>' + message.name + '</td>' +
                '<td>' + message.email + '</td>' +
                '<td>' + message.subject + '</td>' +
                '<td>' + message.message + '</td>' +
                '<td>' + '<button class="deleteBtn" onclick="deleteMessage(' + message.id + ')">' +
                'Delete</button>' + '</td>' + '</tr>';


        });
        $('#userMessages').html(htmlMsg.join(''))
    });
}

function deleteMessage(id) {
    $.ajax({
        url: 'api/contact/' + id,
        type: 'DELETE',
        success: function (result) {
            showMessage();
        }
    });
}