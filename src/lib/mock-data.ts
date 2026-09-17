// Data tiruan sementara. Akan digantikan oleh Route Handler + berkas JSON
// pada Modul 8, dan strategi cache/fetch sungguhan pada Modul 7.
// Dipisah di satu tempat supaya gampang dicari-ganti nanti.

import type { Shipment } from "@/types/shipment";

export const MOCK_SHIPMENTS: Shipment[] = [
  {
    awb: "NC-2026-000481",
    origin: "Makassar",
    destination: "Surabaya",
    status: "transit",
    weightKg: 1200,
    etaISO: "2026-09-19T10:00:00.000Z",
    delayedMinutes: 0,
    client: { id: "c-01", name: "PT Anugrah" },
  },
  {
    awb: "NC-2026-000482",
    origin: "Balikpapan",
    destination: "Jakarta",
    status: "tertunda",
    weightKg: 850,
    etaISO: "2026-09-18T06:30:00.000Z",
    delayedMinutes: 145,
    client: { id: "c-02", name: "CV Sumber Jaya" },
  },
  {
    awb: "NC-2026-000483",
    origin: "Ambon",
    destination: "Makassar",
    status: "selesai",
    weightKg: 300,
    etaISO: "2026-09-15T14:00:00.000Z",
    delayedMinutes: 0,
    client: { id: "c-03", name: "Toko Sinar Laut" },
  },
  {
    awb: "NC-2026-000484",
    origin: "Sorong",
    destination: "Ambon",
    status: "di-pelabuhan",
    weightKg: 2100,
    etaISO: "2026-09-20T09:00:00.000Z",
    delayedMinutes: 20,
    client: { id: "c-04", name: "PT Anugrah" },
  },
];

export async function getShipment(awb: string): Promise<Shipment | null> {
  // simulasi latensi jaringan
  await new Promise((r) => setTimeout(r, 150));
  return MOCK_SHIPMENTS.find((s) => s.awb === awb) ?? null;
}

export async function getShipments(): Promise<Shipment[]> {
  await new Promise((r) => setTimeout(r, 150));
  return MOCK_SHIPMENTS;
}
