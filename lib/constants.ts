import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Figma,
  FileBadge,
  Flame,
  Github,
  Globe2,
  GraduationCap,
  Hammer,
  Laptop,
  Mail,
  Medal,
  Phone,
  Smartphone,
  Trophy,
  Workflow,
  Zap
} from "lucide-react";
import type { ComponentType } from "react";
import { IconType } from "react-icons";
import {
  SiAndroidstudio,
  SiDart,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGeeksforgeeks,
  SiGithub,
  SiGit,
  SiHtml5,
  SiLeetcode,
  SiMongodb,
  SiPython,
  SiReact,
  SiSupabase
} from "react-icons/si";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export const roles = ["Flutter Apps", "Full Stack Systems", "AI-Powered Tools", "Scalable Products"];

export const socials = [
  { label: "GitHub", href: "https://github.com/AbdulFahad31", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdul-fahad-m/", icon: Globe2 },
  { label: "LeetCode", href: "https://leetcode.com/u/abdul_fahad/", icon: Code2 },
  { label: "Email", href: "mailto:abdulfahad676@gmail.com", icon: Mail }
];

export const contactLinks = [
  ...socials,
  { label: "Phone", href: "tel:+917539934156", icon: Phone }
];

export const stats = [
  { value: 750, suffix: "+", label: "Problems", sublabel: "Solved" },
  { value: 4, suffix: "+", label: "Projects", sublabel: "Built" },
  { value: 1, suffix: "", label: "Copyright", sublabel: "Registered" }
];

export type SkillIcon = IconType | ComponentType<{ className?: string }>;

export type Project = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  badge?: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  featured?: boolean;
};

export const skillCategories: Array<{
  title: string;
  skills: Array<{ label: string; icon: SkillIcon }>;
}> = [
  {
    title: "Languages",
    skills: [
      { label: "Java", icon: Code2 },
      { label: "Dart", icon: SiDart },
      { label: "Python", icon: SiPython },
      { label: "C", icon: Cpu },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: Code2 }
    ]
  },
  {
    title: "App Development",
    skills: [
      { label: "Flutter", icon: SiFlutter },
      { label: "React", icon: SiReact },
      { label: "REST APIs", icon: Globe2 },
      { label: "Responsive UI", icon: Smartphone },
      { label: "Firebase FCM", icon: SiFirebase },
      { label: "LLM Apps", icon: BrainCircuit }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { label: "FastAPI", icon: SiFastapi },
      { label: "Firebase", icon: SiFirebase },
      { label: "Firestore", icon: Database },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Supabase", icon: SiSupabase },
      { label: "DBMS", icon: Database }
    ]
  },
  {
    title: "Tools & Concepts",
    skills: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "VS Code", icon: Code2 },
      { label: "Android Studio", icon: SiAndroidstudio },
      { label: "Figma", icon: Figma },
      { label: "DSA", icon: BrainCircuit },
      { label: "OOP", icon: Code2 },
      { label: "OS", icon: Laptop },
      { label: "Agile/Scrum", icon: Hammer },
      { label: "CrewAI", icon: Workflow }
    ]
  }
];

export const projects: Project[] = [
  {
    name: "AmpTrail",
    icon: Zap,
    badge: "Govt. Copyright Registered",
    tagline: "Real-time EV charging slot booking built for the future of mobility",
    description:
      "A production-grade mobile platform for booking EV charging slots in real-time. Features secure auth, role-based access, live slot tracking, and a clean booking management system.",
    features: [
      "Real-time slot availability",
      "Secure authentication",
      "Role-based access",
      "Booking management",
      "Firebase backend"
    ],
    stack: ["Flutter", "Firebase", "Firestore"],
    github: "https://github.com/AbdulFahad31/AmpTrail",
    featured: true
  },
  {
    name: "ForensiAI",
    icon: BrainCircuit,
    badge: "Hackathon Winner - HackHere",
    tagline: "AI-powered forensic investigation built in 24 hours",
    description:
      "An intelligent forensic investigation platform built at a 24-hour hackathon. Uses multi-agent AI workflows to assist case analysis, evidence management, and automated forensic reporting.",
    features: [
      "AI case analysis",
      "Multi-agent workflows",
      "Evidence management",
      "Automated reporting",
      "LLM-powered insights"
    ],
    stack: ["CrewAI", "FastAPI", "React", "LLMs"],
    github: "https://github.com/AbdulFahad31/aiventra/tree/main",
    featured: true
  },
  {
    name: "Medovate",
    icon: Smartphone,
    tagline: "Smart doctor appointment booking with real-time scheduling",
    description:
      "A mobile-first healthcare platform streamlining doctor appointment scheduling with Firebase integration, push notification support, and real-time availability management.",
    features: [
      "Appointment scheduling",
      "Real-time availability",
      "Firebase Cloud Messaging",
      "Clean responsive UI"
    ],
    stack: ["Flutter", "Firebase", "Firestore"],
    github: "https://github.com/AbdulFahad31/medovate"
  },
  {
    name: "RoadCare",
    icon: Flame,
    tagline: "Civic tech for smarter road issue reporting and safety",
    description:
      "A public-utility platform enabling citizens to report road damage and safety issues with location tagging, image uploads, and status tracking.",
    features: [
      "Real-time issue reporting",
      "Location tracking",
      "Image upload",
      "Status monitoring",
      "Civic-tech UI"
    ],
    stack: ["Flutter", "Firebase", "Firestore"],
    github: "https://github.com/AbdulFahad31/RoadCare"
  }
];

export const achievements = [
  {
    icon: Trophy,
    title: "1st Prize - HackHere Hackathon",
    subtitle: "StartupTN affiliated · 24-hour · 2026"
  },
  {
    icon: FileBadge,
    title: "Govt. of India Copyright Registration",
    subtitle: "AmpTrail - EV Charging Platform · 2025"
  },
  {
    icon: Code2,
    title: "750+ Problems Solved",
    subtitle: "LeetCode · CodeChef · SkillRack · GeeksforGeeks"
  },
  {
    icon: Medal,
    title: "Infosys Springboard Certified",
    subtitle: "Industry-recognized certification"
  },
  {
    icon: Smartphone,
    title: "Production Flutter Applications",
    subtitle: "Real-world mobile apps experience"
  },
  {
    icon: BrainCircuit,
    title: "AI Systems Developer",
    subtitle: "Multi-agent AI · LLM integration · CrewAI"
  }
];

export const codingProfiles = [
  { label: "LeetCode", icon: SiLeetcode },
  { label: "GFG", icon: SiGeeksforgeeks },
  { label: "CSE", icon: GraduationCap }
];
