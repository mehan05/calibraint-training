import type { MigrationInterface, QueryRunner } from "typeorm";

export class Init1773511033901 implements MigrationInterface {
    name = 'Init1773511033901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chat_participants" ("chatParticipantsId" SERIAL NOT NULL, "userUserId" integer, "chatChatId" integer, CONSTRAINT "PK_625df4412a128988e7beada6925" PRIMARY KEY ("chatParticipantsId"))`);
        await queryRunner.query(`CREATE TABLE "chat" ("chatId" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2" PRIMARY KEY ("chatId"))`);
        await queryRunner.query(`CREATE TABLE "message" ("messageId" SERIAL NOT NULL, "sentAt" TIMESTAMP NOT NULL, "message" character varying NOT NULL, "chatChatId" integer, "userUserId" integer, CONSTRAINT "PK_b664c8ae63d634326ce5896cecc" PRIMARY KEY ("messageId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" SERIAL NOT NULL, "password" character varying NOT NULL, "username" character varying NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`ALTER TABLE "chat_participants" ADD CONSTRAINT "FK_0f6b70c785597e553b71c5d99bf" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_participants" ADD CONSTRAINT "FK_2509b0ea58f596b0b59088be832" FOREIGN KEY ("chatChatId") REFERENCES "chat"("chatId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_1a862ba2b3ceb14f888fbb9ceb6" FOREIGN KEY ("chatChatId") REFERENCES "chat"("chatId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_0a02be6a16967b5028d83310a72" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_0a02be6a16967b5028d83310a72"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_1a862ba2b3ceb14f888fbb9ceb6"`);
        await queryRunner.query(`ALTER TABLE "chat_participants" DROP CONSTRAINT "FK_2509b0ea58f596b0b59088be832"`);
        await queryRunner.query(`ALTER TABLE "chat_participants" DROP CONSTRAINT "FK_0f6b70c785597e553b71c5d99bf"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "chat"`);
        await queryRunner.query(`DROP TABLE "chat_participants"`);
    }

}
