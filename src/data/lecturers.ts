export interface Lecturer {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const lecturers: Lecturer[] = [
  {
    id: "marcus-chen",
    name: "Dr. Marcus Chen",
    role: "Profesor Hukum Konstitusi",
    image: "/images/lecturers/lecturer-01.webp",
  },
  {
    id: "sarah-williams",
    name: "Prof. Sarah Williams",
    role: "Wakil Dekan, Riset",
    image: "/images/lecturers/lecturer-02.webp",
  },
  {
    id: "david-lim",
    name: "Assoc. Prof. David Lim",
    role: "Direktur, Pusat Hukum Maritim",
    image: "/images/lecturers/lecturer-03.webp",
  },
  {
    id: "priya-sharma",
    name: "Dr. Priya Sharma",
    role: "Dosen Senior, Hukum Korporasi",
    image: "/images/lecturers/lecturer-04.webp",
  },
  {
    id: "james-ong",
    name: "Prof. James Ong",
    role: "Ketua, Program Keadilan Pidana",
    image: "/images/lecturers/lecturer-05.webp",
  },
  {
    id: "rebecca-foster",
    name: "Dr. Rebecca Foster",
    role: "Associate Professor, Hukum Internasional",
    image: "/images/lecturers/lecturer-06.webp",
  },
  {
    id: "ahmad-ibrahim",
    name: "Prof. Ahmad Ibrahim",
    role: "Kepala, Studi Hukum Islam",
    image: "/images/lecturers/lecturer-07.webp",
  },
  {
    id: "lisa-chang",
    name: "Dr. Lisa Chang",
    role: "Dosen, Hukum Kekayaan Intelektual",
    image: "/images/lecturers/lecturer-08.webp",
  },
];
