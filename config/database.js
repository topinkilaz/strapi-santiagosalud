module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: {
        rejectUnauthorized: false
      },
      pool: {
        min: 0,
        max: 5,
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
      },
    },
    acquireConnectionTimeout: 60000,
    debug: env.bool('DATABASE_DEBUG', false),
    pool: {
      afterCreate: (conn, done) => {
        conn.query('SET timezone="UTC";', (err) => {
          if (err) {
            console.error(err);
          }
          done(err, conn);
        });
      },
    },
  },
});