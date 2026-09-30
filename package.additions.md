# Dependensi tambahan (Modul 1)

Jalankan di root proyek kamu yang sudah ada:

```bash
npm install zod clsx tailwind-merge lucide-react
npm install -D prettier prettier-plugin-tailwindcss vitest @vitejs/plugin-react
```

Tambahkan skrip berikut ke `package.json`:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```
