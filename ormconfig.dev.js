module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['./dist/**/**.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    migrations: ['./dist/migrations/*.{ts,js}'],
    cli: {
      migrationsDir: 'migrations',
    },
  },
];
