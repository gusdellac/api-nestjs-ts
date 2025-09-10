import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';

const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT
  ? parseInt(process.env.MYSQL_PORT)
  : undefined;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: host,
      port: port,
      username: user,
      password: password,
      database: database,
      autoLoadEntities: true,
      synchronize: true, // no usar en produccion
    }),
    BreedsModule,
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
