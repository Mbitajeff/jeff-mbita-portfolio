import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "securing-agentic-ai-aws",
    title: "Securing Agentic AI on AWS",
    shortDescription:
      "Identity, tool access and trust boundaries for AI agents using Amazon Bedrock AgentCore, OAuth 2.0 and MCP.",
    categories: ["ai-on-aws", "cloud-devops"],
    featured: true,
    stack: ["Amazon Bedrock", "AgentCore", "OAuth 2.0", "MCP", "AWS IAM", "Lambda"],
    problem:
      "AI agents acting on behalf of users need fine-grained identity and authorization controls. Without them, agents can over-reach their permissions, creating serious security risks.",
    myRole:
      "Designed and documented the security architecture covering agent identity, tool access controls, trust boundaries and authorization patterns using Amazon Bedrock AgentCore.",
    keyDecisions: [
      "Used OAuth 2.0 for delegated authorization between agents and tools",
      "Applied MCP (Model Context Protocol) to define explicit tool boundaries",
      "Leveraged Amazon Bedrock AgentCore for managed agent identity",
      "Designed fine-grained IAM policies scoped to each agent action",
    ],
    outcome:
      "Published a detailed technical write-up on designing secure agentic AI systems on AWS, covering identity, authentication, MCP, OAuth 2.0 and trust boundaries.",
    links: {
      code: "https://github.com/Mbitajeff/aws-agentic-ai-production",
      article:
        "https://medium.com/@jeffmbita69/securing-agentic-ai-on-aws-designing-identity-tool-access-and-trust-boundaries-7440b0dd94ee",
    },
    hasDiagram: true,
  },
  {
    slug: "ai-agent-stack-eks",
    title: "AI Agent Stack on Amazon EKS",
    shortDescription:
      "The same customer service agent built three ways: self-managed, integrated, and fully managed on Amazon EKS.",
    categories: ["ai-on-aws", "cloud-devops"],
    featured: true,
    stack: ["Amazon EKS", "Kubernetes", "Amazon Bedrock", "Strands Agents", "Helm", "Docker"],
    problem:
      "Teams choosing where to run AI agents face a confusing landscape of deployment options. Comparing approaches with the same workload makes the tradeoffs concrete.",
    myRole:
      "Built and compared all three deployment patterns for an AI agent on Amazon EKS, documenting the architectural differences and operational tradeoffs.",
    keyDecisions: [
      "Used the same agent workload across all three approaches to isolate deployment differences",
      "Self-managed: full control, more ops overhead",
      "Integrated: balance of control and managed features",
      "Fully managed: lowest ops overhead, least flexibility",
    ],
    outcome:
      "Published a technical comparison article to help teams choose the right AI agent deployment model on Amazon EKS.",
    links: {
      article:
        "https://medium.com/@jeffmbita69/self-managed-integrated-or-fully-managed-choosing-your-ai-agent-stack-on-amazon-eks-0efcd38cfa39",
    },
    hasDiagram: true,
  },
  {
    slug: "braid",
    title: "Braid: Fair Mentorship Pairing Engine",
    shortDescription:
      "Team project building a fair mentorship matching platform. Received an Honorable Mention at Mentor Me Collective x Grow with Google 2026.",
    categories: ["fullstack", "cloud-devops"],
    featured: true,
    stack: ["TypeScript", "Next.js", "AWS", "OAuth 2.0", "RBAC"],
    problem:
      "Mentorship matching is often biased or opaque. Braid aimed to build a pairing engine that is fair, transparent and privacy-respecting.",
    myRole:
      "Owned cybersecurity, access control and privacy for the team of four. Designed authentication, authorization and data privacy controls.",
    keyDecisions: [
      "Implemented role-based access control to separate mentor and mentee permissions",
      "Applied OAuth 2.0 for secure authentication",
      "Designed privacy controls to limit data exposure between unmatched users",
    ],
    outcome:
      "Received an Honorable Mention for exceptional technical ambition and advanced system design at the Mentor Me Collective x Grow with Google 2026 showcase.",
    links: {
      code: "https://github.com/Mbitajeff/Braid",
    },
    hasDiagram: true,
  },
  {
    slug: "andys-car-auction-migration",
    title: "Andy's Car Auction: AWS Migration",
    shortDescription:
      "Moved on-premises weekly auction operations to AWS for 24/7 online access and operational continuity.",
    categories: ["cloud-devops"],
    featured: false,
    stack: ["EC2 Auto Scaling", "Application Load Balancer", "RDS", "S3", "VPC", "IAM", "CloudWatch", "Terraform"],
    problem:
      "Andy's Car Auction ran on-premises, limiting access to physical auction days only. The business needed 24/7 online access and resilience.",
    myRole:
      "End-to-end AWS migration covering infrastructure design, provisioning, security and monitoring.",
    keyDecisions: [
      "Auto Scaling EC2 to handle variable auction traffic",
      "RDS for auction data with automated backups",
      "S3 for vehicle images and static assets",
      "VPC with public and private subnets for security isolation",
    ],
    outcome: "Enabled 24/7 online auction access. Reported customer reach up 30%.",
    links: {
      article: "TODO: add article URL",
    },
    hasDiagram: true,
  },
  {
    slug: "well-architected-microservices-cicd",
    title: "Well-Architected Microservices with CI/CD",
    shortDescription:
      "Microservices application on AWS ECS with a full CI/CD pipeline using CodePipeline and CodeBuild. Presented at AWS Cloud Club Strathmore.",
    categories: ["cloud-devops"],
    featured: false,
    stack: ["ECS", "Elastic Beanstalk", "CodePipeline", "CodeBuild", "Terraform", "Docker", "Python", "S3", "RDS", "ELB"],
    problem:
      "Demonstrating AWS Well-Architected principles through a real microservices deployment with automated CI/CD.",
    myRole:
      "Designed and deployed the full stack: containerized microservices, load balancer, database, IaC with Terraform, and the complete CI/CD pipeline.",
    keyDecisions: [
      "ECS for container orchestration without managing Kubernetes",
      "CodePipeline and CodeBuild for native AWS CI/CD",
      "Terraform for reproducible infrastructure",
      "Elastic Load Balancer for high availability",
    ],
    outcome: "Presented to the AWS Cloud Club at Strathmore University.",
    links: {
      code: "https://github.com/Mbitajeff/Building-Microservices-and-a-CI-CD-Pipeline-with-AWS",
      article:
        "https://medium.com/@jeffmbita69/building-a-well-architected-microservices-application-and-a-ci-cd-pipeline-with-aws-services-5912fc4f8268",
    },
    hasDiagram: true,
  },
  {
    slug: "classroom-infrastructure-migration",
    title: "Classroom Infrastructure Migration",
    shortDescription:
      "University CS department migrated to AWS with secure access controls, encryption and auto-scaling.",
    categories: ["cloud-devops"],
    featured: false,
    stack: ["EC2", "VPC", "KMS", "IAM", "Terraform", "CloudWatch"],
    problem:
      "A university CS department needed to move from on-premises infrastructure to cloud with strong security controls for student and faculty access.",
    myRole:
      "Designed and provisioned the AWS environment with encryption, access controls and monitoring.",
    keyDecisions: [
      "KMS for encryption of data at rest",
      "IAM roles scoped to department groups",
      "Auto Scaling for variable class schedules",
      "CloudWatch for visibility into resource usage",
    ],
    outcome: "Secure, scalable cloud environment delivered for the CS department.",
    links: {},
    hasDiagram: true,
  },
  {
    slug: "containerized-retail-ecs",
    title: "Containerized Retail App on Amazon ECS",
    shortDescription:
      "Containerized retail application deployed to Amazon ECS Managed Instances.",
    categories: ["cloud-devops", "fullstack"],
    featured: false,
    stack: ["Amazon ECS", "Docker", "EC2", "ALB", "ECR"],
    problem:
      "Deploying a containerized retail application reliably on AWS with managed compute.",
    myRole:
      "Provisioned ECS cluster, task definitions, ECR repository and load balancer configuration.",
    keyDecisions: [
      "ECS Managed Instances for simplified container orchestration",
      "ECR for private container image storage",
      "ALB for routing across container instances",
    ],
    outcome: "Working containerized retail app deployed and documented.",
    links: {
      article:
        "https://medium.com/@jeffmbita69/deploying-a-containerized-retail-application-with-amazon-ecs-managed-instances-78cb40b73e5f",
    },
    hasDiagram: true,
  },
  {
    slug: "terraform-30-day-challenge",
    title: "Terraform 30-Day Challenge",
    shortDescription:
      "Series covering Terraform from fundamentals to advanced patterns: remote state, workspaces, modules, loops, conditionals and zero-downtime deployments.",
    categories: ["cloud-devops"],
    featured: false,
    stack: ["Terraform", "AWS", "S3", "DynamoDB", "EC2"],
    problem:
      "Building and documenting a structured progression through Terraform concepts with working examples.",
    myRole:
      "Wrote all Terraform configurations and published a series of technical articles documenting each topic.",
    keyDecisions: [
      "S3 and DynamoDB for remote state and locking",
      "Workspaces vs file layouts for environment isolation",
      "Reusable modules with versioning",
      "Zero-downtime deploy patterns",
    ],
    outcome:
      "Published 7+ Medium articles covering the full Terraform progression, with a public GitHub repository of all configurations.",
    links: {
      code: "https://github.com/Mbitajeff/Terraform",
      article: "https://medium.com/@jeffmbita69",
    },
    hasDiagram: true,
  },
  {
    slug: "academl-ocr-pipeline",
    title: "AcadeML: ML OCR Pipeline",
    shortDescription:
      "AI/ML OCR pipeline on AWS SageMaker and Lambda for academic document processing.",
    categories: ["ai-on-aws"],
    featured: false,
    stack: ["AWS SageMaker", "Lambda", "S3", "Python"],
    problem:
      "AcadeML needed to process large volumes of academic documents with optical character recognition at scale.",
    myRole:
      "Deployed and troubleshot the AI/ML OCR pipeline on SageMaker and Lambda.",
    keyDecisions: [
      "SageMaker for scalable ML inference",
      "Lambda for event-driven document processing",
      "S3 triggers for automatic pipeline invocation",
    ],
    outcome: "Document throughput improved by 60%.",
    links: {},
    hasDiagram: false,
  },
  {
    slug: "afyasmart-health-app",
    title: "AfyaSmart Health App",
    shortDescription:
      "Clinic follow-up reminder system with a CI/CD pipeline on AWS.",
    categories: ["cloud-devops", "fullstack"],
    featured: false,
    stack: ["AWS", "CodePipeline", "Lambda", "Amazon PartyRock", "SageMaker"],
    problem:
      "Patients in underserved communities miss clinic follow-ups due to lack of reminders.",
    myRole:
      "Owned deployment, monitoring and issue resolution for the health app and its CI/CD pipeline.",
    keyDecisions: [
      "Amazon PartyRock for wellness tips and medication reminders",
      "CI/CD pipeline for reliable deployments",
      "CloudWatch for monitoring and alerting",
    ],
    outcome: "Working clinic reminder system deployed on AWS with automated pipeline.",
    links: {
      code: "https://github.com/Mbitajeff/afya-sawa-alerts",
    },
    hasDiagram: false,
  },
  {
    slug: "coffee-suppliers-app",
    title: "Coffee Suppliers App",
    shortDescription:
      "Full-stack MERN application deployed on AWS with containerized microservices.",
    categories: ["fullstack", "cloud-devops"],
    featured: false,
    stack: ["MongoDB", "Express", "React", "Node.js", "Docker", "AWS ECS", "EKS"],
    problem:
      "Building and deploying a containerized full-stack MERN application to AWS.",
    myRole:
      "Built the full-stack application and deployed containerized microservices on ECS/EKS.",
    keyDecisions: [
      "Microservices architecture for independent scaling",
      "Docker for consistent deployments",
      "ECS/EKS for container orchestration",
    ],
    outcome: "Full-stack MERN app running on AWS with containerized microservices.",
    links: {
      code: "https://github.com/Mbitajeff/node-coffee-suppliers-app",
    },
    hasDiagram: true,
  },
  {
    slug: "aws-automation-python-boto3",
    title: "AWS Automation with Python and Boto3",
    shortDescription:
      "Python scripts for automating EC2 and S3 operations using Boto3.",
    categories: ["cloud-devops"],
    featured: false,
    stack: ["Python", "Boto3", "AWS EC2", "AWS S3"],
    problem:
      "Repetitive AWS operations on EC2 and S3 benefit from automation to reduce manual effort and errors.",
    myRole: "Wrote and documented Python Boto3 scripts for EC2 and S3 automation.",
    keyDecisions: [
      "Boto3 for native AWS SDK access from Python",
      "Scripts parameterized for reuse across environments",
    ],
    outcome: "Working automation scripts for common EC2 and S3 tasks.",
    links: {
      code: "https://github.com/Mbitajeff/AWS-Automation-with-Python-EC2-S3-and-Boto3-Scripts",
    },
    hasDiagram: true,
  },
  {
    slug: "covid-tracker",
    title: "COVID-19 Global Tracker",
    shortDescription:
      "Data analysis and visualization of global COVID-19 trends using Python.",
    categories: ["data"],
    featured: false,
    stack: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    problem:
      "Visualizing global COVID-19 trends from Our World in Data to understand the spread and impact.",
    myRole: "Data analysis and visualization using Pandas and Matplotlib in Jupyter Notebook.",
    keyDecisions: [
      "Our World in Data as a reliable public dataset",
      "Matplotlib for clear trend visualization",
    ],
    outcome: "Interactive notebook with global COVID-19 trend analysis and charts.",
    links: {
      code: "https://github.com/Mbitajeff/Covid_Tracker_Project",
    },
    hasDiagram: true,
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    shortDescription:
      "MySQL database design for a library system covering authors, publishers, categories, books, members and loans.",
    categories: ["data"],
    featured: false,
    stack: ["MySQL", "SQL"],
    problem:
      "Designing a relational database schema for a library system with multiple entity relationships.",
    myRole: "Designed and implemented the full database schema.",
    keyDecisions: [
      "Normalized schema to third normal form",
      "Foreign key constraints for referential integrity",
      "Loan tracking with member and book relationships",
    ],
    outcome: "Complete relational database schema for library management.",
    links: {
      code: "https://github.com/Mbitajeff/Library-Management-System",
    },
    hasDiagram: true,
  },
];
