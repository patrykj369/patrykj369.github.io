export interface PortfolioProject {
  id: string;
  title: string;
  translationKey: string;
  repoUrl: string;
  technologies: string[];
  images: {
    src: string;
    altKey: string;
    width: number;
    height: number;
  }[];
}

export const projects: PortfolioProject[] = [
  {
    id: "azure-terraform-docker-guestbook",
    title: "Azure Terraform Docker Guestbook",
    translationKey: "projects.featured",
    repoUrl: "https://github.com/patrykj369/azure-terraform-docker-guestbook",
    technologies: [
      ".NET 10 / ASP.NET Core",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "OpenID Connect",
      "Azure Container Registry",
      "Azure Container Apps",
      "Azure SQL",
      "Azure Key Vault",
      "Private Endpoint",
      "Private DNS",
      "Log Analytics",
      "Semgrep",
      "Trivy",
      "Checkov",
      "OWASP ZAP",
    ],
    images: [
      {
        src: "/projects/guestbook/azure-architecture-overview.webp",
        altKey: "projects.gallery.architecture",
        width: 1784,
        height: 986,
      },
      {
        src: "/projects/guestbook/github-actions-pipeline.webp",
        altKey: "projects.gallery.pipeline",
        width: 1696,
        height: 839,
      },
      {
        src: "/projects/guestbook/guestbook-application.webp",
        altKey: "projects.gallery.application",
        width: 1696,
        height: 839,
      },
      {
        src: "/projects/guestbook/terraform-guestbook-architecture.svg",
        altKey: "projects.gallery.terraform",
        width: 1536,
        height: 1024,
      },
    ],
  },
  {
    id: "azure-network-infrastructure-lab",
    title: "Azure Network Infrastructure Lab",
    translationKey: "projects.networkLab",
    repoUrl: "https://github.com/patrykj369/zis-azure-terraform",
    technologies: [
      "Microsoft Azure",
      "Terraform",
      "Azure Virtual Network",
      "Network Security Groups",
      "Windows Server",
      "Ubuntu Server",
      "Wazuh",
      "Git",
    ],
    images: [
      {
        src: "/projects/guestbook/network-lab/project-overview.webp",
        altKey: "projects.gallery.networkLabOverview",
        width: 1436,
        height: 1043,
      },
      {
        src: "/projects/guestbook/network-lab/apply-infra.webp",
        altKey: "projects.gallery.networkLabApplyInfra",
        width: 993,
        height: 529,
      },
    ],
  },
];
