// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: 'reddit',
            host: 'localhost'
        }
    },

    test: {
        client: 'pg',
        connection: {
            database: 'reddit-test',
            host: 'localhost',
        }
    },

};
