## Context

Section `EcosystemSectionAPU.astro` saat ini mengandalkan transisi dua state berbasis klik pin (`step-2`) dengan dua image map dan fade. Kebutuhan baru mempertahankan narasi ekosistem, tetapi mengubah pendekatan visual menjadi non-interaktif dengan motion ultra-lambat yang berpusat pada pin kampus (Anchor Campus pattern).

Konteks desain sistem APU menuntut konsistensi token, primitive, dan aksesibilitas motion. Audiens utama (siswa + orang tua) membutuhkan pengalaman yang terlihat premium namun tetap tenang dan mudah dibaca.

## Goals / Non-Goals

**Goals:**
- Menghadirkan section baru dengan map visual kiri + teks kanan yang konsisten dengan gaya APU.
- Mengimplementasikan animasi rotasi 360 derajat sangat lambat pada lapisan map, dengan pusat rotasi di titik pin kampus.
- Menjaga pin sebagai anchor visual yang stabil di atas map.
- Menjamin fallback aksesibilitas melalui `prefers-reduced-motion`.
- Menjaga readability panel teks dan hierarki konten.

**Non-Goals:**
- Menyediakan interaksi map (drag, zoom, klik marker, kontrol tile).
- Mengintegrasikan SDK peta interaktif (Leaflet/OpenLayers) untuk fase ini.
- Mengubah arsitektur global halaman atau sistem navigasi di luar scope section baru.

## Decisions

### 1) Gunakan sumber map non-interaktif (asset/snapshot), bukan iframe interaktif
**Rationale:** kebutuhan hanya motion visual; menghindari kompleksitas pointer event, performa, dan artefak interaksi saat elemen diputar lama.

**Alternatif dipertimbangkan:**
- OSM iframe embed langsung: bisa diputar, tetapi kontrol interaksi tidak relevan dan berisiko aneh bila diputar.
- Library map interaktif: kontrol tinggi namun overkill untuk scope ini.

### 2) Pisahkan lapisan map berputar dan lapisan pin tetap
**Rationale:** jika pin berada dalam lapisan map, pin ikut berputar sehingga kehilangan efek “anchor campus”. Pemisahan layer memastikan kampus tetap titik referensi visual.

**Alternatif dipertimbangkan:**
- Satu layer tunggal (map+pin): implementasi mudah tetapi menyalahi intent naratif anchor.

### 3) Rotasi ultra-lambat linear dengan origin presisi berbasis persen
**Rationale:** durasi 180–300 detik per putaran menjaga gerak hampir tak terasa, tetap hidup tanpa mengganggu baca teks. Origin persen memudahkan kalibrasi responsif terhadap posisi pin.

**Alternatif dipertimbangkan:**
- Micro-oscillation (bolak-balik kecil): lebih tenang, namun user sudah memilih full 360.

### 4) Terapkan guardrail motion + accessibility
**Rationale:** animasi kontinu berpotensi mengganggu sebagian pengguna. `prefers-reduced-motion` harus menonaktifkan rotasi.

**Alternatif dipertimbangkan:**
- Tetap animasi pada reduced-motion: ditolak karena melanggar prinsip aksesibilitas.

### 5) Pertahankan kontrak design system APU
**Rationale:** section baru wajib tetap memakai shell, token, tipografi, dan ritme transisi agar konsisten lintas halaman.

**Alternatif dipertimbangkan:**
- Styling one-off bebas: ditolak karena meningkatkan fragmentasi UI.

## Risks / Trade-offs

- **[Kalibrasi origin tidak tepat]** → Mitigasi: gunakan koordinat pin dalam persen yang sama untuk lapisan map dan pin overlay; verifikasi desktop + mobile breakpoint utama.
- **[Rotasi terasa terlalu dominan pada sebagian user]** → Mitigasi: mulai dari durasi konservatif (mis. 240s) dan validasi visual; turunkan intensitas bila perlu.
- **[Clipping pada sudut frame saat map diputar]** → Mitigasi: sediakan padding/scale map plate agar sudut tidak kosong saat rotasi.
- **[Konflik dengan fokus teks kanan]** → Mitigasi: pakai vignette/contrast guard di area teks dan hindari animasi tambahan yang bersaing.
- **[Performa perangkat rendah]** → Mitigasi: batasi animasi pada transform GPU-friendly dan kurangi layer blur berat.
