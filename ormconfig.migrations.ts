import { NamingStrategyService } from './src/core/database/naming-strategy.service';

export default [
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['./src/**/**.entity.ts'],
    synchronize: false,
    migrationsRun: true,
    migrations: ['./migrations/*.ts'],
    cli: {
      migrationsDir: 'migrations',
    },
    namingStrategy: new NamingStrategyService('custom'),
  },
];
