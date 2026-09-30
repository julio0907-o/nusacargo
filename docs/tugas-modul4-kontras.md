# Tugas mandiri Modul 4 (no. 3) — Rasio kontras token warna

Dihitung dari nilai OKLCH di `globals.css` memakai rumus luminansi relatif
WCAG (bukan sekadar dibaca visual), supaya sesuai target Modul 13 nanti
(kontras teks minimal 4,5:1).

## Mode terang

| Pasangan warna | Rasio | Lulus AA teks normal (≥4.5:1)? |
|---|---|---|
| foreground vs background | 16.79:1 | Ya |
| foreground vs surface | 15.87:1 | Ya |
| brand (teks tautan) vs background | 4.97:1 | Ya (pas-pasan, di atas ambang) |
| danger vs background | 5.21:1 | Ya |

## Mode gelap

| Pasangan warna | Rasio | Lulus AA teks normal (≥4.5:1)? |
|---|---|---|
| foreground vs background | 16.93:1 | Ya |
| foreground vs surface | 15.06:1 | Ya |
| brand (teks tautan) vs background | 7.85:1 | Ya |
| danger vs background | 6.39:1 | Ya |

## Catatan

- `brand` di mode terang paling mepet (4.97:1) — kalau nanti diameksudkan
  dipakai untuk teks kecil (di bawah 18px reguler / 14px tebal), sebaiknya
  digelapkan sedikit lagi (turunkan L pada `--brand`) supaya ada ruang aman,
  bukan cuma lolos tipis.
- Semua pasangan foreground/background & foreground/surface jauh di atas
  ambang, jadi teks isi konten aman di kedua mode.
- Pengukuran ini baru soal warna vs warna. Audit visual sungguhan
  (skor Lighthouse, uji pembaca layar) tetap dikerjakan di **Modul 13**.
