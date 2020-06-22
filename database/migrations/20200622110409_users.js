
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        // primary user id
        tbl.increments();

        // required username
        tbl.string('username')
            .notNullable()
            .unique();

        // required password
        tbl.string('password')
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};