/*
  Warnings:

  - A unique constraint covering the columns `[year]` on the table `setting` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "setting" ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 2024;

-- CreateIndex
CREATE UNIQUE INDEX "setting_year_key" ON "setting"("year");
