exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    id: 1,
                    username: 'd4rkkn1gh787',
                    admin: true,
                    first_name: 'Frank',
                    last_name: 'Gonzalez',
                    email: 'frank.gonzalez628@gmail.com'
                }),
                knex('users').insert({
                    id: 2,
                    username: 'beaker628',
                    admin: false,
                    first_name: 'Ashley',
                    last_name: 'Gonzalez',
                    email: 'ash.joh@live.com'
                }),
                knex('users').insert({
                    id: 3,
                    username: 'redhood23x',
                    admin: false,
                    first_name: 'Hendrix-Morrison',
                    last_name: 'Gonzalez',
                    email: 'grayson87@gmail.com'
                })
            ]);
        });
};
