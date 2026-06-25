import type { ImageMetadata } from "astro";
import biomedicalHeroImg from "@/assets/images/academic/biomedical.webp";
import biotechnologyHeroImg from "@/assets/images/academic/biotechnology.webp";
import communicationHeroImg from "@/assets/images/academic/communication.png";
import lawHeroImg from "@/assets/images/academic/law.png";
import managementHeroImg from "@/assets/images/academic/management.webp";
import midwiferyAssociateHeroImg from "@/assets/images/academic/midwifery-associate.png";
import midwiferyBachelorHeroImg from "@/assets/images/academic/midwifery-bachelor.png";

export type ProgramHeroSlug =
  | "biomedical-science"
  | "biotechnology"
  | "communication"
  | "law"
  | "management"
  | "midwifery-associate"
  | "midwifery-bachelor";

export interface ProgramHeroData {
  image: ImageMetadata;
  imageAlt: string;
  subtitle: string;
  headline: string;
  program: ProgramHeroSlug;
}

export const biomedicalHero: ProgramHeroData = {
  image: biomedicalHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "A bright, future-ready university ecosystem connecting strong academics, applied research, and real industry pathways — designed for ambitious learners.",
  headline: "BIOMEDICAL SCIENCE",
  program: "biomedical-science",
};

export const biotechnologyHero: ProgramHeroData = {
  image: biotechnologyHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "Explore the future of biotechnology through modern laboratory science, genetic innovation, bioinformatics, and applied research for health, food, industry, and the environment.",
  headline: "BIOTECHNOLOGY",
  program: "biotechnology",
};

export const communicationHero: ProgramHeroData = {
  image: communicationHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "A future-ready Communication Science program that equips students with strong skills in media, public relations, digital communication, journalism, branding, and creative content — designed for ambitious learners ready to shape the future of communication",
  headline: "COMMUNICATION SCIENCE",
  program: "communication",
};

export const lawHero: ProgramHeroData = {
  image: lawHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "A future-ready Law program that prepares students with strong foundations in legal knowledge, critical thinking, advocacy, ethics, and legal practice — designed for ambitious learners ready to contribute to justice, governance, business, and society.",
  headline: "LAW",
  program: "law",
};

export const managementHero: ProgramHeroData = {
  image: managementHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "A future-ready management program that develops strategic thinking, leadership, entrepreneurship, and decision-making skills — preparing students to thrive in today’s dynamic business world.",
  headline: "MANAGEMENT",
  program: "management",
};

export const midwiferyAssociateHero: ProgramHeroData = {
  image: midwiferyAssociateHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "A future-ready Midwifery Associate program that equips students with knowledge and practical skills in maternal care, childbirth, reproductive health, newborn care, clinical practice, and community health — preparing graduates to become professional and compassionate midwives.",
  headline: "MIDWIFERY ASSOCIATE",
  program: "midwifery-associate",
};

export const midwiferyBachelorHero: ProgramHeroData = {
  image: midwiferyBachelorHeroImg,
  imageAlt: "Futuristic Campus of Agung Putra University",
  subtitle:
    "A future-ready Midwifery Bachelor program that equips students with knowledge and practical skills in maternal care, childbirth, reproductive health, newborn care, clinical practice, and community health — preparing graduates to become professional and compassionate midwives.",
  headline: "MIDWIFERY BACHELORS",
  program: "midwifery-bachelor",
};
