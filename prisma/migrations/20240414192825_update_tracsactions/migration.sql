/*
  Warnings:

  - A unique constraint covering the columns `[sessionID]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Transaction_sessionID_key` ON `Transaction`(`sessionID`);
