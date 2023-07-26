import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStores1690345930277 implements MigrationInterface {
  name = 'AddStores1690345930277';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(512) NOT NULL, "specificationFilePath" character varying(2048) NOT NULL, CONSTRAINT "UQ_66df34da7fb037e24fc7fee642b" UNIQUE ("name"), CONSTRAINT "UQ_39007b4ec1fa9e2694056cf085a" UNIQUE ("specificationFilePath"), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "store"`);
  }
}
