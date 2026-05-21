export interface Requirement {
  number: string;
  title: string;
  description: string;
}

export const requirements: Requirement[] = [
  {
    number: '01',
    title: 'Lulusan SMA/SMK/MA',
    description: 'Lulusan tahun 2026 atau sebelumnya dari jenjang SMA, SMK, atau MA',
  },
  {
    number: '02',
    title: 'Sehat Jasmani & Rohani',
    description: 'Surat keterangan sehat dari dokter atau puskesmas',
  },
  {
    number: '03',
    title: 'Kartu Tanda Penduduk',
    description: 'Kartu Tanda Penduduk yang masih berlaku',
  },
  {
    number: '04',
    title: 'Kartu Keluarga',
    description: 'Kartu Keluarga sebagai bukti domisili',
  },
  {
    number: '05',
    title: 'Ijazah/SKL',
    description: 'Ijazah atau Surat Keterangan Lulus sementara',
  },
];
