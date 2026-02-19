import { ProjectDataInterface } from "./types/projectData";

export const PERSON = {
  name: "Alex Mercer",
  designation: "Full-Stack Engineer & UI Architect",
  bio: "I craft scalable web experiences where performance meets pixel-perfect design. 6+ years shipping products that people actually enjoy using.",
  email: "alex@mercer.dev",
  phone: "+1 (555) 024-8800",
  linkedin: "https://linkedin.com/in/alexmercer",
  github: "https://github.com/alexmercer",
  location: "San Francisco, CA",
};

export const SKILLS = [
  {
    id: 1,
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    rating: 95,
    experience: "5 years",
    featured: true,
    description:
      "Built 20+ production React apps. Expert in hooks, context, performance optimization, and component architecture patterns like compound components and render props.",
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "🔷",
    category: "Language",
    rating: 90,
    experience: "4 years",
    featured: true,
    description:
      "Strong typing advocate. Authored internal type utility libraries, trained junior devs, and migrated 3 large codebases from JS to TS with zero runtime regressions.",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "🟢",
    category: "Backend",
    rating: 88,
    experience: "5 years",
    featured: true,
    description:
      "Deep expertise in Express, Fastify, and NestJS. Built REST and GraphQL APIs serving millions of requests/day. Proficient in event-loop optimization and cluster mode.",
  },
  {
    id: 4,
    name: "PostgreSQL",
    icon: "🐘",
    category: "Database",
    rating: 82,
    experience: "4 years",
    featured: false,
    description:
      "Advanced query optimization, indexing strategies, partitioning, and replication. Designed schemas for complex multi-tenant SaaS products.",
  },
  {
    id: 5,
    name: "Docker",
    icon: "🐳",
    category: "DevOps",
    rating: 80,
    experience: "3 years",
    featured: false,
    description:
      "Containerized 10+ services. Authored multi-stage Dockerfiles, orchestrated with Docker Compose, and managed production deployments on ECS and GKE.",
  },
  {
    id: 6,
    name: "Next.js",
    icon: "▲",
    category: "Frontend",
    rating: 92,
    experience: "4 years",
    featured: true,
    description:
      "Go-to framework for SSR/SSG apps. Expert in App Router, Server Components, ISR strategies, and edge middleware for geo-aware rendering.",
  },
  {
    id: 7,
    name: "Redis",
    icon: "🔴",
    category: "Database",
    rating: 75,
    experience: "3 years",
    featured: false,
    description:
      "Used for session caching, pub/sub pipelines, rate limiting, and leaderboard features. Managed cluster mode deployments on ElastiCache.",
  },
  {
    id: 8,
    name: "Figma",
    icon: "🎨",
    category: "Design",
    rating: 85,
    experience: "4 years",
    featured: false,
    description:
      "Design-to-code champion. Built component libraries in Figma that map 1:1 to code. Comfortable leading design sprints and handoff workflows.",
  },
  {
    id: 9,
    name: "AWS",
    icon: "☁️",
    category: "DevOps",
    rating: 78,
    experience: "3 years",
    featured: false,
    description:
      "Regularly use EC2, S3, Lambda, CloudFront, RDS, SQS, and ECS. SAA-C03 certified. Designed multi-AZ architectures for high-availability systems.",
  },
  {
    id: 10,
    name: "GraphQL",
    icon: "◈",
    category: "Backend",
    rating: 83,
    experience: "3 years",
    featured: true,
    description:
      "Authored federated supergraphs using Apollo Federation v2. Implemented DataLoader patterns for N+1 elimination and subscription-based real-time features.",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    company: "Luminary Tech",
    position: "Senior Full-Stack Engineer",
    startDate: "2022-04",
    endDate: null,
    description:
      "Led a team of 5 engineers building a B2B SaaS analytics platform serving 300+ enterprise clients. Architected a real-time dashboard engine processing 1M+ events/day. Reduced frontend bundle size by 60% through code splitting and tree-shaking strategies. Introduced a component-driven design system adopted across 4 product teams.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: 2,
    company: "Orbit Digital Agency",
    position: "Frontend Engineer",
    startDate: "2020-06",
    endDate: "2022-03",
    description:
      "Delivered 15+ client projects ranging from marketing sites to complex web apps. Established coding standards and code review culture for a 12-person engineering org. Mentored 3 junior developers who all received promotions within 12 months.",
    tech: ["React", "Next.js", "Tailwind", "GraphQL", "Figma"],
  },
  {
    id: 3,
    company: "Stackforge (YC S19)",
    position: "Junior Developer",
    startDate: "2018-09",
    endDate: "2020-05",
    description:
      "Joined as employee #8 at a developer-tooling startup. Owned the CLI product end-to-end, growing it from 0 to 12K monthly active users. Integrated with 8 third-party APIs and built a webhook delivery system with at-least-once guarantees.",
    tech: ["Node.js", "Vue.js", "MySQL", "AWS", "Docker"],
  },
];

export const PROJECTS: ProjectDataInterface[] = [
  {
    id: 1,
    name: "NeuroCommerce Platform",
    description:
      "An AI-powered e-commerce platform that personalizes product recommendations using real-time behavioral analytics.",
    startDate: "2023-03-01",
    endDate: "2024-01-15",
    technologies: ["React", "Node.js", "TensorFlow", "PostgreSQL", "Redis"],
    projectLink: "https://neurocommerce.io",
    company: "Luminary Tech",
    screenshots: [
      "https://picsum.photos/seed/proj1a/800/500",
      "https://picsum.photos/seed/proj1b/800/500",
      "https://picsum.photos/seed/proj1c/800/500",
    ],
    fullDescription:
      "NeuroCommerce harnesses deep learning to understand customer intent, processing millions of behavioral signals per second for hyper-personalized shopping. Handles 500K+ concurrent users with sub-50ms recommendation latency.",
  },
  {
    id: 2,
    name: "Meridian Design System",
    description:
      "A comprehensive accessible design system with 200+ components and full dark mode support for enterprise-scale apps.",
    startDate: "2022-08-01",
    endDate: "2023-06-30",
    technologies: [
      "TypeScript",
      "Storybook",
      "Figma",
      "Styled Components",
      "Jest",
    ],
    projectLink: "https://meridian.design",
    company: null,
    screenshots: [
      "https://picsum.photos/seed/proj2a/800/500",
      "https://picsum.photos/seed/proj2b/800/500",
    ],
    fullDescription:
      "Meridian is adopted by 40+ product teams. Every component was built with WCAG 2.1 AA compliance from the ground up. Ships with a Figma library in perfect sync with code via automated token extraction pipelines.",
  },
  {
    id: 3,
    name: "Vaultly — Encrypted Notes",
    description:
      "End-to-end encrypted note-taking with zero-knowledge architecture. Your data stays private — even from us.",
    startDate: "2024-01-10",
    endDate: null,
    technologies: [
      "Next.js",
      "Rust",
      "WebAssembly",
      "SQLite",
      "Signal Protocol",
    ],
    projectLink: "https://vaultly.app",
    company: null,
    screenshots: [
      "https://picsum.photos/seed/proj3a/800/500",
      "https://picsum.photos/seed/proj3b/800/500",
      "https://picsum.photos/seed/proj3c/800/500",
    ],
    fullDescription:
      "Implements the Signal Protocol with all crypto ops in a sandboxed WASM module compiled from Rust. Zero-knowledge means the server never sees plaintext. Features offline-first sync, rich markdown, nested notebooks, and QR-based cross-device key sharing.",
  },
];
