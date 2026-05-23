## 1. Section Structure & Content

- [x] 1.1 Buat section Astro baru berbasis narasi ekosistem dengan layout Anchor Campus (map kiri, teks kanan) dan ID section yang sesuai navigasi.
- [x] 1.2 Integrasikan komponen/pola design system APU yang relevan (section shell, tipografi, header, CTA bila dipakai) tanpa menyalahi kontrak visual.
- [x] 1.3 Tulis copy Bahasa Indonesia untuk kicker, judul, deskripsi, dan label pendukung sesuai tone siswa + orang tua.

## 2. Anchor Campus Motion Layering

- [x] 2.1 Implementasikan lapisan map non-interaktif sebagai plate utama yang siap diputar 360 ultra-lambat.
- [x] 2.2 Pisahkan lapisan pin kampus sebagai overlay independen agar tidak ikut berotasi.
- [x] 2.3 Kalibrasikan `transform-origin` rotasi ke koordinat pin kampus berbasis persen agar pusat putar tepat.
- [x] 2.4 Tambahkan guard terhadap clipping visual saat rotasi (padding/scale/overflow strategy).

## 3. Accessibility, Responsiveness, and Readability

- [x] 3.1 Tambahkan fallback `prefers-reduced-motion` untuk menonaktifkan animasi rotasi kontinu.
- [x] 3.2 Pastikan susunan responsif desktop dan mobile tetap menjaga urutan informasi serta tidak overlap.
- [x] 3.3 Jaga kontras dan kestabilan panel teks kanan selama animasi map aktif (vignette/overlay jika diperlukan).

## 4. Validation & Integration

- [x] 4.1 Uji visual pada breakpoint utama untuk memastikan pin tetap anchor dan rotasi terasa halus (kecepatan ultra-lambat).
- [x] 4.2 Verifikasi tidak ada interaksi map yang diwajibkan dan tidak ada regresi perilaku section lain.
- [x] 4.3 Review akhir terhadap kepatuhan design token/primitive APU dan aksesibilitas motion sebelum merge.
