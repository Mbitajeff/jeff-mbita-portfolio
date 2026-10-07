import type { Metadata } from "next";
import { PT_Sans, DM_Sans } from "next/font/google";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { TrackerInit } from "@/components/ui/TrackerInit";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Jeff Mbita | AWS Cloud Solutions Architect",
  description:
    "Portfolio of Jeff Mbita, an AWS Cloud Solutions Architect based in Nairobi, Kenya. Specialising in cloud infrastructure, cloud security, containers and AI workloads on AWS.",
  keywords: [
    "AWS Cloud Solutions Architect",
    "Cloud Engineer",
    "Nairobi",
    "Terraform",
    "DevOps",
    "Cloud Security",
    "Kubernetes",
    "Amazon Bedrock",
    "EKS",
    "CI/CD",
  ],
  authors: [{ name: "Jeff Mbita" }],
  openGraph: {
    title: "Jeff Mbita | AWS Cloud Solutions Architect",
    description:
      "Portfolio of Jeff Mbita, an AWS Cloud Solutions Architect based in Nairobi, Kenya. Specialising in cloud infrastructure, cloud security and AI workloads on AWS.",
    type: "website",
    url: "https://jeffmbita.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        <FloatingOrbs />
        <ScrollProgress />
        <TrackerInit />
        {children}
      </body>
    </html>
  );
}
