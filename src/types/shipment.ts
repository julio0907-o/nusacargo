export const SHIPMENT_STATUS = [
  "dijemput",
  "transit",
  "di-pelabuhan",
  "dikirim",
  "selesai",
  "tertunda",
  "dibatalkan", 
] as const;

export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];

// 1. Modelkan tipe Driver
export interface Driver {
  id: string;
  name: string;
  phone: string;
}

// 2. Modelkan tipe Vehicle (menggunakan union literal untuk jenis kendaraan)
export type VehicleType = "truk" | "kapal" | "pesawat" | "kereta";

export interface Vehicle {
  id: string;
  licensePlate: string;
  type: VehicleType;
}

export interface Shipment {
  awb: string; 
  origin: string;
  destination: string;
  status: ShipmentStatus;
  weightKg: number;
  etaISO: string;
  delayedMinutes: number;
  client: { id: string; name: string };
  // 3. Relasi opsional menggunakan tanda tanya (?)
  driver?: Driver;
  vehicle?: Vehicle;
}

export type ShipmentSummary = Pick<Shipment, "awb" | "status" | "etaISO">;