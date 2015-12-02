


$.getJSON('data/monster', function (monsters) {
    var htmlMonsters = monsters.map(function (monster) {
        return '<li>'+
            monster.name +
            '<button class="btn" onclick="deleteMonster('+monster.id+')">' +
            'Delete</button>' +
            '<button class="btn" onclick="editMonster('+monster.id+')">' +
            'Edit</button>' +

            '</li>';
    });
    $('#listMonsters').html(htmlMonsters.join(''))
});
