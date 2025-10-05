import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1759694303738 implements MigrationInterface {
    name = 'Migration1759694303738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "testMigrations"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "testMigrations" character varying`);
    }

}
