export type SectionId =
  | "home"
  | "about"
  | "expertise"
  | "experience"
  | "credentials"
  | "projects"
  | "academic"
  | "contact";

export const navigation = [
  { id: "home", labelKey: "navigation.home" },
  { id: "about", labelKey: "navigation.about" },
  { id: "expertise", labelKey: "navigation.expertise" },
  { id: "experience", labelKey: "navigation.experience" },
  { id: "credentials", labelKey: "navigation.credentials" },
  { id: "projects", labelKey: "navigation.projects" },
  { id: "academic", labelKey: "navigation.academic" },
  { id: "contact", labelKey: "navigation.contact" },
] as const;
