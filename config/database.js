module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
    },
  },
});