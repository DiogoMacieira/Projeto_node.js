/*
  Warnings:

  - You are about to drop the column `data` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `consulta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `data`,
    DROP COLUMN `hora`,
    ADD COLUMN `datahora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
