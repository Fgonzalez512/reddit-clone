exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('comments').insert({
                    id: 1,
                    content: 'Pretty cool.',
                    user_id: 3,
                    // post_id: 2
                }),
                knex('comments').insert({
                    id: 2,
                    content: 'You suck.',
                    user_id: 2,
                    // post_id: 1
                }),
                knex('comments').insert({
                    id: 3,
                    content: 'Nice!',
                    user_id: 1,
                    // post_id: 3
                })
            ]);
        });
};
