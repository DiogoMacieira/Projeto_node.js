/*
  Warnings:

  - You are about to drop the column `medicoId` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `utenteId` on the `consulta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Medico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Utente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `NomeMedico` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeUtente` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Made the column `observacoes` on table `consulta` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_medicoId_fkey`;

-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_utenteId_fkey`;

-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `medicoId`,
    DROP COLUMN `utenteId`,
    ADD COLUMN `NomeMedico` VARCHAR(191) NOT NULL,
    ADD COLUMN `NomeUtente` VARCHAR(191) NOT NULL,
    MODIFY `observacoes` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Medico_nome_key` ON `Medico`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `Utente_nome_key` ON `Utente`(`nome`);

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_NomeMedico_fkey` FOREIGN KEY (`NomeMedico`) REFERENCES `Medico`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_NomeUtente_fkey` FOREIGN KEY (`NomeUtente`) REFERENCES `Utente`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;
