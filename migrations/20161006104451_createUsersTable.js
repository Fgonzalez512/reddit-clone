exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', function(table) {
        table.increments();
        table.boolean('admin').defaultTo(false);
        table.string('username').unique();
        table.string('first_name');
        table.string('last_name');
        table.string('email').unique();
        table.specificType('hashed_password', 'char(60)');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
