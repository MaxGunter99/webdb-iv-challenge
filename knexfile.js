// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/cookbook.bd3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    //turn ferign key enforment on
    pool: {
      //runs after connection is made to the sql lite engine
      afterCreate: ( conn, done ) => {
        conn.run('PRAGMA freign_keys = ON', done)
      }
    }
  }
};
