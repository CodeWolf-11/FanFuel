/*
  Warnings:

  - You are about to drop the column `orderId` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `publicAdress` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "orderId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "publicAdress" TEXT NOT NULL;
