-- CreateTable
CREATE TABLE "Resident" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "name" TEXT NOT NULL,
    "residence" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resident_pkey" PRIMARY KEY ("id")
);
