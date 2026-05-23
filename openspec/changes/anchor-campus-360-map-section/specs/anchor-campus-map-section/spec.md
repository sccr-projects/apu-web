## ADDED Requirements

### Requirement: Section menampilkan layout Anchor Campus dua kolom
Sistem SHALL menampilkan section ekosistem baru dengan layout visual map di sisi kiri dan panel narasi di sisi kanan pada viewport desktop, serta susunan responsif yang tetap menjaga prioritas informasi pada viewport kecil.

#### Scenario: Layout desktop menampilkan map dan narasi berdampingan
- **WHEN** section dirender pada viewport desktop
- **THEN** area map tampil sebagai panel utama sisi kiri dan panel narasi tampil stabil di sisi kanan

#### Scenario: Layout mobile tetap menjaga urutan informasi
- **WHEN** section dirender pada viewport mobile
- **THEN** konten tetap terbaca jelas dengan urutan yang mempertahankan konteks map dan narasi tanpa tumpang tindih

### Requirement: Lapisan map berputar 360 ultra-lambat dengan pusat pada pin kampus
Sistem SHALL menganimasikan lapisan map dengan rotasi penuh 360 derajat secara kontinu dan sangat lambat menggunakan timing linear, dengan titik pusat rotasi yang disejajarkan ke koordinat pin kampus APU.

#### Scenario: Rotasi map berjalan kontinu dan halus
- **WHEN** section aktif dalam kondisi motion normal
- **THEN** lapisan map berputar penuh 360 derajat secara kontinu dengan kecepatan ultra-lambat tanpa jeda mencolok

#### Scenario: Pusat rotasi mengikuti koordinat pin
- **WHEN** animasi rotasi dijalankan
- **THEN** pusat rotasi berada pada koordinat pin kampus sehingga area sekitar pin menjadi referensi visual utama

### Requirement: Pin kampus tetap sebagai anchor visual
Sistem SHALL menampilkan pin kampus sebagai lapisan overlay terpisah dari lapisan map berputar agar pin tidak ikut berotasi dan tetap menjadi titik anchor visual.

#### Scenario: Pin tidak ikut berputar
- **WHEN** lapisan map sedang berotasi
- **THEN** pin kampus tetap stabil di posisi overlay yang sama terhadap frame

#### Scenario: Pin tetap terbaca di atas map
- **WHEN** elemen map dan overlay dirender bersamaan
- **THEN** pin kampus memiliki prioritas layer visual yang cukup untuk tetap jelas terlihat

### Requirement: Aksesibilitas motion dihormati
Sistem SHALL menonaktifkan animasi rotasi kontinu ketika preferensi pengguna `prefers-reduced-motion: reduce` terdeteksi.

#### Scenario: Reduced motion mematikan rotasi
- **WHEN** pengguna mengaktifkan preferensi reduced motion pada sistem
- **THEN** lapisan map ditampilkan tanpa rotasi kontinu

### Requirement: Narasi kanan tetap terbaca selama animasi
Sistem SHALL menjaga kontras dan kestabilan panel narasi agar tetap mudah dibaca selama map berotasi, termasuk pada kondisi tema/permukaan section yang berlaku.

#### Scenario: Teks tidak terganggu motion utama
- **WHEN** animasi map berjalan dalam mode normal
- **THEN** panel narasi kanan tetap statis dan keterbacaan heading serta body copy tetap terjaga
