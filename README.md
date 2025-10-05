<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## API NEST README
## DOCKER

### Construir y ejecutar en modo desarrollo

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```


### Ejecutar en modo desarrollo con imagen preconstruida

```bash
docker-compose -f docker-compose.dev.yml up -d
```

##
## TYPEORM DEV
1) Configurar synchronize en true hasta tener una version de prod (TypeOrmModule.forRoot -> app.module.ts).
2) Después de tener la primer versión de prod mantener synchronize en false y trabajar con las migrations.

#### GENERATE MIGRATIONS

1) Configurar synchronize en false en ENV

    POSTGRES_SYNCHRONIZE=false

2) Generar migration:

```bash
npx ts-node-esm node_modules/typeorm/cli.js migration:generate src/migrations/migration -d src/data-source.ts
```
##
## TYPEORM DEPLOY PRODUCTION

1) En el primer deploy de la app es necesario tener synchronize en true para que typeorm cree automaticamente las bases y tablas (TypeOrmModule.forRoot -> app.module.ts)
2) A partir del primer deploy synchronize debe permanecer en false, para evitar perder datos.
3) Para manejar las creaciones y modificaciones de tablas es necesario utilizar las migrations, las cuales se generan de forma manual en desarrollo.
4) En la config de TypeOrmModule.forRoot deben existir las propiedades -> migrationsRun : true ,  migrations: ['dist/migrations/*{.ts,.js}'] para que levante las migrations de forma automatica.


##
## API DOCUMENTATION
### Docs dev (localhost)
http://localhost:3001/docs


### Docs prod (render)
https://api-nest-docker.onrender.com/docs