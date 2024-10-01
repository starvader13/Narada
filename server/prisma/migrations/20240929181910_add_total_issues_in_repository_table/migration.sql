/*
  Warnings:

  - Added the required column `total_issues` to the `Respository` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Respository" ADD COLUMN     "total_issues" TEXT NOT NULL;
