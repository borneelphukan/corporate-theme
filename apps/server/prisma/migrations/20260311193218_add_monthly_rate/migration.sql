-- AlterTable
ALTER TABLE "resident" ADD COLUMN     "monthlyRate" DOUBLE PRECISION NOT NULL DEFAULT 1000;

-- CreateTable
CREATE TABLE "document" (
    "id" SERIAL NOT NULL,
    "document" TEXT NOT NULL,
    "fileName" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);
