interface IColor {
  name: string;
  value: string;
}

interface IPower {
  totalHp: number;
  totalKw: number;
  torqueNm: number;
}

interface IPowertrain {
  type: string;
  power: IPower;
  fuelConsumption: number;
}

interface IDrivetrain {
  transmission: string;
  driveType: string;
}

export interface ITotalAuto {
  id: number;
  image: string;
  name: string;
  style: string;
  rating: number;
  about: string;
  acceleration0To100: number;
  brand: string;
  model: string;
  year: number;
  color: IColor[];
  powertrain: IPowertrain;
  drivetrain: IDrivetrain;
}
