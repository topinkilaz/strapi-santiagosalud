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
        require: true,
        rejectUnauthorized: false
      },
      pool: {
        min: 0,
        max: 1, // Reducimos el número máximo de conexiones
        acquireTimeoutMillis: 300000, // Aumentamos el timeout
        createTimeoutMillis: 300000,
        destroyTimeoutMillis: 50000,
        idleTimeoutMillis: 300000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 2000,
      }
    },
    debug: false,
    acquireConnectionTimeout: 300000,
  },
});