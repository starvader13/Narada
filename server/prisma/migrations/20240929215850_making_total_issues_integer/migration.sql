/*
  Warnings:

  - The `total_issues` column on the `Respository` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Respository" DROP COLUMN "total_issues",
ADD COLUMN     "total_issues" INTEGER;
