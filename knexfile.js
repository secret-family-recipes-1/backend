// Update with your config settings.
pgconnection = process.env.DATABASE_URL || "postgres://uytitphharkqzg:982735eda48f9d00929e2a087ca562ffaa3511cf094d02dadd274db7af9726f0@ec2-3-222-150-253.compute-1.amazonaws.com:5432/d47pbcru9ugdm2"
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
