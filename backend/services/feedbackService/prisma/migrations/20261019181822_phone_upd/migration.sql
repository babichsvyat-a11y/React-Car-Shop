-- AlterTable
ALTER TABLE "NotificationLog" ADD COLUMN     "phone" TEXT,
ALTER COLUMN "email" DROP NOT NULL;
