/*
  Warnings:

  - Added the required column `dateOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `dateOfBirth` DATETIME(3) NOT NULL,
    ADD COLUMN `mobile` VARCHAR(191) NOT NULL;
