import type { MigrationInterface, QueryRunner } from "typeorm";

export class Init1773667648576 implements MigrationInterface {
    name = 'Init1773667648576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat_participants" DROP CONSTRAINT "FK_2509b0ea58f596b0b59088be832"`);
        await queryRunner.query(`ALTER TABLE "chat_participants" DROP COLUMN "chatChatId"`);
        await queryRunner.query(`ALTER TABLE "chat_participants" ADD "chatChatId" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_1a862ba2b3ceb14f888fbb9ceb6"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "chatId"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "chatId" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2" PRIMARY KEY ("chatId")`);
        await queryRunner.query(`ALTER TABLE "message" ALTER COLUMN "sentAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "chatChatId"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "chatChatId" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "chat_participants" ADD CONSTRAINT "FK_2509b0ea58f596b0b59088be832" FOREIGN KEY ("chatChatId") REFERENCES "chat"("chatId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_1a862ba2b3ceb14f888fbb9ceb6" FOREIGN KEY ("chatChatId") REFERENCES "chat"("chatId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_1a862ba2b3ceb14f888fbb9ceb6"`);
        await queryRunner.query(`ALTER TABLE "chat_participants" DROP CONSTRAINT "FK_2509b0ea58f596b0b59088be832"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "chatChatId"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "chatChatId" integer`);
        await queryRunner.query(`ALTER TABLE "message" ALTER COLUMN "sentAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "chatId"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "chatId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2" PRIMARY KEY ("chatId")`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_1a862ba2b3ceb14f888fbb9ceb6" FOREIGN KEY ("chatChatId") REFERENCES "chat"("chatId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_participants" DROP COLUMN "chatChatId"`);
        await queryRunner.query(`ALTER TABLE "chat_participants" ADD "chatChatId" integer`);
        await queryRunner.query(`ALTER TABLE "chat_participants" ADD CONSTRAINT "FK_2509b0ea58f596b0b59088be832" FOREIGN KEY ("chatChatId") REFERENCES "chat"("chatId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
