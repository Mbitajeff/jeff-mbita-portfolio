import { Reveal } from "@/components/ui/Reveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { SkillPills } from "@/components/ui/SkillPills";
import { AnimatedStepLine } from "@/components/ui/AnimatedStepLine";
import {
  Cloud, Shield, GitMerge, Container, Database, Bot,
  Server, Lock, BarChart2, Network,
} from "lucide-react";

const workAreas = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Designing scalable, cost-efficient AWS environments covering compute, networking, storage and high availability patterns.",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    desc: "IAM, KMS, GuardDuty, WAF and security-first design. Implementing least-privilege access and securing workloads at every layer.",
  },
  {
    icon: GitMerge,
    title: "CI/CD and DevOps",
    desc: "Building automated pipelines with CodePipeline, CodeBuild, Terraform and GitOps workflows that reduce deployment errors and accelerate delivery.",
  },
  {
    icon: Container,
    title: "Containers and Orchestration",
    desc: "Docker, Kubernetes, ECS and EKS. Containerising workloads for consistent, repeatable deployments across environments.",
  },
  {
    icon: Bot,
    title: "AI Workloads on AWS",
    desc: "Deploying and securing AI agents using Amazon Bedrock, AgentCore, SageMaker and Lambda. Agentic AI from PoC to production.",
  },
  {
    icon: BarChart2,
    title: "Data and Analytics",
    desc: "Turning infrastructure and business data into decision-ready insights. Pipeline troubleshooting, dashboards and structured reporting.",
  },
];

const skills = [
  "AWS EC2", "VPC", "IAM", "S3", "RDS", "Lambda",
  "ECS", "EKS", "Bedrock", "SageMaker",
  "Terraform", "CloudFormation", "Docker", "Kubernetes",
  "CodePipeline", "CloudWatch", "GuardDuty", "KMS",
  "Python", "Bash", "Linux", "Git",
];

const approachSteps = [
  { label: "Understand the problem" },
  { label: "Design the architecture" },
  { label: "Provision and configure" },
  { label: "Deploy and automate" },
  { label: "Secure and monitor" },
  { label: "Document and iterate" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <Reveal className="order-2 md:order-1">
            <div className="pf w-full aspect-square max-w-sm mx-auto rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jeff-mbita.png"
                alt="Jeff Mbita"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                <TypewriterText text="About me" speed={80} />
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-[family-name:var(--font-pt-sans)] font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
                A bit about<br />who I am
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                I am an AWS Cloud Solutions Architect based in Nairobi, Kenya. I started in Control Engineering, moved into cloud infrastructure, and have spent the last two years designing and building on AWS — covering compute, networking, containers, CI/CD, security and AI workloads.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                I hold the AWS Certified Solutions Architect Professional and the Kubernetes and Cloud Native Associate, and recently completed BeSA Cohort 10 on Agentic AI from PoC to Production on AWS. My current focus is on cloud architecture, cloud security, and deploying secure AI agents using Amazon Bedrock and AgentCore.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                In my current role I also apply data analysis and business intelligence skills, but cloud architecture is where I am headed and what I want to build my career around.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <div>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Stack and tools</p>
                <SkillPills skills={skills} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Cloud approach flow */}
        <div className="mb-20">
          <Reveal>
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              <TypewriterText text="How I approach cloud projects" speed={50} />
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-2xl text-zinc-900 dark:text-white mb-8">
              From problem to production
            </h3>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-0 relative">
            <AnimatedStepLine />
            {approachSteps.map((step, i) => (
              <Reveal key={step.label} delay={(i % 3 + 1) as 1 | 2 | 3} className="flex-1">
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0 relative pb-4 md:pb-0 md:pr-4">
                  <div className="flex items-center gap-0 md:mb-3 w-full">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < approachSteps.length - 1 && (
                      <div className="flex-1 h-0.5 bg-zinc-200 dark:bg-zinc-700 hidden md:block ml-2" aria-hidden="true" />
                    )}
                  </div>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 md:mt-3">{step.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What I work on */}
        <div>
          <Reveal>
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              <TypewriterText text="What I work on" speed={80} />
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {workAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <article className="card-h group bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800 hover:border-accent h-full">
                  <div className="w-11 h-11 flex items-center justify-center bg-blue-50 dark:bg-zinc-800 rounded-xl mb-5 group-hover:bg-accent/10 transition-colors glow-pulse">
                    <area.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h4 className="font-[family-name:var(--font-pt-sans)] font-bold text-base text-zinc-900 dark:text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{area.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
