export interface ExpertiseCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "cloud",
    titleKey: "expertise.cards.cloud.title",
    descriptionKey: "expertise.cards.cloud.description",
    technologies: [
      "Microsoft Azure",
      "Terraform",
      "Azure Virtual Network",
      "Network Security Groups",
      "Private Endpoints",
      "Private DNS",
      "Azure Key Vault",
      "Azure SQL",
      "Azure Container Apps",
      "Azure App Service",
    ],
  },
  {
    id: "cicd",
    titleKey: "expertise.cards.cicd.title",
    descriptionKey: "expertise.cards.cicd.description",
    technologies: [
      "GitHub Actions",
      "Azure DevOps",
      "GitLab CI/CD",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "AKS",
      "OpenID Connect",
      "GitOps principles",
    ],
  },
  {
    id: "ops",
    titleKey: "expertise.cards.ops.title",
    descriptionKey: "expertise.cards.ops.description",
    technologies: [
      "Windows Server",
      "Linux",
      "Active Directory",
      "IIS",
      "Nginx",
      "Apache",
      "Azure Monitor",
      "Application Insights",
      "Grafana",
      "Prometheus",
      "Backup",
      "Patching",
    ],
  },
  {
    id: "automation",
    titleKey: "expertise.cards.automation.title",
    descriptionKey: "expertise.cards.automation.description",
    technologies: [
      "PowerShell",
      "Bash",
      "Ansible",
      "Power Automate",
      "n8n",
      "Zapier",
      "Microsoft SQL Server",
      "T-SQL",
      "PostgreSQL",
      "Semgrep",
      "Trivy",
      "Checkov",
      "OWASP ZAP",
      "Wazuh",
    ],
  },
];
