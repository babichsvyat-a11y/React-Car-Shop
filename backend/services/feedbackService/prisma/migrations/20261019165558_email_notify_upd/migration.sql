/*
  Warnings:

  - You are about to drop the column `user_id` on the `NotificationLog` table. All the data in the column will be lost.
  - Added the required column `email` to the `NotificationLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NotificationLog" DROP COLUMN "user_id",
ADD COLUMN     "email" TEXT NOT NULL;
