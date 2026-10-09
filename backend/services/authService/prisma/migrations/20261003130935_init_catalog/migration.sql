-- CreateTable
CREATE TABLE "cars" (
    "id" UUID NOT NULL,
    "style" TEXT NOT NULL,
    "rating" DECIMAL(3,2) NOT NULL,
    "about" TEXT NOT NULL,
    "acceleration" DECIMAL(4,2) NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "hour_cost" DECIMAL(8,2) NOT NULL,
    "full_cost" DECIMAL(10,2) NOT NULL,
    "powertrain_type" TEXT NOT NULL,
    "total_hp" INTEGER NOT NULL,
    "total_kw" INTEGER NOT NULL,
    "torque_nm" INTEGER NOT NULL,
    "fuel_consumption" DECIMAL(4,1) NOT NULL,
    "transmission" TEXT NOT NULL,
    "drive_type" TEXT NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_colors" (
    "car_id" UUID NOT NULL,
    "color_id" INTEGER NOT NULL,

    CONSTRAINT "car_colors_pkey" PRIMARY KEY ("car_id","color_id")
);

-- CreateTable
CREATE TABLE "colors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hex" TEXT NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_images" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "car_id" UUID NOT NULL,
    "color_id" INTEGER,
    "is_main" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "car_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colors_name_key" ON "colors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "colors_hex_key" ON "colors"("hex");

-- AddForeignKey
ALTER TABLE "car_colors" ADD CONSTRAINT "car_colors_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_colors" ADD CONSTRAINT "car_colors_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_images" ADD CONSTRAINT "car_images_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_images" ADD CONSTRAINT "car_images_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
