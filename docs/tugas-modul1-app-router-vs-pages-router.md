# Tugas mandiri Modul 1 (no. 3) — App Router vs Pages Router

Pages Router (folder `pages/`) memetakan tiap berkas langsung ke satu rute,
dan komponennya berjalan di klien secara default — data biasanya diambil
lewat `getServerSideProps` atau `getStaticProps` yang dijalankan terpisah dari
komponen itu sendiri. Layout bersama harus disusun manual dengan komponen
pembungkus di `_app.tsx`, dan tidak ada batas Suspense bawaan per segmen.

App Router (folder `app/`) membalik asumsi itu: setiap komponen adalah Server
Component secara bawaan, sehingga bisa langsung memakai `async/await` untuk
mengambil data tanpa fungsi pemisah. Folder bersarang otomatis jadi hierarki
rute, dan berkas konvensi seperti `layout.tsx`, `loading.tsx`, serta
`error.tsx` memberi layout persisten, status muat, dan penanganan galat per
segmen tanpa konfigurasi tambahan. Konsekuensinya, developer harus sadar
kapan menambahkan `"use client"` — sesuatu yang tidak relevan di Pages
Router karena semua komponen memang berjalan di klien.

Untuk proyek NusaCargo, App Router dipilih karena kebutuhan streaming
(Modul 7) dan pemisahan rute publik/dasbor lewat grup rute (Modul 3) jauh
lebih alami ditulis di sini.
