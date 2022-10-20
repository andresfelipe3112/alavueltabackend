module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost:8080/db"),
      port: env.int("DATABASE_PORT", 3030),
      database: env("DATABASE_NAME", "db_pg"),
      user: env("DATABASE_USERNAME", "pg_user"),
      password: env("DATABASE_PASSWORD", "dev"),
      ssl: env.bool("DATABASE_SSL", false),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  },
});
