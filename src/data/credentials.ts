export interface CredentialItem {
  id: string;
  name: string;
  provider?: string;
  url?: string;
}

export interface CourseCategory {
  id: string;
  titleKey: string;
  courses: CredentialItem[];
}

export const certifications: CredentialItem[] = [
  { id: "ccna", name: "Cisco Certified Network Associate (CCNA)" },
  {
    id: "mta-98-361",
    name: "MTA 98-361: Software Development Fundamentals",
    url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=129&cvid=aujJ/Lpu2aX4Az8ehOXreg==",
  },
  {
    id: "mta-98-364",
    name: "MTA 98-364: Database Fundamentals",
    url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=132&cvid=X1nlRBDLjtayF30NuOmZYA==",
  },
  {
    id: "mta-98-381",
    name: "MTA 98-381: Introduction to Programming Using Python",
    url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=iy+jbmdCVwrVfc9ijVnZPA==",
  },
  {
    id: "devops-engineer",
    name: "DevOps Engineer",
    provider: "strefakursow.pl",
    url: "https://platforma.strefakursow.pl/p/path/certificate/v8ia6y3bmwgo8wgocwskggg08sowg0/PL",
  },
];

export const courseCategories: CourseCategory[] = [
  {
    id: "cloud-devops-systems",
    titleKey: "credentials.courses.categories.cloudDevOpsSystems",
    courses: [
      {
        id: "az-104",
        name: "AZ-104: Azure Administrator, Network, Monitoring, DR",
        provider: "Udemy",
        url: "https://www.udemy.com/certificate/UC-044b039f-1692-4494-a023-98a41333240a/",
      },
      {
        id: "az-500",
        name: "AZ-500: Azure Security Engineer, Platform Security",
        provider: "Udemy",
        url: "https://www.udemy.com/certificate/UC-5111da7d-25a9-4228-a05f-b3c5d7f38d29/",
      },
      {
        id: "azure-devops-course",
        name: "Comprehensive Azure DevOps course for everyone",
        provider: "Udemy",
        url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-34174603-3fbf-40db-a9c3-878e15afec5c.pdf",
      },
      {
        id: "terraform-iac-azure",
        name: "DevOps Terraform, IaC on Azure",
        provider: "Udemy",
        url: "https://www.udemy.com/certificate/UC-953fee97-31d9-411d-8492-b7e6228bda3d/",
      },
      {
        id: "docker-advanced",
        name: "Docker course for advanced users",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/az2s1mxh40wg44og04wc4sckkw0808k/PL",
      },
      {
        id: "docker-beginners",
        name: "Docker for Beginners, Containerization Basics",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/73z0ys54tu884w0888kws8kc8sow4ss/PL",
      },
      {
        id: "deploying-applications",
        name: "Deploying applications to the server",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/qeiyipnul80scgcwgogo8k40000kksc/PL",
      },
      {
        id: "git-github-intro",
        name: "Introduction to Git and GitHub",
        provider: "Udemy",
        url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-128d6b64-3490-4f24-a7cc-26af70adf249.pdf",
      },
      {
        id: "linux-for-programmers",
        name: "Linux for programmers",
        provider: "strefakursow.pl",
        url: "https://platforma.strefakursow.pl/p/certificate/hash/ee6yfmeqcbsok0kok4s44sc0o8okwgo/PL",
      },
      {
        id: "azure-course-from-scratch",
        name: "Microsoft Azure Course from Scratch",
        provider: "strefakursow.pl",
        url: "https://platforma.strefakursow.pl/p/certificate/hash/jpoal2fpv9ws8k4wskg8go88k8o8gss/PL",
      },
      {
        id: "linux-networking-basics",
        name: "Networking Basics and Network Configuration in Linux",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/lu7c453f1nkgk4coc08gg8w0sskcwc8/PL",
      },
      {
        id: "bash-course",
        name: "Bash Course, Scripting and Automation",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/ttt13os483k0k8c0ow8ww8gks4cgg4c/PL",
      },
    ],
  },
  {
    id: "databases-analytics",
    titleKey: "credentials.courses.categories.databasesAnalytics",
    courses: [
      {
        id: "big-data-bigquery",
        name: "Big Data: Data analysis using SQL and BigQuery",
        provider: "Udemy",
        url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4db5705f-9903-4934-aecb-fab066a3c3bb.pdf",
      },
      {
        id: "intro-databases",
        name: "Introduction to databases",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/certificate/pdf/t0sfk6hee7ks0oogog8s04404ocwcc0",
      },
      {
        id: "power-bi-advanced",
        name: "Power BI course, advanced data analysis techniques",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/f6rcrjbx1m8s8040sk88gg8okgcw0ok",
      },
      {
        id: "power-bi-basics",
        name: "Power BI course, basics of data analysis and visualization",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/sro96vidlyosg0s4kc4g4o0ws0occo",
      },
      {
        id: "sql-practical",
        name: "SQL, Practical exercises",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/certificate/pdf/32wav0za60owgsswccogw8o4kk44wws",
      },
      {
        id: "sql-developer-certificate",
        name: "SQL Developer, specialist certificate",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/path/certificate/nd59xwi8szkw40wo04owkokwk8gckkw/pdf",
      },
      {
        id: "sql-foundations-exercises",
        name: "SQL foundations, exercises",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/certificate/pdf/kdju7ugo5ds4ws8wggokwgcc0wcwocs",
      },
      {
        id: "sql-foundations-level-1",
        name: "SQL foundations, level 1",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/certificate/pdf/o82p18tm2v408co8wks8s880cs8c40c",
      },
      {
        id: "sql-foundations-level-2",
        name: "SQL foundations, level 2",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/certificate/pdf/gg1r701c9lw04cs844s8ww8wswsk4ww",
      },
      {
        id: "sql-foundations-level-3",
        name: "SQL foundations, level 3",
        provider: "Codenga",
        url: "https://api.codenga.pl/api/v2/public/certificate/pdf/bb3g7nuunhss00gww84og8ckkkwoc0c",
      },
      {
        id: "tsql-basics",
        name: "T-SQL course in Microsoft SQL Server from basics",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/3wyj5i2eq8ys4c04kow4go8kkssskgs",
      },
    ],
  },
  {
    id: "process-automation",
    titleKey: "credentials.courses.categories.processAutomation",
    courses: [
      {
        id: "efficient-company-management",
        name: "Efficient company management, automation and optimization of tasks",
        provider: "strefakursow.pl",
        url: "https://api.strefakursow.pl/api/v2/public/certificate/pdf/56d8va0mlq4gc8kckgcgwco00oosss4/PL",
      },
      {
        id: "power-automate",
        name: "Power Automate, Business Process Automation",
        provider: "videopoint.pl",
        url: "https://helion.pl/users/dyplom?id=3ee64e8b88c427d4d16ad897c6306b38",
      },
    ],
  },
];
