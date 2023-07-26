import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'libreadmin',
  password: 'librepassword',
  database: 'librepod',
  entities: ['**/entities/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: ['./src/database/migrations/*.ts'],
});
