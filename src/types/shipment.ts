// Modul 2 — Fondasi TypeScript untuk komponen React
// Status pengiriman dimodelkan sebagai union literal (bukan string bebas)
// supaya penambahan status baru langsung memunculkan galat di tempat yang belum menanganinya.

import type { Vehicle, Driver } from "@/types/vehicle";

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

export interface Shipment {
  awb: string; // nomor resi, contoh: NC-2026-000481
  origin: string;
  destination: string;
  status: ShipmentStatus;
  weightKg: number;
  etaISO: string;
  delayedMinutes: number;
  client: { id: string; name: string };
  // Tugas mandiri Modul 2 (no. 1): relasi opsional — belum tentu setiap
  // pengiriman sudah ditugaskan ke kendaraan/pengemudi (mis. saat masih "dijemput").
  vehicle?: Vehicle;
  driver?: Driver;
}

export type ShipmentSummary = Pick<Shipment, "awb" | "status" | "etaISO">;
