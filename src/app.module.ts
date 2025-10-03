import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT
  ? parseInt(process.env.POSTGRES_PORT)
  : undefined;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DATABASE;
const ssl = process.env.POSTGRES_SSL === 'true';
const synchronize = process.env.POSTGRES_SYNCHRONIZE === 'true';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host,
      port: port,
      username: user,
      password: password,
      database: database,
      autoLoadEntities: true,
      synchronize: synchronize, // no usar en produccion
      ssl: ssl,
      extra: {
        ssl: ssl ? { rejectUnauthorized: false } : null,
      },
    }),
    BreedsModule,
    CatsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
