# Ekstraksi Bahasa Desain — APU (versi referensi lalu disempurnakan)

Sumber dianalisis dari `http://localhost:4322/apu` (struktur konten + token CSS yang terlihat di source).

## 1) Inti karakter desain

- **Nada utama**: aspiratif, informatif, menenangkan orang tua, menggerakkan siswa untuk aksi.
- **Rasa visual**: akademik modern, bersih, natural-hijau dengan aksen hangat.
- **Gaya komunikasi**: kalimat pendek, manfaat dulu, lalu langkah tindakan.

## 2) Pola voice & copy (wajib Bahasa Indonesia)

### Pola diksi yang dipertahankan
- Ajakan jelas: “Daftar Sekarang”, “Pilih jalur”, “Siapkan berkasmu”.
- Manfaat langsung: “potongan biaya”, “jalur yang sesuai potensi”, “tim admisi siap membantu”.
- Aspirasi masa depan: “masa depan”, “kampus impian”, “program unggulan”.

### Pola kalimat
- **Template**: [Manfaat] + [Kejelasan langkah] + [Ajakan].
- Contoh: “Pilih jalur yang sesuai potensimu, lengkapi berkas, lalu kirim pendaftaran online.”

### Larangan copy
- Jangan pakai bahasa Inggris di UI/copy.
- Jangan klaim bombastis tanpa konteks.
- Jangan kalimat panjang beranak lebih dari 2 klausa.

## 3) Sistem komponen dari halaman sumber

1. **Hero admisi**
   - Judul besar + subjudul + 1 CTA primer + 1 CTA sekunder.
   - Ada petunjuk lanjut baca (“gulir untuk lanjut”).

2. **Navigasi informasi terstruktur**
   - Pengelompokan menu: rencana daftar, kenal kampus, institusi & cerita, aksi cepat.

3. **Blok jalur pendaftaran**
   - Dua lane utama: reguler dan beasiswa.
   - Masing-masing lane berisi ringkasan + syarat inti + tombol tindakan.

4. **Timeline gelombang**
   - Urutan Gelombang I/II/III.
   - Tiap item: periode + benefit biaya.

5. **Checklist persyaratan**
   - Format bernomor (01–05) untuk menekan beban kognitif.

6. **Kontak admisi**
   - Kanal cepat: WhatsApp, alamat, situs, email.

## 4) Token visual yang terkonfirmasi dari source

## Font
- `--font-sans: "Space Grotesk", system-ui, sans-serif;`
- `--font-mono: "Space Mono", monospace;`
- Google Font yang dimuat: **Instrument Serif**, **Space Grotesk**, **Space Mono**.

## Warna basis (RGB mentah dari token)
- `--color-apu-navy: 19 40 66;`
- `--color-apu-accent: 252 188 85;`
- `--color-semantic-surface: 247 250 243;`
- `--color-semantic-surface-alt: 236 243 227;`
- `--color-semantic-surface-soft: 222 234 210;`
- `--color-semantic-primary: 43 122 74;`
- `--color-semantic-primary-deep: 28 86 51;`
- `--color-semantic-primary-deeper: 17 58 34;`
- `--color-semantic-text: 27 41 32;`
- `--color-semantic-text-muted: 87 112 94;`
- `--color-semantic-border: 176 201 164;`
- `--color-semantic-accent: 228 152 78;`

## Versi token siap pakai (disempurnakan, tetap sekeluarga)
- `--bg: oklch(98% 0.015 130);`
- `--surface: oklch(96% 0.018 130);`
- `--fg: oklch(27% 0.03 155);`
- `--muted: oklch(52% 0.02 155);`
- `--border: oklch(82% 0.03 135);`
- `--primary: oklch(52% 0.11 155);`
- `--primary-deep: oklch(38% 0.09 155);`
- `--navy: oklch(30% 0.06 255);`
- `--accent: oklch(80% 0.13 82);`

## Radius, border, bayangan, ritme
- Radius sering muncul di `10px`, `20px`, `28px`, plus `lg/xl/2xl/3xl`.
- Border tipis 1px dominan; opacity border dipakai untuk layering halus.
- Bayangan lembut-menengah (`0 10px 18px` sampai `0 24px 60px`) untuk elevasi kartu/CTA.
- Ritme spacing pakai kelipatan 4px (Tailwind `--spacing: 0.25rem`).

## 5) Pola interaksi

- Navigasi jangkar ke section (`#program`, `#jalur-masuk`, `#kontak`).
- CTA primer ke pendaftaran, CTA sekunder ke informasi jalur.
- Status “segera hadir” untuk fitur belum aktif.
- Drawer/menu mobile terindikasi dari state “tutup”.

## 6) Adaptasi audiens (siswa SMA + orang tua)

### Prioritas informasi urut atas-bawah
1. Kejelasan jalur masuk.
2. Ringkas biaya/potongan.
3. Persyaratan berkas dalam checklist.
4. Kontak manusia (bukan hanya formulir).

### Nada bahasa
- Untuk siswa: motivasional tapi konkret.
- Untuk orang tua: meyakinkan, transparan, minim jargon.

## 7) Blueprint reusable (ringkas)

1. Hero admisi (judul + subjudul + 2 tombol).
2. Ringkasan jalur (Reguler / Beasiswa).
3. Timeline gelombang.
4. Checklist berkas.
5. FAQ mini.
6. Blok kontak admisi.

Dokumen starter HTML: `starter-apu-admisi.html`.
