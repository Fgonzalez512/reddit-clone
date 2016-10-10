exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    id: 1,
                    first_name: 'bruce',
                    last_name: 'wayne',
                    email: 'sadbat@gmail.com',
                    password: 'alfred'
                }),
                knex('users').insert({
                    id: 2,
                    first_name: 'diana',
                    last_name: 'prince',
                    email: 'clearjet@gmail.com',
                    password: 'lasso'
                }),
                knex('users').insert({
                    id: 3,
                    first_name: 'clark',
                    last_name: 'kent',
                    email: 'farmboy@gmail.com',
                    password: 'krypton'
                }),
            ]);
        });
};
