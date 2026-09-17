/**
 * Menghitung selisih menit antara waktu ETA (ISO string) dan waktu saat ini.
 * Mengembalikan nilai positif jika ETA di masa depan, dan negatif jika sudah terlewat.
 */
export function calculateMinutesFromNow(etaISO: string): number {
  const etaDate = new Date(etaISO);
  const now = new Date();
  
  // Menghitung selisih dalam milidetik, lalu dikonversi ke menit (1 menit = 60000 milidetik)
  const diffMs = etaDate.getTime() - now.getTime();
  
  // Menggunakan Math.round untuk membulatkan ke menit terdekat
  return Math.round(diffMs / 60000);
}