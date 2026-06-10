export interface LeadershipMessage {
  kicker: string;
  title: string;
  quote: string[];
  leaderName: string;
  leaderTitle: string;
  leaderImage: string;
  cta: {
    href: string;
    label: string;
  };
}

export const leadershipMessage: LeadershipMessage = {
  kicker: "PESAN DARI PEMIMPIN",
  title: "Membangun Masa Depan Bersama",
  quote: [
    "Selamat datang di Agung Putra University. Kami hadir dengan komitmen kuat untuk mencetak generasi unggul yang siap menghadapi tantangan dunia dengan kecerdasan, integritas, dan semangat kolaborasi.",
    "APU bukan sekadar kampus. Ini adalah ekosistem pembelajaran futuristik di mana setiap mahasiswa diberdayakan untuk menemukan potensi terbaiknya, didukung oleh kurikulum inovatif dan lingkungan yang inspiratif.",
    "Bergabunglah dengan kami, dan bersama-sama kita wujudkan impian besar untuk Indonesia yang lebih baik."
  ],
  leaderName: "Prof. Dr. Agung Putra, M.Si.",
  leaderTitle: "Founder and Commisoner PT. SCCR",
  leaderImage: "/images/leadership-portrait.webp",
  cta: {
    href: "/about-apu",
    label: "Kenali Visi Kampus",
  },
};
