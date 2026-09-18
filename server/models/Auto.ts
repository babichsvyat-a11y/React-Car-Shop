import mongoose from "mongoose";

const autoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  style: { type: String, required: true },
  rating: { type: Number, required: true },
  about: { type: String, required: true },
  acceleration0To100: { type: Number, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: [
    {
      name: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  powertrain: {
    type: { type: String, required: true },
    power: {
      totalHP: { type: Number },
      totalKw: { type: Number },
      torque: { type: Number },
    },
    fuelConsumption: { type: Number, required: true },
  },
  drivetrain: {
    transmission: { type: String, required: true },
    driveType: { type: String, required: true },
  },
});

export const Auto = mongoose.model("Auto", autoSchema);
