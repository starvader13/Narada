/*
  Warnings:

  - Made the column `total_issues` on table `Respository` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Respository" ALTER COLUMN "total_issues" SET NOT NULL,
ALTER COLUMN "total_issues" SET DEFAULT 0;
