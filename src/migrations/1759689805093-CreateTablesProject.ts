import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablesProject1759689805093 implements MigrationInterface {
    name = 'CreateTablesProject1759689805093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "testMigrations" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "testMigrations"`);
    }

}
