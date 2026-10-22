/*
  Warnings:

  - You are about to drop the `CallbackTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CallbackTask";

-- DropTable
DROP TABLE "NotificationLog";

-- CreateTable
CREATE TABLE "callback" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "comment" TEXT,
    "status" "CallbackStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "callback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notify" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "channel" "ChannelType" NOT NULL,
    "status" "NotifyStatus" NOT NULL,
    "payload" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notify_pkey" PRIMARY KEY ("id")
);
