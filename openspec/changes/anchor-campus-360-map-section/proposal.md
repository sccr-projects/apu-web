## Why

Section ekosistem saat ini memakai transisi dua gambar berbasis klik pin. Narasi yang dibutuhkan mirip, tetapi pengalaman visual baru meminta fokus pada lokasi kampus sebagai anchor dengan gerak sinematik halus tanpa interaksi map.

Perubahan ini dibutuhkan sekarang untuk menyajikan storytelling yang lebih premium dan konsisten dengan arah desain APU, sambil menjaga keterbacaan konten untuk audiens siswa dan orang tua.

## What Changes

- Membuat section baru berbasis narasi ekosistem dengan layout dua kolom: area map visual di kiri dan konten teks di kanan.
- Menambahkan visual map kampus APU dengan pola **Anchor Campus**: lapisan map berputar 360 derajat sangat lambat di sekitar titik pin kampus, sementara pin tetap sebagai anchor visual.
- Menghapus ketergantungan pada interaksi klik pin untuk transisi utama pada section baru.
- Menambahkan guardrail motion dan aksesibilitas (`prefers-reduced-motion`) agar animasi dapat dinonaktifkan secara aman.
- Menjaga konsistensi dengan design system APU (token, primitive section shell, tipografi, dan kontras).

## Capabilities

### New Capabilities
- `anchor-campus-map-section`: Section baru yang menampilkan map kampus APU dengan animasi rotasi ultra-lambat berbasis anchor pin serta panel narasi pendamping.

### Modified Capabilities
- (none)

## Impact

- Affected code: section Astro baru/terkait di `src/sections`, kemungkinan komponen pendukung kecil untuk struktur heading/CTA bila dibutuhkan.
- Styling: token dan utility di `src/styles/global.css` untuk motion/keyframes dan kelas section khusus.
- Assets: sumber visual map (embed snapshot/asset) dan elemen pin/overlay.
- APIs/dependencies: tidak memerlukan backend API baru; library map interaktif tidak diwajibkan karena kebutuhan non-interaktif.
