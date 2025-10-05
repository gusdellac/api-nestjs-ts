<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Docker

### Construir y ejecutar en modo desarrollo

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```


### Ejecutar en modo desarrollo con imagen preconstruida

```bash
docker-compose -f docker-compose.dev.yml up -d
```

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## TYPEORM CONF

1) En el primer deploy de la app es necesario tener synchronize en true para que typeorm cree automaticamente las bases y tablas.
2) A partir del primer deploy synchronize debe permanecer en false, para evitar perder datos.
3) Para manejar las creaciones y modificaciones de tablas es necesario utilizar las migrations, las cuales se generan de forma manual en desarrollo.
4) En la config de TypeOrmModule.forRoot deben existir las propiedades -> migrationsRun : true ,  migrations: ['dist/migrations/*{.ts,.js}'] para que levante las migrations de forma automatica.


## Generate migrations typeorm desarrollo

1) Configurar de forma temporal synchronize en false. Variable de entorno:

POSTGRES_SYNCHRONIZE=false

2) Generar migration:

```bash
npx ts-node-esm node_modules/typeorm/cli.js migration:generate src/migrations/CreateTablesProject -d src/data-source.ts
```