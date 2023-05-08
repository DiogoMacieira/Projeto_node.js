/*
  Warnings:

  - You are about to drop the column `medico` on the `consulta` table. All the data in the column will be lost.
  - Added the required column `medicoId` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `medico`,
    ADD COLUMN `medicoId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_medicoId_fkey` FOREIGN KEY (`medicoId`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
