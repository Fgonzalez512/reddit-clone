exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('posts').insert({
                    id: 1,
                    content: 'hello',
                    link: 'reddit.com',
                    user_id: 1
                }),
                knex('posts').insert({
                    id: 2,
                    content: 'screw that',
                    link: 'reddit.com',
                    user_id: 1
                }),
                knex('posts').insert({
                    id: 3,
                    content: 'check this out',
                    link: 'reddit.com',
                    user_id: 2
                }),
                knex('posts').insert({
                    id: 4,
                    content: 'whatever',
                    link: 'reddit.com',
                    user_id: 2
                }),
                knex('posts').insert({
                    id: 5,
                    content: 'bullshit',
                    link: 'reddit.com',
                    user_id: 3
                }),
                knex('posts').insert({
                    id: 6,
                    content: 'another fake line',
                    link: 'reddit.com',
                    user_id: 3
                }),
            ]);
        });
};
