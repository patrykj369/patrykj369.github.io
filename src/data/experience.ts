export interface ExperienceItem {
  id: string;
  company: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "lecturer",
    company: "WSB-NLU w Nowym Sączu",
    titleKey: "experience.items.lecturer.title",
    dateKey: "experience.items.lecturer.dates",
    descriptionKey: "experience.items.lecturer.description",
    tags: [
      "Generative AI",
      "Network Infrastructure",
      "Operating Systems",
      "Process Automation",
    ],
  },
  {
    id: "devops",
    company: "OPTIDATA Sp. z o.o.",
    titleKey: "experience.items.devops.title",
    dateKey: "experience.items.devops.dates",
    descriptionKey: "experience.items.devops.description",
    tags: [
      "Azure architecture",
      "Terraform",
      "CI/CD",
      "PowerShell / Bash",
      "Windows / Linux",
      "Monitoring",
      "Incident response",
      "Security",
    ],
  },
  {
    id: "implementation",
    company: "OPTIDATA Sp. z o.o.",
    titleKey: "experience.items.implementation.title",
    dateKey: "experience.items.implementation.dates",
    descriptionKey: "experience.items.implementation.description",
    tags: [
      "Software deployment",
      "Windows Server",
      "Networking",
      "Microsoft Azure",
      "SQL Server / T-SQL",
      "PowerShell",
      "UML / BPMN",
      "OWASP testing",
    ],
  },
];
