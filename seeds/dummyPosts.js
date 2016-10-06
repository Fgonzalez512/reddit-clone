exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('posts').insert({
                    id: 1,
                    title: 'Awesome picture',
                    body: 'Check it out.',
                    user_id: 2
                }),
                knex('posts').insert({
                    id: 2,
                    title: 'New to the site',
                    body: 'Hi!',
                    user_id: 1
                }),
                knex('posts').insert({
                    id: 3,
                    title: 'Confused',
                    body: 'How do I do this?',
                    user_id: 3
                })
            ]);
        });
};
