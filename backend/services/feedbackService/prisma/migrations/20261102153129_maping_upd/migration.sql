/*
  Warnings:

  - You are about to drop the `callback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notify` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "callback";

-- DropTable
DROP TABLE "notify";

-- CreateTable
CREATE TABLE "callbackTask" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "comment" TEXT,
    "status" "CallbackStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "callbackTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificationLog" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "channel" "ChannelType" NOT NULL,
    "status" "NotifyStatus" NOT NULL,
    "payload" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificationLog_pkey" PRIMARY KEY ("id")
);
