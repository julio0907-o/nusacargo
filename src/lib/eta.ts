// Tugas mandiri Modul 2 (no. 2) — fungsi pembantu bertipe untuk menghitung
// selisih menit antara ETA dan waktu kini. Nilai positif = ETA masih di depan
// (belum lewat), nilai negatif = ETA sudah terlewati.

export function minutesUntilEta(etaISO: string, now: Date = new Date()): number {
  const eta = new Date(etaISO);
  const diffMs = eta.getTime() - now.getTime();
  return Math.round(diffMs / 60_000);
}
