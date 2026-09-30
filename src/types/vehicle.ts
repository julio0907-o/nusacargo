// Tugas mandiri Modul 2 (no. 1) — dimodelkan terpisah dari shipment.ts
// karena Vehicle dan Driver punya siklus hidup sendiri (bisa ada tanpa
// terkait pengiriman, mis. kendaraan sedang standby di pelabuhan).

export const VEHICLE_TYPE = ["truk-kontainer", "truk-engkel", "van"] as const;
export type VehicleType = (typeof VEHICLE_TYPE)[number];

export interface Vehicle {
  id: string;
  plateNumber: string; // nomor polisi
  type: VehicleType;
  capacityKg: number;
}

export interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  phone: string;
}
