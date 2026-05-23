# Sistem Desain Website APU (Tailwind v4)

Tujuan: menjaga konsistensi UI saat situs berkembang. Gunakan dokumen ini sebagai kontrak gaya default untuk semua section/komponen baru.

Nuansa utama: vibran namun elegan, premium, futuristik, tetap hangat untuk audiens siswa dan orang tua.

## 1) Sumber kebenaran

- File utama: `src/styles/global.css`
- Gaya implementasi saat ini: runtime Tailwind v4 + lapisan token CSS + kelas utilitas komponen.
- Utamakan pakai primitive yang sudah ada. Tambah primitive baru hanya jika pola berulang di 3+ tempat.

---

## 2) Token desain

Gunakan alias semantik ini (sudah didefinisikan di `:root`):

### Palet inti

- `--apu-surface`
- `--apu-surface-alt`
- `--apu-surface-soft`
- `--apu-navy`
- `--apu-accent`
- `--apu-text`
- `--apu-text-muted`
- `--apu-border`
- `--apu-glow`

### Elevasi + bentuk

- `--apu-shadow-card`
- `--apu-shadow-card-hover`
- `--apu-shadow-btn`
- `--apu-radius-card`
- `--apu-radius-pill`
- `--apu-radius-surface`

### Spasi layout

- `--apu-section-spacing-y`
- `--apu-section-spacing-x`

### Override lokal per section

Setiap section boleh override token secara lokal (contoh sudah diterapkan di hero):

- `--apu-btn-primary-bg`
- `--apu-btn-primary-color`
- `--apu-btn-primary-border`
- `--apu-btn-primary-hover-bg`
- `--apu-btn-primary-hover-color`
- `--apu-btn-secondary-bg`
- `--apu-btn-secondary-color`
- `--apu-btn-secondary-border`
- `--apu-btn-secondary-hover-bg`
- `--apu-btn-secondary-hover-border`
- `--apu-badge-bg`
- `--apu-badge-border`
- `--apu-badge-color`

Aturan: override hanya yang dibutuhkan untuk identitas section. Jaga nama semantik tetap stabil.

---

## 3) Primitive bersama (wajib dipakai ulang)

Didefinisikan di `@layer components` dalam `global.css`.

### Shell section

- `.apu-section-shell`
  - pembungkus section dasar dengan ambient radial glow.

### Primitive kartu

- `.apu-glass-card`
  - permukaan frosted, border, blur, radius, shadow.
- `.apu-interactive-card`
  - transisi hover/focus dan elevasi interaksi.

### Primitive badge + header

- `.apu-pill-badge`
  - badge pill membulat dengan token bg/border/text.
- `.apu-section-kicker`
  - label section mono uppercase / eyebrow.
- `.apu-gradient-line`
  - garis aksen dekoratif.

### Primitive CTA

- `.apu-btn`
  - basis tombol bersama (layout, transisi, focus-visible).
- `.apu-btn--primary`
  - permukaan CTA utama.
- `.apu-btn--secondary`
  - CTA sekunder bergaya glass.

### Primitive ikon

- `.apu-icon-chip`
  - chip gradien untuk ikon fitur/jalur.

---

## 4) Utilitas tipografi + layout

Tetap gunakan kelas skala tipe yang sudah ada:

- `.text-h1`, `.text-h2`, `.text-h3`
- `.text-body`, `.text-body-s`, `.text-caption`, `.text-mono`

Kontainer layout:

- `.content-max`

---

## 5) Pola terapan dari section yang sudah migrasi

### Hero (`HeroSectionAPU.astro`)

- Tombol CTA menggunakan:
  - `apu-btn apu-btn--primary`
  - `apu-btn apu-btn--secondary`
- Section menjaga override token lokal untuk mood navy/ivory/orange.

### Program (`ProgramsSectionAPU.astro`)

- Header section menggunakan:
  - `.apu-section-kicker`
  - `.apu-gradient-line`
- Kartu/slide program menggunakan `.apu-interactive-card` untuk konsistensi motion/focus.

### Jalur (`PathwaysSectionAPU.astro`)

- Wrapper section menggunakan `.apu-section-shell`
- Kartu utama menggunakan `.apu-glass-card.apu-interactive-card`
- Badge menggunakan `.apu-pill-badge`
- Ikon menggunakan `.apu-icon-chip`
- CTA menggunakan `apu-btn apu-btn--primary`

---

## 6) Aturan pengembangan ke depan

1. **Token-first**
   - jangan hardcode warna acak jika intensi bisa diekspresikan token.
2. **Primitive-first**
   - gunakan kelas `apu-*` sebelum membuat tumpukan utilitas one-off.
3. **Aksesibilitas tidak bisa ditawar**
   - pertahankan/perluas style `focus-visible`.
   - jaga kontras kuat untuk permukaan navy/aksen.
4. **Theming section lewat override token**
   - override variabel token di root section, bukan di banyak child node.
5. **Penamaan kelas minim fragmentasi**
   - kelas reusable baru wajib prefiks `apu-*`.
6. **Konsistensi motion**
   - durasi transisi sekitar 220–300ms untuk mikro-interaksi.
7. **Jangan merusak kontrak skrip perilaku yang ada**
   - refactor visual tidak boleh mengubah kontrak interaksi JS.

---

## 7) Arah Tailwind v4 (lanjutan)

Status saat ini: hybrid v4 (`@import "tailwindcss"` + `@config`).

Saat migrasi ke konfigurasi tema v4 murni:

- pindahkan otoritas token ke `@theme`
- pindahkan keyframes/token animasi ke lapisan tema CSS
- kurangi/hilangkan perluasan `tailwind.config.mjs`
- ganti ketergantungan safelist dinamis dengan peta utilitas eksplisit bila memungkinkan

Jaga file ini tetap terbarui setiap kali token/primitive berubah.

---

## 8) Komponen section reusable yang diekstrak dari `src/sections/*`

Pola ini sekarang bagian dari kontrak sistem desain dan wajib dipakai ulang lintas proyek.

### Komponen Astro yang sudah ada (prioritas pemakaian)

- `src/components/SectionHeader.astro`
  - props:
    - `kicker: string`
    - `title: string`
    - `description?: string`
    - `class?: string`
    - `titleClass?: string`
    - `descriptionClass?: string`
    - `dividerClass?: string`
  - tujuan: blok header section standar (kicker + judul + gradient line + lead copy opsional).

- `src/components/CtaButton.astro`
  - props:
    - `href: string`
    - `variant?: "primary" | "secondary" | "requirements"`
    - `target?: string`
    - `rel?: string`
    - `class?: string` (untuk penyesuaian ukuran/layout per section)
    - `withArrow?: boolean`
    - `arrowSize?: number`
  - tujuan: komponen anchor CTA reusable yang menjaga identitas warna tiap section melalui varian (jangan paksa navy global).

Aturan adopsi:

- gunakan komponen Astro ini sebelum menulis markup section berulang.
- hanya lewati jika section punya IA/interaksi yang jelas berbeda dan tidak bisa ditangani props/slots.

### A) Blok header section (standar)

Gunakan struktur header bersama di setiap section:

- kicker: `.apu-section-kicker`
- title: `.text-h2`
- divider: `.apu-gradient-line`
- lead copy: `.text-body` + warna muted

Struktur kanonik:

```html
<header class="text-center mb-16">
  <span class="apu-section-kicker mb-5">LABEL SECTION</span>
  <h2 class="text-h2 mb-4">
    Judul section
    <span class="apu-gradient-line mx-auto mt-4 w-216"></span>
  </h2>
  <p class="text-body text-brand-text-muted max-w-xl mx-auto leading-relaxed">
    Copy pendukung section.
  </p>
</header>
```

### B) Tumpukan kartu fitur/informasi

Dari section jalur + persyaratan + kartu program:

- shell dasar: `.apu-glass-card`
- interaksi: `.apu-interactive-card`
- aksen glow opsional: layer orb blur absolut
- ikon opsional: `.apu-icon-chip`
- chip status opsional: `.apu-pill-badge`

Aturan: untuk UI kartu/list yang berulang, default ke `.apu-glass-card.apu-interactive-card` sebelum membuat style one-off.

### C) Pola item baris kontak

Dari section kontak, reusable untuk item “ikon + label + value/link”.

- ikon kiri dalam chip lingkaran (tetap 48x48)
- konten kanan dengan caption (`.text-caption`) + value (`.text-body`)
- hover hanya pada teks value/link

Gunakan sebagai default untuk daftar kontak/meta (alamat, telepon, web, email, sosial).

### D) Pola CTA utama section

Semua CTA section dengan penekanan tinggi gunakan:

- `apu-btn apu-btn--primary`

Aksi sekunder:

- `apu-btn apu-btn--secondary`

Aturan: hindari styling tombol custom kecuali varian itu dipakai ulang di 3+ tempat.

### E) Pola motion + reveal

Gunakan `ScrollReveal.astro` sebagai wrapper animasi masuk default untuk blok section, kartu, dan CTA.

Panduan:

- tampilkan header lebih dulu
- lanjut item list/grid dengan delay progresif (`index * 100–150ms`)
- pertahankan transisi mikro-interaksi di rentang 220–300ms

### F) Item list interaktif dengan popover detail

Dari item beasiswa di section jalur:

- trigger row di dalam kartu
- popover detail hover/focus di desktop
- toggle klik/tap (`.is-active`) di mobile
- tutup saat klik area luar

Gunakan pola ini untuk kasus “ringkasan + detail mendalam” (beasiswa, detail persyaratan, tier benefit).

### G) Koleksi dual-mode responsif (grid desktop + carousel mobile)

Dari section program:

- desktop: grid visual padat, perilaku hover-expand
- mobile: carousel/swiper dengan navigasi dan dukungan keyboard

Aturan adopsi:

- pakai dependensi carousel eksternal hanya jika jumlah kartu + art direction memang perlu
- jika scroll horizontal sederhana cukup, utamakan overflow native dulu

### H) Shell ambient section

Wrapper section sebaiknya menggabungkan:

- `.apu-section-shell`
- kelas varian opsional `motion-aurora-shell` per section
- divider atas halus + dekorasi ambient radial/blur

Ini default untuk konsistensi nuansa premium/futuristik.

---

## 9) Checklist implementasi section baru (lintas proyek)

Sebelum merilis section/komponen baru:

1. Pakai ulang blok header section (8A)
2. Pakai ulang primitive kartu terlebih dahulu (8B)
3. Gunakan primitive CTA standar (8D)
4. Terapkan pola reveal/motion (8E)
5. Validasi state keyboard + focus-visible
6. Simpan override token hanya di root section
7. Jangan duplikasi pola SVG/UI inline jika primitive `apu-*` setara sudah ada

---

## 10) Integrasi bahasa desain APU (gabungan dari `design-language-apu.md`)

### Inti karakter desain

- Nada utama: aspiratif, informatif, menenangkan orang tua, menggerakkan siswa untuk aksi.
- Rasa visual: akademik modern, bersih, natural-hijau dengan aksen hangat.
- Gaya komunikasi: kalimat pendek, manfaat dulu, lalu langkah tindakan.

### Aturan voice & copy (wajib Bahasa Indonesia)

Pola diksi yang dipertahankan:
- Ajakan jelas: “Daftar Sekarang”, “Pilih jalur”, “Siapkan berkasmu”.
- Manfaat langsung: “potongan biaya”, “jalur yang sesuai potensi”, “tim admisi siap membantu”.
- Aspirasi masa depan: “masa depan”, “kampus impian”, “program unggulan”.

Template kalimat:
- **[Manfaat] + [Kejelasan langkah] + [Ajakan]**
- Contoh: “Pilih jalur yang sesuai potensimu, lengkapi berkas, lalu kirim pendaftaran online.”

Larangan copy:
- Jangan gunakan bahasa Inggris pada UI/copy publik.
- Jangan klaim bombastis tanpa konteks/verifikasi.
- Hindari kalimat panjang dengan lebih dari 2 klausa.

### Pola komponen konten (berdasarkan halaman referensi)

1. Hero admisi (judul besar + subjudul + CTA primer + CTA sekunder + petunjuk lanjut baca).
2. Navigasi informasi terstruktur (rencana daftar, kenal kampus, institusi & cerita, aksi cepat).
3. Blok jalur pendaftaran (Reguler/Beasiswa + ringkasan + syarat inti + tombol tindakan).
4. Timeline gelombang (Gelombang I/II/III: periode + benefit).
5. Checklist persyaratan bernomor (01–05) untuk menekan beban kognitif.
6. Kontak admisi cepat (WhatsApp, alamat, situs, email).

### Token visual referensi (untuk validasi konsistensi)

Font:
- `--font-sans: "Space Grotesk", system-ui, sans-serif`
- `--font-mono: "Space Mono", monospace`
- Font yang digunakan: Instrument Serif, Space Grotesk, Space Mono.

Warna basis referensi:
- `--color-apu-navy: 19 40 66`
- `--color-apu-accent: 252 188 85`
- `--color-semantic-surface: 247 250 243`
- `--color-semantic-surface-alt: 236 243 227`
- `--color-semantic-surface-soft: 222 234 210`
- `--color-semantic-primary: 43 122 74`
- `--color-semantic-primary-deep: 28 86 51`
- `--color-semantic-primary-deeper: 17 58 34`
- `--color-semantic-text: 27 41 32`
- `--color-semantic-text-muted: 87 112 94`
- `--color-semantic-border: 176 201 164`
- `--color-semantic-accent: 228 152 78`

Ritme visual:
- radius umum: 10px, 20px, 28px (plus varian `lg/xl/2xl/3xl`)
- border tipis 1px dominan dengan opacity untuk layering halus
- bayangan lembut-menengah untuk elevasi kartu/CTA
- spacing kelipatan 4px

### Pola interaksi

- Navigasi anchor ke section penting (`#program`, `#jalur-masuk`, `#kontak`) tetap didukung saat fase transisi.
- CTA primer ke pendaftaran, CTA sekunder ke info jalur.
- Status “Segera Hadir” untuk fitur/rute belum aktif wajib non-breaking.
- Menu mobile/drawer harus punya state buka/tutup yang jelas.

### Adaptasi audiens (siswa SMA + orang tua)

Urutan prioritas informasi atas-bawah:
1. Kejelasan jalur masuk.
2. Ringkasan biaya/potongan.
3. Checklist berkas.
4. Kontak manusia (bukan hanya formulir).

Nada bahasa:
- Untuk siswa: motivasional tapi konkret.
- Untuk orang tua: meyakinkan, transparan, minim jargon.

### Blueprint reusable ringkas

1. Hero admisi (judul + subjudul + 2 tombol)
2. Ringkasan jalur (Reguler / Beasiswa)
3. Timeline gelombang
4. Checklist berkas
5. FAQ mini
6. Blok kontak admisi
