export interface Scholarship {
  id: string;
  name: string;
  description: string;
  benefit: string;
  requirements: string[];
}

export const scholarships: Scholarship[] = [
  {
    id: 'akademik',
    name: 'Beasiswa Akademik',
    description:
      'Untuk siswa kelas 12 dan nilai rata-rata lebih dari 80',
    benefit: 'Potongan SPI sampai 50%',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Nilai rata-rata subjek tertentu (tergantung pilihan prodi) minimum 85',
      'Nilai rata rapor overall 80',
      'Fotokopi rapor X–XII yang dilegalisir',
      'Mengumpulkan form pendaftaran online',
    ],
  },
  {
    id: 'non-akademik',
    name: 'Beasiswa Non-Akademik',
    description:
      'Untuk atlet, seniman dan rohis dengan prestasi minimal tingkat kota',
    benefit: 'Potongan SPI sampai 100%',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Prestasi harus diperoleh dalam 3 tahun terakhir (untuk kategori non-akademik)',
      'Dokumen sertifikat/piagam prestasi asli',
      'Fotokopi rapor X–XII yang dilegalisir',
      'Mengumpulkan form pendaftaran online',
    ],
  },
  {
    id: 'content-creator',
    name: 'Beasiswa Content Creator',
    description:
      'Untuk kreator digital dengan followers ≥5,000',
    benefit: 'Potongan SPI & UKT',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Memiliki akun aktif dengan engagement autentik',
      'Minimum 10,000 followers (Instagram/TikTok/YouTube)',
      'Mengumpulkan data analisa sosial media jika diminta',
      'Fotokopi rapor X–XII yang dilegalisir',
      'Mengumpulkan form pendaftaran online',
    ],
  },
  {
    id: 'pre-university',
    name: 'Beasiswa Pre-University',
    description: 'Program persiapan masuk universitas dengan dukungan akademik awal',
    benefit: 'Potongan SPI sampai 50%',
    requirements: [
      'Siswa kelas 12 (SMA/SMK/Setara) atau lulus dalam 2 tahun terakhir.',
      'Mengikuti minimal 4 sesi kuliah Pre-University',
      'Partisipasi aktif dan disiplin waktu dalam program Pre-University',
      'Mengumpulkan form pendaftaran online',
    ],
  },
];
