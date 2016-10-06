exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    id: 1,
                    username: "d4rkkn1gh787",
                    first_name: "Frank",
                    last_name: "Gonzalez",
                }),
                knex('users').insert({
                    id: 2,
                    username: "beaker628",
                    first_name: "Ashley",
                    last_name: "Gonzalez"
                }),
                knex('users').insert({
                    id: 3,
                    username: "jasontodd23x",
                    first_name: "Hendrix-Morrison",
                    last_name: "Gonzalez"
                })
            ]);
        });
};
