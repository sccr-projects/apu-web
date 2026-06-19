import { lecturers, type Lecturer } from './lecturers';

export const featuredLecturerId = "marcus-chen";

export const featuredLecturer: Lecturer = (() => {
  const found = lecturers.find((l) => l.id === featuredLecturerId);
  if (!found) {
    throw new Error(`Featured lecturer "${featuredLecturerId}" not found in lecturers.ts`);
  }
  return found;
})();

export interface LecturersSectionCopy {
  meta: {
    title: string;
    description: string;
  };
  featured: {
    kicker: string;
    department: string;
    pastExperience: {
      label: string;
      items: string[];
    };
    notableResearch: {
      label: string;
      text: string;
    };
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  directory: {
    kicker: string;
    title: string;
    description: string;
    viewProfileLabel: string;
  };
}

export const sectionCopy: LecturersSectionCopy = {
  meta: {
    title: "Lecturers | Agung Putra University",
    description:
      "Meet the internationally qualified faculty and researchers at Agung Putra University.",
  },
  featured: {
    kicker: "Featured Researcher",
    department: "Department of Constitutional Law",
    pastExperience: {
      label: "Past Experience",
      items: [
        "Ph.D. in Constitutional Law, University of Melbourne",
        "Visiting Scholar, Max Planck Institute",
        "Senior Legal Advisor, ASEAN Secretariat",
      ],
    },
    notableResearch: {
      label: "Notable Research",
      text: "Leading comparative research on constitutional reform and human-rights frameworks in Southeast Asia, with published work on judicial independence and democratic transitions.",
    },
    ctas: {
      primary: { label: "View Full Portfolio", href: "#" },
      secondary: { label: "Contact Office", href: "#" },
    },
  },
  directory: {
    kicker: "Faculty Directory",
    title: "Faculty Directory",
    description:
      "Browse our world-class team of educators and researchers guiding the next generation.",
    viewProfileLabel: "View Profile",
  },
};
