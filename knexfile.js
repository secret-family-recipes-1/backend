// Update with your config settings.
pgconnection = process.env.DATABASE_URL
module.exports = {

  development: {
    client: 'pg',
    connection: { host: "localhost", 
    database: "recipes", user: 'postgres', password: "ohman4" },
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  testing: {
    client: 'pg',
    connection: { host: "localhost", 
    database: "recipes", user: 'postgres', password: "ohman4" },
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

 

  production: {
    client: 'pg',
    connection: pgconnection,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  }

};
