import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb:127.0.0.1:27017/reactcarshop")
  .then(() => console.log("Succsesful conection with MongoDB!"))
  .catch((err) => console.error("Failed conection with MongoDB", err));

const autoSchema = new mongoose.Schema({
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
      totalHP: { type: Number, required: true },
      totalKw: { type: Number, required: true },
      torque: { type: Number, required: true },
    },
    fuelConsumption: { type: Number, required: true },
  },
  drivetrain: {
    transmission: { type: Number, required: true },
    driveType: { type: Number, required: true },
  },
});

const Auto = mongoose.model("Auto", autoSchema);

const totalAuto = [
  {
    id: 51,
    image: "mer63c.svg",
    name: "amg c 63 s",
    style: "lap",
    rating: 4.2,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 3.9,
    brand: "Mercedes-Benz",
    model: "AMG C 63 S E PERFORMANCE",
    year: 2024,
    color: [
      {
        name: "Graphite Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#414446]",
      },
      {
        name: "Obsidian Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#151719]",
      },
      {
        name: "Spectral Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1B2A4A]",
      },
      {
        name: "Patagonia Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#7A1116]",
      },
    ],
    powertrain: {
      type: "Plug-in Hybrid (PHEV)",
      power: { totalHp: 680, totalKw: 500, torqueNm: 1020 },
      fuelConsumption: 6.9,
    },
    drivetrain: {
      transmission: "9G-TRONIC AMG SPEEDSHIFT MCT",
      driveType: "4MATIC+ (All-Wheel Drive with Drift Mode)",
    },
  },
  {
    id: 52,
    image: "dod17.svg",
    name: "srt demon 170",
    style: "drag",
    rating: 4.9,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 1.7,
    brand: "Dodge",
    model: "Challenger SRT Demon 170",
    year: 2023,
    color: [
      {
        name: "Pitch Black Clearcoat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0D0E0E]",
      },
      {
        name: "TorRed Clearcoat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#B8191C]",
      },
      {
        name: "Plum Crazy",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#4F2170]",
      },
      {
        name: "F8 Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#3B4D3C]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1025, totalKw: 764, torqueNm: 1281 },
      fuelConsumption: 21.4,
    },
    drivetrain: {
      transmission: "8-speed TorqueFlite Automatic",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 53,
    image: "aud08.svg",
    name: "r8 V10 Type 4s",
    style: "lap",
    rating: 4.7,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 3.1,
    brand: "Audi",
    model: "R8 V10 performance quattro (Type 4S)",
    year: 2023,
    color: [
      {
        name: "Suzuka Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D0D4D9]",
      },
      {
        name: "Mythos Black Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
      {
        name: "Ascari Blue Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#10316B]",
      },
      {
        name: "Tango Red Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#990A15]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 620, totalKw: 456, torqueNm: 580 },
      fuelConsumption: 13.1,
    },
    drivetrain: {
      transmission: "7-speed S tronic dual-clutch",
      driveType: "quattro (All-Wheel Drive)",
    },
  },
  {
    id: 54,
    image: "bug00.svg",
    name: "chiron super sport",
    style: "drag",
    rating: 5.0,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 2.4,
    brand: "Bugatti",
    model: "Chiron Super Sport",
    year: 2022,
    color: [
      {
        name: "French Racing Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#002F6C]",
      },
      {
        name: "Nocturne Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
      {
        name: "Glacier White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EFEFEF]",
      },
      {
        name: "Italian Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#A61019]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1600, totalKw: 1176, torqueNm: 1600 },
      fuelConsumption: 21.47,
    },
    drivetrain: {
      transmission: "7-speed DSG dual-clutch",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 1,
    image: "por91.svg",
    name: "911 GT3 RS",
    style: "lap",
    rating: 5.0,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 3.2,
    brand: "Porsche",
    model: "911 GT3 RS",
    year: 2023,
    color: [
      {
        name: "Ice Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D1D5DB]",
      },
      {
        name: "Guards Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#CC0000]",
      },
      {
        name: "Shark Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0055A5]",
      },
      {
        name: "Python Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#008A3B]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 525, totalKw: 386, torqueNm: 465 },
      fuelConsumption: 13.4,
    },
    drivetrain: {
      transmission: "7-speed PDK Dual-Clutch",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 2,
    image: "bmw05.svg",
    name: "BMW M5 CS",
    style: "lap",
    rating: 4.8,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 3.0,
    brand: "BMW",
    model: "M5 CS",
    year: 2022,
    color: [
      {
        name: "Frozen Deep Green Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#203428]",
      },
      {
        name: "Frozen Brands Hatch Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#4A4D4F]",
      },
      {
        name: "Brands Hatch Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#5C6063]",
      },
      {
        name: "M Alpine White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F5F5F5]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 635, totalKw: 467, torqueNm: 750 },
      fuelConsumption: 11.3,
    },
    drivetrain: {
      transmission: "8-speed M Steptronic",
      driveType: "M xDrive (AWD with RWD Mode)",
    },
  },
  {
    id: 3,
    image: "nis35.svg",
    name: "GT-R Nismo",
    style: "lap",
    rating: 4.7,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 2.8,
    brand: "Nissan",
    model: "GT-R Nismo",
    year: 2024,
    color: [
      {
        name: "Nismo Stealth Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#7C8285]",
      },
      {
        name: "Pearl White TriCoat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EFEFEF]",
      },
      {
        name: "Super Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0E0E0E]",
      },
      {
        name: "Solid Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#A30C19]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 600, totalKw: 441, torqueNm: 652 },
      fuelConsumption: 14.0,
    },
    drivetrain: {
      transmission: "6-speed Dual-Clutch Transmission",
      driveType: "ATTESA ET-S All-Wheel Drive (AWD)",
    },
  },
  {
    id: 4,
    image: "che06.svg",
    name: "Corvette Z06",
    style: "lap",
    rating: 4.8,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 2.7,
    brand: "Chevrolet",
    model: "Corvette Z06",
    year: 2023,
    color: [
      {
        name: "Amplify Orange Tintcoat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E05206]",
      },
      {
        name: "Torch Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C2111A]",
      },
      {
        name: "Hypersonic Gray Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#53575A]",
      },
      {
        name: "Rapid Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0082C8]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 670, totalKw: 500, torqueNm: 623 },
      fuelConsumption: 15.6,
    },
    drivetrain: {
      transmission: "8-speed Dual-Clutch Transmission",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 5,
    image: "for50.svg",
    name: "Shelby GT500",
    style: "drag",
    rating: 4.6,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 3.5,
    brand: "Ford",
    model: "Mustang Shelby GT500",
    year: 2022,
    color: [
      {
        name: "Grabber Blue Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1565C0]",
      },
      {
        name: "Shadow Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0C0D0E]",
      },
      {
        name: "Oxford White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F2F2F2]",
      },
      {
        name: "Race Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C6181E]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 760, totalKw: 567, torqueNm: 847 },
      fuelConsumption: 16.8,
    },
    drivetrain: {
      transmission: "7-speed Dual-Clutch Transmission",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 6,
    image: "lam61.svg",
    name: "Huracán STO",
    style: "lap",
    rating: 4.8,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 3.0,
    brand: "Lamborghini",
    model: "Huracán STO",
    year: 2023,
    color: [
      {
        name: "Verde Citrea",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#8DB600]",
      },
      {
        name: "Blu Laufey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#2B547E]",
      },
      {
        name: "Arancio Xanto",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D33D17]",
      },
      {
        name: "Grigio Titanio",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#666B73]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 640, totalKw: 470, torqueNm: 565 },
      fuelConsumption: 13.9,
    },
    drivetrain: {
      transmission: "7-speed LDF Dual-Clutch",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 7,
    image: "fer90.svg",
    name: "SF90 Stradale",
    style: "lap",
    rating: 4.9,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum volutpat lectus. Nam auctor sodales ante vel tincidunt. Vivamus in diam eu tortor maximus tincidunt nec eget arcu. Morbi tincidunt tempus molestie. Suspendisse potenti. Sed faucibus sed odio in euismod. Aliquam nec mollis ligula, sed bibendum odio. Nunc aliquet magna nibh. Nullam malesuada et neque nec facilisis. Duis aliquam ante justo, et tincidunt ante fermentum ac. Praesent porttitor arcu ut risus pretium ultricies. Ut ut condimentum ex, eu luctus tellus. Aliquam erat volutpat. Donec id egestas nisl. Etiam sit amet imperdiet tellus. Cras scelerisque eros orci, quis rutrum nunc mollis in. Aenean vitae velit tristique, luctus orci quis, vehicula nisl. Nulla consequat sodales viverra. Donec tempor libero congue sagittis pellentesque. Maecenas sit amet dolor in orci congue elementum.",
    acceleration0To100: 2.5,
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2023,
    color: [
      {
        name: "Rosso Corsa",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D40000]",
      },
      {
        name: "Giallo Modena",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD700]",
      },
      {
        name: "Nero Daytona",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#101010]",
      },
      {
        name: "Blu Tour de France",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#002366]",
      },
    ],
    powertrain: {
      type: "Plug-in Hybrid (PHEV)",
      power: { totalHp: 1000, totalKw: 735, torqueNm: 800 },
      fuelConsumption: 6.1,
    },
    drivetrain: {
      transmission: "8-speed Dual-Clutch Transmission",
      driveType: "e-AWD (All-Wheel Drive)",
    },
  },
];

app.get("/api/cars", async (req, res) => {
  try {
    const totalAuto = await Auto.find();
    res.json(totalAuto);
  } catch (err) {
    res.status(500).json({ error: "Server fail" });
  }
});

app.get("/api/cars/:id", async (req, res) => {
  try {
    const auto = await Auto.findById(req.params.id);
    if (!auto) return res.status(404).json({ error: "This car not founded" });
    res.json(auto);
  } catch (err) {
    res.status(500).json({ error: "Incorect ID" });
  }
});

app.post("/api/cars", (req: Request, res: Response) => {
  const {
    image,
    name,
    style,
    rating,
    about,
    acceleration0To100,
    brand,
    model,
    year,
    color,
    powertrain,
    drivetrain,
  } = req.body;

  if (
    !image ||
    !name ||
    !style ||
    !rating ||
    !about ||
    !acceleration0To100 ||
    !brand ||
    !model ||
    !year ||
    !color ||
    !powertrain ||
    !drivetrain
  ) {
    return res.status(400).json({ error: "Please take a corect data!" });
  }
  const newCar = {
    id: totalAuto.length > 0 ? totalAuto[totalAuto.length - 1].id + 1 : 1,
    image,
    name,
    style,
    rating,
    about,
    acceleration0To100,
    brand,
    model,
    year,
    color,
    powertrain,
    drivetrain,
  };
  totalAuto.push(newCar);
  res.status(201).json(newCar);
});

app.put("/api/cars/:id", (req: Request, res: Response) => {
  const carId = Number(req.params.id);
  const {
    image,
    name,
    style,
    rating,
    about,
    acceleration0To100,
    brand,
    model,
    year,
    color,
    powertrain,
    drivetrain,
  } = req.body;

  const carIndex = totalAuto.findIndex((auto) => auto.id === carId);

  if (carIndex === -1) {
    return res.status(404).json({ error: "This car not founded" });
  }

  totalAuto[carIndex] = {
    ...totalAuto[carIndex],
    image: image ?? totalAuto[carIndex].image,
    name: name ?? totalAuto[carIndex].name,
    style: style ?? totalAuto[carIndex].style,
    rating: rating !== undefined ? Number(rating) : totalAuto[carIndex].rating,
    about: about ?? totalAuto[carIndex].about,
    acceleration0To100:
      acceleration0To100 !== undefined
        ? Number(acceleration0To100)
        : totalAuto[carIndex].acceleration0To100,
    brand: brand ?? totalAuto[carIndex].brand,
    model: model ?? totalAuto[carIndex].model,
    year: year !== undefined ? Number(year) : totalAuto[carIndex].year,
    color: color ?? totalAuto[carIndex].color,
    powertrain: powertrain ?? totalAuto[carIndex].powertrain,
    drivetrain: drivetrain ?? totalAuto[carIndex].drivetrain,
  };

  res.json(totalAuto[carIndex]);
});

app.delete("/api/cars/:id", (req: Request, res: Response) => {
  const carId = Number(req.params.id);
  const carIndex = totalAuto.findIndex((auto) => auto.id === carId);

  if (carIndex === -1) {
    return res.status(404).json({ error: "This car not founded" });
  }
  const deletedCar = totalAuto.splice(carIndex, 1);
  res.json({ message: "The car has been deleted!", car: deletedCar[0] });
});

app.listen(PORT, () => {
  console.log(`Server is Done!: http://localhost:${PORT}/api/cars`);
});
