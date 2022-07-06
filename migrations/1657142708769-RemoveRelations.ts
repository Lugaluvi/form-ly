import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveRelations1657142708769 implements MigrationInterface {
    name = 'RemoveRelations1657142708769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resumes" DROP COLUMN "difficulties"`);
        await queryRunner.query(`ALTER TABLE "resumes" DROP COLUMN "difficulties_motives"`);
        await queryRunner.query(`ALTER TABLE "resumes" DROP COLUMN "behaviour_attitudes"`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "registration" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resumes" ADD "difficulty" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resumes" ADD "difficulty_motive" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resumes" ADD "behaviour_and_attitudes" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resumes" DROP COLUMN "behaviour_and_attitudes"`);
        await queryRunner.query(`ALTER TABLE "resumes" DROP COLUMN "difficulty_motive"`);
        await queryRunner.query(`ALTER TABLE "resumes" DROP COLUMN "difficulty"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "registration"`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resumes" ADD "behaviour_attitudes" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resumes" ADD "difficulties_motives" character varying`);
        await queryRunner.query(`ALTER TABLE "resumes" ADD "difficulties" character varying`);
    }

}
