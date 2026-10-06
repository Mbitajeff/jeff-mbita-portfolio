import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "gca",
    title: "Data Analyst",
    company: "CCI Global HQ",
    period: "Dec 2025 to present",
    location: "Remote",
    bullets: [
      {
        text: "Analysed large company and decision-maker datasets against defined business criteria to identify and prioritise commercial opportunities, giving leadership a structured view of where to focus commercial effort.",
        skills: ["data"],
      },
      {
        text: "Built structured datasets from multiple information sources, validating records and removing inconsistencies to improve overall data quality and the reliability of downstream analysis.",
        skills: ["data"],
      },
      {
        text: "Reviewed RFP and tender requirements, flagged key obligations and information gaps, and drafted clarification questions to support structured, well-informed bid responses.",
        skills: ["data"],
      },
      {
        text: "Produced business case studies, opportunity analysis, reports and dashboards for leadership, translating complex data into clear, actionable recommendations.",
        skills: ["data"],
      },
      {
        text: "Troubleshot data pipeline issues and consolidated fragmented project information into reusable datasets and knowledge resources.",
        skills: ["data"],
      },
    ],
  },
  {
    id: "skyned",
    title: "Tech Support",
    company: "Skyned Consults Ltd.",
    period: "May 2025 to Aug 2025",
    location: "Nairobi",
    bullets: [
      {
        text: "Provided frontline technical support for telecom and fiber optic customers, serving as the first point of contact for connectivity and service issues.",
        skills: ["aws"],
      },
      {
        text: "Diagnosed and resolved connectivity and infrastructure issues through support tickets, ensuring timely resolution and clear communication with customers.",
        skills: ["aws"],
      },
      {
        text: "Configured and troubleshot VPNs and cloud access solutions, enabling customers secure access to the systems they needed.",
        skills: ["aws", "security"],
      },
      {
        text: "Supported system monitoring across customer services to maintain service reliability and minimise downtime.",
        skills: ["aws"],
      },
    ],
  },
  {
    id: "shinrai",
    title: "Cloud Engineer (Part-time)",
    company: "Shinrai Technologies",
    period: "Mar 2025 to Apr 2025",
    location: "Remote",
    bullets: [
      {
        text: "Architected a media streaming platform using Amazon S3, Rekognition, Translate and Transcribe — reducing manual content moderation effort by 90%, expanding multilingual audience reach by 45%, and automating transcription workflows.",
        skills: ["aws", "ml-ai"],
      },
      {
        text: "Built and maintained CI/CD pipelines with Terraform, CloudFormation and AWS CodePipeline, reducing deployment errors and improving release speed.",
        skills: ["aws", "terraform"],
      },
      {
        text: "Conducted AWS Well-Architected Reviews with enterprise clients, identifying security gaps, performance bottlenecks and cost inefficiencies — improving compliance by 30% and cutting monthly spend by up to 35%.",
        skills: ["aws", "security"],
      },
      {
        text: "Guided clients through cloud onboarding, access configuration and integrations, improving successful deployment rates by 35%.",
        skills: ["aws"],
      },
      {
        text: "Explained complex AWS concepts to non-technical clients, improving their confidence in and adoption of cloud solutions.",
        skills: ["aws"],
      },
    ],
  },
  {
    id: "em-tech",
    title: "DevOps/Cloud Engineer",
    company: "E&M Technology House Ltd",
    period: "Dec 2024 to Feb 2025",
    location: "Nairobi",
    bullets: [
      {
        text: "Provisioned and maintained AWS environments using Terraform, automating infrastructure setup and reducing manual effort by 40%.",
        skills: ["aws", "terraform"],
      },
      {
        text: "Cut total cost of ownership by 40% by rightsizing workloads, optimising storage tiers and introducing Reserved Instances; delivered tailored executive reports enabling further modernisation approvals.",
        skills: ["aws"],
      },
      {
        text: "Improved application scalability by 30% during cloud migrations by building architecture blueprints and running client workshops, achieving zero downtime cutovers for retail and healthcare clients with over 10K daily active users.",
        skills: ["aws", "containers"],
      },
      {
        text: "Implemented Docker and Kubernetes containerisation for consistent, repeatable deployments, following DevOps best practices.",
        skills: ["containers"],
      },
      {
        text: "Strengthened enterprise alignment by contributing to architecture boards, documenting integration patterns and applying TOGAF and SAFe frameworks to map solutions to enterprise strategy.",
        skills: ["aws"],
      },
    ],
  },
  {
    id: "freelance",
    title: "Cloud Engineer (Freelance)",
    company: "Independent Projects",
    period: "Jan 2024 to Dec 2024",
    location: "Remote",
    bullets: [
      {
        text: "Migrated Andy's Car Auction to AWS using auto-scaling EC2, S3, RDS and load balancing, enabling 24/7 online auctions and improving customer reach by 30%.",
        skills: ["aws"],
      },
      {
        text: "Integrated an ML-powered OCR pipeline for AcadeML on AWS SageMaker and Lambda, improving academic document processing by 25%.",
        skills: ["aws", "ml-ai"],
      },
      {
        text: "Built a real-time inventory management system for a small business, increasing stock tracking accuracy by 35%.",
        skills: ["aws"],
      },
      {
        text: "Built and debugged containerised MERN microservices on ECS and EKS, resolving networking, IAM and deployment issues across client environments.",
        skills: ["aws", "containers"],
      },
    ],
  },
  {
    id: "kenya-power",
    title: "Engineer Intern",
    company: "Kenya Power (E-plant Depot)",
    period: "Apr 2023 to Sep 2023",
    location: "Nairobi",
    bullets: [
      {
        text: "Assisted in routine maintenance and troubleshooting of electrical equipment, building hands-on depth in electrical and control engineering principles.",
        skills: [],
      },
      {
        text: "Tested and validated electrical systems and repaired transformers (tanking, tapping system troubleshooting and untanking), providing technical support to multiple departments.",
        skills: [],
      },
      {
        text: "Supported planning and execution of electrical projects including upgrades and new installations, gaining practical project coordination experience.",
        skills: [],
      },
    ],
  },
  {
    id: "cloudmytribe",
    title: "Social Media and Project Lead",
    company: "CloudmyTribe Cloud Community",
    period: "Jun 2024 to Aug 2024",
    location: "Nairobi",
    bullets: [
      {
        text: "Ran cloud workshops and created content helping the community learn AWS and DevOps concepts.",
        skills: ["aws"],
      },
      {
        text: "Mentored aspiring cloud engineers on AWS fundamentals, certification paths and hands-on project building.",
        skills: ["aws"],
      },
    ],
  },
];
