# Tugas mandiri Modul 2 (no. 3) — Menambah status baru

Status `"dibatalkan"` ditambahkan ke `SHIPMENT_STATUS` di `src/types/shipment.ts`.

## Berkas yang wajib diperbarui akibat perubahan ini

Karena `StatusBadge` memakai `Record<ShipmentStatus, string>` (bukan `Partial`
atau objek bebas), TypeScript langsung menandai galat pada
`src/components/ui/status-badge.tsx` — objek `STYLES` dianggap tidak lengkap
sampai key `dibatalkan` ditambahkan. **1 berkas** yang wajib diperbarui saat ini.

Ini akan bertambah begitu modul-modul lanjutan dikerjakan:
- **Modul 9** — elemen `<select>` pada `StatusForm` (opsi status pada formulir)
  perlu ditambah opsi baru secara manual (di situ tidak dipetakan otomatis dari
  `SHIPMENT_STATUS`, jadi TypeScript *tidak* akan menegur — ini justru
  menunjukkan pentingnya me-render opsi dari `SHIPMENT_STATUS.map()` alih-alih
  menuliskannya satu per satu).
- **Modul 8** — skema Zod `z.enum(SHIPMENT_STATUS)` pada Route Handler
  otomatis ikut menerima status baru karena mengambil sumber yang sama,
  jadi tidak perlu diperbarui manual.

## Kesimpulan

Manfaat union literal terasa persis di sini: TypeScript memaksa `STYLES`
lengkap alih-alih membiarkan status baru diam-diam jatuh ke gaya default yang
salah atau `undefined`. Tempat yang **tidak otomatis ditegur** kompiler
(seperti `<select>` yang ditulis manual di Modul 9) adalah sinyal untuk
menuliskannya ulang dengan `.map()` dari `SHIPMENT_STATUS`, bukan hardcode.
