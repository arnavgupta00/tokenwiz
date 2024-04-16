/*
  Warnings:

  - You are about to drop the column `amountUSD` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Made the column `modeOfPayment` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `amountUSD`,
    ADD COLUMN `amount` DOUBLE NOT NULL,
    MODIFY `modeOfPayment` VARCHAR(191) NOT NULL;
