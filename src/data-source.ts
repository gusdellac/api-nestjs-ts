import 'reflect-metadata';
import { DataSource } from 'typeorm';

const isCompiled = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: isCompiled ? ['dist/**/*.entity.js'] : ['src/**/*.entity.ts'],
  migrations: isCompiled ? ['dist/migrations/*.js'] : ['src/migrations/*.ts'],
  synchronize: false,
});
