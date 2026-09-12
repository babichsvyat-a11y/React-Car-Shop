const totalAuto = [
  {
    id: 51,
    image: "mer63c.svg",
    name: "amg c 63 s",
    style: "lap",
    rating: 4.2,
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
  {
    id: 8,
    image: "mcl72.svg",
    name: "McLaren 720S",
    style: "lap",
    rating: 4.7,
    acceleration0To100: 2.9,
    brand: "McLaren",
    model: "720S",
    year: 2022,
    color: [
      {
        name: "McLaren Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF6600]",
      },
      {
        name: "Onyx Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0F0F10]",
      },
      {
        name: "Silica White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EAEAEA]",
      },
      {
        name: "Belize Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#004B87]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 720, totalKw: 530, torqueNm: 770 },
      fuelConsumption: 12.2,
    },
    drivetrain: {
      transmission: "7-speed SSG Dual-Clutch",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 9,
    image: "tes00.svg",
    name: "Model S Plaid",
    style: "drag",
    rating: 4.6,
    acceleration0To100: 2.1,
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    color: [
      {
        name: "Ultra Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#A81018]",
      },
      {
        name: "Solid Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
      {
        name: "Pearl White Multi-Coat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F4F4F4]",
      },
      {
        name: "Deep Blue Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#122A5C]",
      },
    ],
    powertrain: {
      type: "Battery Electric Vehicle (BEV)",
      power: { totalHp: 1020, totalKw: 760, torqueNm: 1420 },
      fuelConsumption: null,
    },
    drivetrain: {
      transmission: "Single-speed Direct Drive",
      driveType: "Tri-Motor All-Wheel Drive (AWD)",
    },
  },
  {
    id: 10,
    image: "mer19.svg",
    name: "AMG GT Black",
    style: "lap",
    rating: 4.9,
    acceleration0To100: 3.2,
    brand: "Mercedes-Benz",
    model: "AMG GT Black Series",
    year: 2021,
    color: [
      {
        name: "AMG Magmabeam",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF4D00]",
      },
      {
        name: "Obsidian Black Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#111213]",
      },
      {
        name: "Designo Selenite Grey Magno",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#5A5E60]",
      },
      {
        name: "AMG Green Hell Magno",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#2E7D32]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 730, totalKw: 537, torqueNm: 800 },
      fuelConsumption: 12.8,
    },
    drivetrain: {
      transmission: "7-speed AMG SPEEDSHIFT DCT",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 11,
    image: "ast12.svg",
    name: "DBS Superleg",
    style: "drag",
    rating: 4.5,
    acceleration0To100: 3.4,
    brand: "Aston Martin",
    model: "DBS Superleggera",
    year: 2023,
    color: [
      {
        name: "Xenon Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#3A3D40]",
      },
      {
        name: "Onyx Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0D0D0E]",
      },
      {
        name: "Hyper Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#B30B18]",
      },
      {
        name: "Aston Martin Racing Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#004225]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 725, totalKw: 533, torqueNm: 900 },
      fuelConsumption: 12.4,
    },
    drivetrain: {
      transmission: "8-speed ZF Automatic",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 12,
    image: "toy90.svg",
    name: "GR Supra 3.0",
    style: "lap",
    rating: 4.4,
    acceleration0To100: 3.9,
    brand: "Toyota",
    model: "GR Supra",
    year: 2024,
    color: [
      {
        name: "Mikan Blast",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D84B16]",
      },
      {
        name: "Absolute Zero",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F7F7F7]",
      },
      {
        name: "Nocturnal Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0C0D0E]",
      },
      {
        name: "Renaissance Red 2.0",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#BF0A1A]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 387, totalKw: 285, torqueNm: 500 },
      fuelConsumption: 8.8,
    },
    drivetrain: {
      transmission: "6-speed Intelligent Manual Transmission (iMT)",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 13,
    image: "lex10.svg",
    name: "Lexus LFA",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 3.7,
    brand: "Lexus",
    model: "LFA",
    year: 2012,
    color: [
      {
        name: "Whitest White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F8F9FA]",
      },
      {
        name: "Matte Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#121212]",
      },
      {
        name: "Pearl Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E65100]",
      },
      {
        name: "LFA Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD600]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 571, totalKw: 420, torqueNm: 480 },
      fuelConsumption: 16.7,
    },
    drivetrain: {
      transmission: "6-speed ASG Automated Manual",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 14,
    image: "koe00.svg",
    name: "Jesko Attack",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 2.5,
    brand: "Koenigsegg",
    model: "Jesko",
    year: 2023,
    color: [
      {
        name: "Tang Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E65C00]",
      },
      {
        name: "Crystal White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F0F2F5]",
      },
      {
        name: "Kevlar Clear Carbon",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1C1D21]",
      },
      {
        name: "Imperial Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B2545]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1600, totalKw: 1193, torqueNm: 1500 },
      fuelConsumption: 20.0,
    },
    drivetrain: {
      transmission: "9-speed Light Speed Transmission (LST)",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 15,
    image: "pag00.svg",
    name: "Huayra BC",
    style: "lap",
    rating: 4.9,
    acceleration0To100: 2.8,
    brand: "Pagani",
    model: "Huayra Roadster BC",
    year: 2021,
    color: [
      {
        name: "Grigio Montecarlo",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#7B8084]",
      },
      {
        name: "Exposed Matte Carbon Fiber",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1F2022]",
      },
      {
        name: "Blu Francia",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0038A8]",
      },
      {
        name: "Rosso Dubai",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#800020]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 802, totalKw: 590, torqueNm: 1050 },
      fuelConsumption: 15.5,
    },
    drivetrain: {
      transmission: "7-speed Xtrac Sequential Manual",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 16,
    image: "rim00.svg",
    name: "Rimac Nevera",
    style: "drag",
    rating: 4.9,
    acceleration0To100: 1.8,
    brand: "Rimac",
    model: "Nevera",
    year: 2024,
    color: [
      {
        name: "Squadra Coronado Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
      {
        name: "Lightning Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#39FF14]",
      },
      {
        name: "E-Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0066CC]",
      },
      {
        name: "Predator Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#6C757D]",
      },
    ],
    powertrain: {
      type: "Battery Electric Vehicle (BEV)",
      power: { totalHp: 1914, totalKw: 1408, torqueNm: 2360 },
      fuelConsumption: null,
    },
    drivetrain: {
      transmission: "4x Single-Speed Independent Gearboxes",
      driveType: "All-Wheel Torque Vectoring (AWD)",
    },
  },
  {
    id: 17,
    image: "por00.svg",
    name: "Taycan Turbo S",
    style: "lap",
    rating: 4.7,
    acceleration0To100: 2.8,
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: 2024,
    color: [
      {
        name: "Neptune Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#2A4B7C]",
      },
      {
        name: "Carrera White Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F2F4F7]",
      },
      {
        name: "Jet Black Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0D0E10]",
      },
      {
        name: "Carmine Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#9B111E]",
      },
    ],
    powertrain: {
      type: "Battery Electric Vehicle (BEV)",
      power: { totalHp: 761, totalKw: 560, torqueNm: 1050 },
      fuelConsumption: null,
    },
    drivetrain: {
      transmission: "2-speed Transmission on Rear Axle",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 18,
    image: "aud06.svg",
    name: "RS 6 Avant GT",
    style: "lap",
    rating: 4.8,
    acceleration0To100: 3.3,
    brand: "Audi",
    model: "RS 6 Avant",
    year: 2024,
    color: [
      {
        name: "Arkona White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EDEFF2]",
      },
      {
        name: "Nardo Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#686B6E]",
      },
      {
        name: "Mythos Black Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0C0D0E]",
      },
      {
        name: "Ascari Blue Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#10316B]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 630, totalKw: 463, torqueNm: 850 },
      fuelConsumption: 12.2,
    },
    drivetrain: {
      transmission: "8-speed Tiptronic Automatic",
      driveType: "quattro Permanent All-Wheel Drive",
    },
  },
  {
    id: 19,
    image: "bmw03.svg",
    name: "BMW M3 Comp",
    style: "lap",
    rating: 4.6,
    acceleration0To100: 3.5,
    brand: "BMW",
    model: "M3 Competition",
    year: 2024,
    color: [
      {
        name: "Isle of Man Green Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#004B32]",
      },
      {
        name: "Toronto Red Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C21807]",
      },
      {
        name: "Sao Paulo Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D4E157]",
      },
      {
        name: "Brooklyn Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#B0B7BC]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 510, totalKw: 375, torqueNm: 650 },
      fuelConsumption: 10.1,
    },
    drivetrain: {
      transmission: "8-speed M Steptronic",
      driveType: "M xDrive (AWD)",
    },
  },
  {
    id: 20,
    image: "mer63g.svg",
    name: "G 63 Grand",
    style: "drag",
    rating: 4.5,
    acceleration0To100: 4.5,
    brand: "Mercedes-Benz",
    model: "AMG G 63",
    year: 2024,
    color: [
      {
        name: "MANUFAKTUR Night Black Magno",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#141415]",
      },
      {
        name: "G Manufaktur Platinum Magno",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#72767A]",
      },
      {
        name: "Polar White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F2F3F5]",
      },
      {
        name: "Emerald Green Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0F382C]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 585, totalKw: 430, torqueNm: 850 },
      fuelConsumption: 16.0,
    },
    drivetrain: {
      transmission: "9G-TRONIC AMG SPEEDSHIFT TCT",
      driveType: "AMG Performance 4MATIC (AWD)",
    },
  },
  {
    id: 21,
    image: "alf00.svg",
    name: "Giulia GTAm",
    style: "lap",
    rating: 4.7,
    acceleration0To100: 3.6,
    brand: "Alfa Romeo",
    model: "Giulia GTA",
    year: 2021,
    color: [
      {
        name: "Montreal Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#005F33]",
      },
      {
        name: "Rosso GTA",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#BA0C2F]",
      },
      {
        name: "Bianco Trofeo",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EFEFEF]",
      },
      {
        name: "Nero Vulcano",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#121314]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 540, totalKw: 397, torqueNm: 600 },
      fuelConsumption: 10.8,
    },
    drivetrain: {
      transmission: "8-speed Automatic",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 22,
    image: "mas20.svg",
    name: "Maserati MC20",
    style: "lap",
    rating: 4.6,
    acceleration0To100: 2.9,
    brand: "Maserati",
    model: "MC20",
    year: 2023,
    color: [
      {
        name: "Acqua Marina",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#7BB2C9]",
      },
      {
        name: "Bianco Audace",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EAEAEA]",
      },
      {
        name: "Giallo Genio",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFC72C]",
      },
      {
        name: "Nero Enigma",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0D0D0E]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 630, totalKw: 463, torqueNm: 730 },
      fuelConsumption: 11.5,
    },
    drivetrain: {
      transmission: "8-speed Dual-Clutch Transmission",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 23,
    image: "for00.svg",
    name: "Ford GT",
    style: "lap",
    rating: 4.8,
    acceleration0To100: 3.0,
    brand: "Ford",
    model: "GT",
    year: 2020,
    color: [
      {
        name: "Exposed Carbon Fiber Clearcoat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1E2022]",
      },
      {
        name: "Liquid Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0D3B66]",
      },
      {
        name: "Frozen White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F0F2F5]",
      },
      {
        name: "Shadow Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 660, totalKw: 492, torqueNm: 746 },
      fuelConsumption: 14.7,
    },
    drivetrain: {
      transmission: "7-speed Dual-Clutch Transmission",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 24,
    image: "che01.svg",
    name: "Camaro ZL1 1LE",
    style: "lap",
    rating: 4.6,
    acceleration0To100: 3.5,
    brand: "Chevrolet",
    model: "Camaro ZL1",
    year: 2023,
    color: [
      {
        name: "Rapid Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0082C8]",
      },
      {
        name: "Vivid Orange Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E65100]",
      },
      {
        name: "Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0B0C]",
      },
      {
        name: "Summit White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F5F5F5]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 650, totalKw: 485, torqueNm: 881 },
      fuelConsumption: 15.6,
    },
    drivetrain: {
      transmission: "6-speed Manual with Active Rev Match",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 25,
    image: "sub00.svg",
    name: "WRX STI EJ25",
    style: "rally",
    rating: 4.5,
    acceleration0To100: 5.2,
    brand: "Subaru",
    model: "WRX STI",
    year: 2020,
    color: [
      {
        name: "WR Blue Pearl",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0033A0]",
      },
      {
        name: "Crystal Black Silica",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0C0D0E]",
      },
      {
        name: "Crystal White Pearl",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F2F4F7]",
      },
      {
        name: "Pure Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D32F2F]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 310, totalKw: 228, torqueNm: 393 },
      fuelConsumption: 10.9,
    },
    drivetrain: {
      transmission: "6-speed Close-Ratio Manual",
      driveType: "Symmetrical All-Wheel Drive (AWD)",
    },
  },
  {
    id: 26,
    image: "hon00.svg",
    name: "NSX Type S",
    style: "lap",
    rating: 4.7,
    acceleration0To100: 2.9,
    brand: "Honda",
    model: "NSX",
    year: 2022,
    color: [
      {
        name: "Gotham Gray Matte",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#4A4D52]",
      },
      {
        name: "Valencia Red Pearl",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#B71C1C]",
      },
      {
        name: "130R White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F5F5F5]",
      },
      {
        name: "Berlina Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
    ],
    powertrain: {
      type: "Hybrid (HEV)",
      power: { totalHp: 608, totalKw: 447, torqueNm: 667 },
      fuelConsumption: 10.0,
    },
    drivetrain: {
      transmission: "9-speed Dual-Clutch Transmission",
      driveType: "Sport Hybrid SH-AWD",
    },
  },
  {
    id: 27,
    image: "mit10.svg",
    name: "Evo X FQ-440",
    style: "rally",
    rating: 4.7,
    acceleration0To100: 3.6,
    brand: "Mitsubishi",
    model: "Lancer Evolution X",
    year: 2015,
    color: [
      {
        name: "Frost White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F0F2F5]",
      },
      {
        name: "Phantom Black Pearl",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0E0F10]",
      },
      {
        name: "Orient Red Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C62828]",
      },
      {
        name: "Titanium Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#545B62]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 440, totalKw: 328, torqueNm: 559 },
      fuelConsumption: 10.5,
    },
    drivetrain: {
      transmission: "6-speed SST Twin-Clutch Automated Manual",
      driveType: "Super All-Wheel Control (S-AWC)",
    },
  },
  {
    id: 28,
    image: "nis34.svg",
    name: "Skyline GT-R",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 4.9,
    brand: "Nissan",
    model: "Skyline GT-R",
    year: 2002,
    color: [
      {
        name: "Bayside Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#002D72]",
      },
      {
        name: "Black Pearl",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
      {
        name: "White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F4F4F4]",
      },
      {
        name: "Millennium Jade",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#8A9A86]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 280, totalKw: 206, torqueNm: 392 },
      fuelConsumption: 12.0,
    },
    drivetrain: {
      transmission: "6-speed Getrag Manual",
      driveType: "ATTESA E-TS Pro AWD",
    },
  },
  {
    id: 29,
    image: "maz07.svg",
    name: "RX-7 Spirit R",
    style: "lap",
    rating: 4.9,
    acceleration0To100: 5.1,
    brand: "Mazda",
    model: "RX-7",
    year: 2002,
    color: [
      {
        name: "Titanium Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#585C61]",
      },
      {
        name: "Innocent Blue Mica",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#003B70]",
      },
      {
        name: "Pure White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F7F7F7]",
      },
      {
        name: "Brilliant Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 280, totalKw: 206, torqueNm: 314 },
      fuelConsumption: 11.2,
    },
    drivetrain: {
      transmission: "5-speed Manual",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 30,
    image: "fer08.svg",
    name: "F8 Tributo",
    style: "lap",
    rating: 4.7,
    acceleration0To100: 2.9,
    brand: "Ferrari",
    model: "F8 Tributo",
    year: 2022,
    color: [
      {
        name: "Giallo Modena",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD700]",
      },
      {
        name: "Rosso Corsa",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D40000]",
      },
      {
        name: "Nero Daytona",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#101010]",
      },
      {
        name: "Rosso Scuderia",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF2800]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 720, totalKw: 530, torqueNm: 770 },
      fuelConsumption: 12.9,
    },
    drivetrain: {
      transmission: "7-speed F1 Dual-Clutch",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 31,
    image: "lam12.svg",
    name: "Revuelto",
    style: "drag",
    rating: 4.9,
    acceleration0To100: 2.5,
    brand: "Lamborghini",
    model: "Revuelto",
    year: 2024,
    color: [
      {
        name: "Arancio Apodis",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E64A19]",
      },
      {
        name: "Verde Shock",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#76FF03]",
      },
      {
        name: "Grigio Nimbus",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#9E9E9E]",
      },
      {
        name: "Nero Noctis",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0D]",
      },
    ],
    powertrain: {
      type: "Plug-in Hybrid (PHEV)",
      power: { totalHp: 1015, totalKw: 746, torqueNm: 1062 },
      fuelConsumption: 11.8,
    },
    drivetrain: {
      transmission: "8-speed Dual-Clutch Transmission",
      driveType: "e-AWD (All-Wheel Drive)",
    },
  },
  {
    id: 32,
    image: "mcl01.svg",
    name: "McLaren P1",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 2.8,
    brand: "McLaren",
    model: "P1",
    year: 2015,
    color: [
      {
        name: "Volcano Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFCC00]",
      },
      {
        name: "Volcano Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF3300]",
      },
      {
        name: "Supernova Silver",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C0C0C0]",
      },
      {
        name: "Fire Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#121214]",
      },
    ],
    powertrain: {
      type: "Plug-in Hybrid (PHEV)",
      power: { totalHp: 916, totalKw: 673, torqueNm: 900 },
      fuelConsumption: 8.3,
    },
    drivetrain: {
      transmission: "7-speed Dual-Clutch Transmission",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 33,
    image: "por18.svg",
    name: "918 Spyder",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 2.6,
    brand: "Porsche",
    model: "918 Spyder",
    year: 2015,
    color: [
      {
        name: "Liquid Metal Silver",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#A6ACAF]",
      },
      {
        name: "Liquid Metal Chrome Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1B4D3E]",
      },
      {
        name: "Basalt Black Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#111213]",
      },
      {
        name: "White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFFFFF]",
      },
    ],
    powertrain: {
      type: "Plug-in Hybrid (PHEV)",
      power: { totalHp: 887, totalKw: 652, torqueNm: 1280 },
      fuelConsumption: 3.1,
    },
    drivetrain: {
      transmission: "7-speed PDK Dual-Clutch",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 34,
    image: "fer00.svg",
    name: "LaFerrari",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 2.6,
    brand: "Ferrari",
    model: "LaFerrari",
    year: 2014,
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
        name: "Nero DS",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
      {
        name: "Argento Nürburgring",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C0C0C0]",
      },
    ],
    powertrain: {
      type: "Hybrid (HEV)",
      power: { totalHp: 963, totalKw: 708, torqueNm: 900 },
      fuelConsumption: 14.0,
    },
    drivetrain: {
      transmission: "7-speed Dual-Clutch Transmission",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 35,
    image: "bug16.svg",
    name: "Veyron SS",
    style: "drag",
    rating: 4.9,
    acceleration0To100: 2.5,
    brand: "Bugatti",
    model: "Veyron 16.4",
    year: 2011,
    color: [
      {
        name: "Black Exposed Carbon & Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF5500]",
      },
      {
        name: "Dark Blue Carbon",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#001133]",
      },
      {
        name: "Nocturne Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
      {
        name: "Pearl White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EAEAEA]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1200, totalKw: 882, torqueNm: 1500 },
      fuelConsumption: 23.1,
    },
    drivetrain: {
      transmission: "7-speed DSG Dual-Clutch",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 36,
    image: "koe01.svg",
    name: "Agera RS",
    style: "drag",
    rating: 5.0,
    acceleration0To100: 2.8,
    brand: "Koenigsegg",
    model: "Agera RS",
    year: 2017,
    color: [
      {
        name: "Clear Carbon with Gold Leaf Accents",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D4AF37]",
      },
      {
        name: "Pearl White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F0F2F5]",
      },
      {
        name: "Apple Red Carbon",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#8B0000]",
      },
      {
        name: "Blue Diamond",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0F2C59]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1160, totalKw: 865, torqueNm: 1280 },
      fuelConsumption: 18.0,
    },
    drivetrain: {
      transmission: "7-speed Dual-Clutch with Paddle Shift",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 37,
    image: "pag01.svg",
    name: "Zonda Cinque",
    style: "lap",
    rating: 4.9,
    acceleration0To100: 3.4,
    brand: "Pagani",
    model: "Zonda",
    year: 2009,
    color: [
      {
        name: "Bianco Benny",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F5F5F5]",
      },
      {
        name: "Exposed Carbon Fiber",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1C1C1E]",
      },
      {
        name: "Rosso Corsa Stripe",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D40000]",
      },
      {
        name: "Giallo Modena Accent",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD700]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 678, totalKw: 499, torqueNm: 780 },
      fuelConsumption: 16.5,
    },
    drivetrain: {
      transmission: "6-speed CIMA Robotized Sequential",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 38,
    image: "hen05.svg",
    name: "Venom F5",
    style: "drag",
    rating: 4.8,
    acceleration0To100: 2.6,
    brand: "Hennessey",
    model: "Venom F5",
    year: 2023,
    color: [
      {
        name: "Citrus Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF5500]",
      },
      {
        name: "Glacier Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#41B6E6]",
      },
      {
        name: "Monza Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C8102E]",
      },
      {
        name: "Bare Carbon Fiber",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#151618]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1817, totalKw: 1355, torqueNm: 1617 },
      fuelConsumption: 22.0,
    },
    drivetrain: {
      transmission: "7-speed Single-Clutch Automated Manual",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 39,
    image: "ssc00.svg",
    name: "SSC Tuatara",
    style: "drag",
    rating: 4.7,
    acceleration0To100: 2.6,
    brand: "SSC",
    model: "Tuatara",
    year: 2022,
    color: [
      {
        name: "Metallic Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
      {
        name: "Highlighter Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#39FF14]",
      },
      {
        name: "Glacier White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F2F4F7]",
      },
      {
        name: "Striker Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF3300]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 1750, totalKw: 1305, torqueNm: 1735 },
      fuelConsumption: 20.0,
    },
    drivetrain: {
      transmission: "7-speed CIMA Automated Manual",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 40,
    image: "lot00.svg",
    name: "Lotus Evija",
    style: "drag",
    rating: 4.8,
    acceleration0To100: 2.9,
    brand: "Lotus",
    model: "Evija",
    year: 2023,
    color: [
      {
        name: "Black and Gold Heritage Livery",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0F0F10]",
      },
      {
        name: "Solaris Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFCC00]",
      },
      {
        name: "Surge Gray",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#5A6065]",
      },
      {
        name: "Atomic Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D00000]",
      },
    ],
    powertrain: {
      type: "Battery Electric Vehicle (BEV)",
      power: { totalHp: 2011, totalKw: 1479, torqueNm: 1704 },
      fuelConsumption: null,
    },
    drivetrain: {
      transmission: "4x Single-Speed Independent Gearboxes",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 41,
    image: "ast13.svg",
    name: "AM Valkyrie",
    style: "lap",
    rating: 5.0,
    acceleration0To100: 2.5,
    brand: "Aston Martin",
    model: "Valkyrie",
    year: 2022,
    color: [
      {
        name: "AMR Lime Essence",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D4E157]",
      },
      {
        name: "Stirling Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1B4D3E]",
      },
      {
        name: "Lunar White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#EAEAEA]",
      },
      {
        name: "Ultramarine Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0D12]",
      },
    ],
    powertrain: {
      type: "Hybrid (HEV)",
      power: { totalHp: 1155, totalKw: 849, torqueNm: 900 },
      fuelConsumption: 15.0,
    },
    drivetrain: {
      transmission: "7-speed Single-Clutch Paddle Shift",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 42,
    image: "mer00.svg",
    name: "SLS AMG Black",
    style: "lap",
    rating: 4.9,
    acceleration0To100: 3.6,
    brand: "Mercedes-Benz",
    model: "SLS AMG",
    year: 2014,
    color: [
      {
        name: "Solarbeam Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFC400]",
      },
      {
        name: "Obsidian Black Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0E0F10]",
      },
      {
        name: "Designo Magno Alanite Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#8A8D8F]",
      },
      {
        name: "Iridium Silver Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C5C7C9]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 631, totalKw: 464, torqueNm: 635 },
      fuelConsumption: 13.7,
    },
    drivetrain: {
      transmission: "7-speed AMG SPEEDSHIFT DCT",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 43,
    image: "lex50.svg",
    name: "Lexus LC 500",
    style: "drag",
    rating: 4.5,
    acceleration0To100: 4.7,
    brand: "Lexus",
    model: "LC 500",
    year: 2024,
    color: [
      {
        name: "Polar Surge Satin",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E0E5EA]",
      },
      {
        name: "Infrared",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#9B111E]",
      },
      {
        name: "Ultrasonic Blue Mica 2.0",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#002FA7]",
      },
      {
        name: "Caviar Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 477, totalKw: 351, torqueNm: 540 },
      fuelConsumption: 11.6,
    },
    drivetrain: {
      transmission: "10-speed Direct-Shift Automatic",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 44,
    image: "jag00.svg",
    name: "F-Type SVR",
    style: "drag",
    rating: 4.4,
    acceleration0To100: 3.7,
    brand: "Jaguar",
    model: "F-Type SVR",
    year: 2020,
    color: [
      {
        name: "Velocity Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0047AB]",
      },
      {
        name: "Santorini Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0B0C]",
      },
      {
        name: "Firesand Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E65100]",
      },
      {
        name: "Yulong White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F0F2F5]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 575, totalKw: 423, torqueNm: 700 },
      fuelConsumption: 11.3,
    },
    drivetrain: {
      transmission: "8-speed Quickshift Automatic",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 45,
    image: "ben12.svg",
    name: "Conti GT Speed",
    style: "drag",
    rating: 4.6,
    acceleration0To100: 3.6,
    brand: "Bentley",
    model: "Continental GT Speed",
    year: 2023,
    color: [
      {
        name: "Cumbrian Green",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#1B362A]",
      },
      {
        name: "Beluga Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#090A0B]",
      },
      {
        name: "Glacier White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F5F5F5]",
      },
      {
        name: "St. James Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#A61018]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 659, totalKw: 485, torqueNm: 900 },
      fuelConsumption: 13.7,
    },
    drivetrain: {
      transmission: "8-speed Dual-Clutch Transmission",
      driveType: "Active All-Wheel Drive (AWD)",
    },
  },
  {
    id: 46,
    image: "rol00.svg",
    name: "RR Spectre",
    style: "drag",
    rating: 4.7,
    acceleration0To100: 4.5,
    brand: "Rolls Royce",
    model: "Spectre",
    year: 2024,
    color: [
      {
        name: "Chartreuse",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#DFFF00]",
      },
      {
        name: "Black Diamond",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
      {
        name: "English White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F7F9FA]",
      },
      {
        name: "Salamanca Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0C2340]",
      },
    ],
    powertrain: {
      type: "Battery Electric Vehicle (BEV)",
      power: { totalHp: 584, totalKw: 430, torqueNm: 900 },
      fuelConsumption: null,
    },
    drivetrain: {
      transmission: "Single-Speed Automatic",
      driveType: "All-Wheel Drive (AWD)",
    },
  },
  {
    id: 47,
    image: "bmw04.svg",
    name: "BMW M4 CSL",
    style: "lap",
    rating: 4.6,
    acceleration0To100: 3.7,
    brand: "BMW",
    model: "M4 CSL",
    year: 2023,
    color: [
      {
        name: "Frozen Brooklyn Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#9AA0A6]",
      },
      {
        name: "Black Sapphire Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
      {
        name: "Alpine White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F8F9FA]",
      },
      {
        name: "Toronto Red Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C21807]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 550, totalKw: 405, torqueNm: 650 },
      fuelConsumption: 10.1,
    },
    drivetrain: {
      transmission: "8-speed M Steptronic",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 48,
    image: "por71.svg",
    name: "718 GT4 RS",
    style: "lap",
    rating: 4.9,
    acceleration0To100: 3.4,
    brand: "Porsche",
    model: "718 Cayman GT4 RS",
    year: 2023,
    color: [
      {
        name: "Arctic Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#8C9297]",
      },
      {
        name: "Guards Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#CC0000]",
      },
      {
        name: "Racing Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD700]",
      },
      {
        name: "Gentian Blue Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0F2A4A]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 500, totalKw: 368, torqueNm: 450 },
      fuelConsumption: 13.2,
    },
    drivetrain: {
      transmission: "7-speed PDK Dual-Clutch",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 49,
    image: "che07.svg",
    name: "Corvette ZR1",
    style: "drag",
    rating: 4.8,
    acceleration0To100: 2.9,
    brand: "Chevrolet",
    model: "Corvette ZR1",
    year: 2019,
    color: [
      {
        name: "Sebring Orange Tintcoat",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#E65100]",
      },
      {
        name: "Torch Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C2111A]",
      },
      {
        name: "Corvette Racing Yellow",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD600]",
      },
      {
        name: "Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0B0C]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 755, totalKw: 563, torqueNm: 969 },
      fuelConsumption: 16.0,
    },
    drivetrain: {
      transmission: "7-speed Manual with Active Rev Match",
      driveType: "Rear-Wheel Drive (RWD)",
    },
  },
  {
    id: 50,
    image: "for01.svg",
    name: "Focus RS",
    style: "rally",
    rating: 4.5,
    acceleration0To100: 4.7,
    brand: "Ford",
    model: "Focus RS",
    year: 2018,
    color: [
      {
        name: "Deep Orange",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FF3300]",
      },
      {
        name: "Nitrous Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0077C8]",
      },
      {
        name: "Stealth Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#6C757D]",
      },
      {
        name: "Shadow Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0A0A0B]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 375, totalKw: 276, torqueNm: 510 },
      fuelConsumption: 8.9,
    },
    drivetrain: {
      transmission: "6-speed Manual",
      driveType: "Ford Performance AWD with Drift Mode",
    },
  },
  {
    id: 55,
    image: "toy00.svg",
    name: "GR Yaris Rally",
    style: "rally",
    rating: 4.8,
    acceleration0To100: 5.2,
    brand: "Toyota",
    model: "GR Yaris",
    year: 2024,
    color: [
      {
        name: "Precious Metal Grey",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#555A60]",
      },
      {
        name: "Emotional Red II",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C2111A]",
      },
      {
        name: "Super White II",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F8F9FA]",
      },
      {
        name: "Precious Black",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0B0C0E]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 280, totalKw: 206, torqueNm: 390 },
      fuelConsumption: 8.2,
    },
    drivetrain: {
      transmission: "6-speed Manual",
      driveType: "GR-FOUR Full-Time AWD",
    },
  },
  {
    id: 56,
    image: "lan00.svg",
    name: "Delta Integrale",
    style: "rally",
    rating: 4.9,
    acceleration0To100: 5.7,
    brand: "Lancia",
    model: "Delta HF Integrale",
    year: 1993,
    color: [
      {
        name: "Monza Red",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#C8102E]",
      },
      {
        name: "Giallo Ginestra",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFD700]",
      },
      {
        name: "Lord Blue",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#002366]",
      },
      {
        name: "Bianco Pearl",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#F0F2F5]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 215, totalKw: 158, torqueNm: 314 },
      fuelConsumption: 10.5,
    },
    drivetrain: {
      transmission: "5-speed Manual",
      driveType: "Permanent All-Wheel Drive (AWD)",
    },
  },
  {
    id: 57,
    image: "por91d.svg",
    name: "911 Dakar",
    style: "rally",
    rating: 4.9,
    acceleration0To100: 3.4,
    brand: "Porsche",
    model: "911 Dakar",
    year: 2023,
    color: [
      {
        name: "Gentian Blue Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#0F2A4A]",
      },
      {
        name: "Shade Green Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#5B7065]",
      },
      {
        name: "White",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#FFFFFF]",
      },
      {
        name: "Ice Grey Metallic",
        value: "w-12.5 h-12.5 lg:w-18.75 lg:h-18.75  bg-[#D1D5DB]",
      },
    ],
    powertrain: {
      type: "Internal Combustion Engine (ICE)",
      power: { totalHp: 480, totalKw: 353, torqueNm: 570 },
      fuelConsumption: 11.3,
    },
    drivetrain: {
      transmission: "8-speed PDK Dual-Clutch",
      driveType: "All-Wheel Drive (AWD Offroad Tuned)",
    },
  },
];

export default totalAuto;
