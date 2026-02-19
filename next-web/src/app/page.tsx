"use client";
import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PERSON = {
  name: "Alex Mercer",
  designation: "Full-Stack Engineer & UI Architect",
  bio: "I craft scalable web experiences where performance meets pixel-perfect design. 6+ years shipping products that people actually enjoy using.",
  email: "alex@mercer.dev",
  phone: "+1 (555) 024-8800",
  linkedin: "https://linkedin.com/in/alexmercer",
  github: "https://github.com/alexmercer",
  location: "San Francisco, CA",
};

const SKILLS = [
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

const EXPERIENCES = [
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

const PROJECTS = [
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

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";
const fmtMonthYear = (d) => {
  const [y, m] = d.split("-");
  return new Date(y, m - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

// Per-category colour tokens (hex dot + Tailwind classes)
const CAT = {
  Frontend: {
    hex: "#7c9eff",
    text: "text-blue-300",
    bar: "bg-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
  },
  Backend: {
    hex: "#63cab7",
    text: "text-teal-300",
    bar: "bg-teal-400",
    border: "border-teal-400/30",
    bg: "bg-teal-400/10",
  },
  Language: {
    hex: "#f7c59f",
    text: "text-orange-300",
    bar: "bg-orange-300",
    border: "border-orange-300/30",
    bg: "bg-orange-300/10",
  },
  Database: {
    hex: "#e88cd8",
    text: "text-purple-300",
    bar: "bg-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
  },
  DevOps: {
    hex: "#ff8c6b",
    text: "text-red-300",
    bar: "bg-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/10",
  },
  Design: {
    hex: "#ffd166",
    text: "text-yellow-300",
    bar: "bg-yellow-300",
    border: "border-yellow-300/30",
    bg: "bg-yellow-300/10",
  },
};
const getCat = (c) => CAT[c] ?? CAT.Backend;

// ─── SHARED UI ───────────────────────────────────────────────────────────────

function TechBadge({ tech }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono tracking-wide text-teal-400 border border-teal-400/30 bg-teal-400/10">
      {tech}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-2 font-mono text-[11px] text-teal-400 tracking-[3px] uppercase">
      — {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      className="m-0 font-display font-black text-stone-100 leading-tight tracking-tight"
      style={{ fontSize: "clamp(28px,5vw,44px)" }}
    >
      {children}
    </h2>
  );
}

// ─── MODAL BASE ──────────────────────────────────────────────────────────────

function ModalOverlay({ children, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fadeIn"
      style={{ background: "rgba(5,5,15,0.88)", backdropFilter: "blur(14px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/8 animate-slideUp"
        style={{
          background: "#0c0c1c",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,202,183,0.08)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ModalClose({ onClose }) {
  return (
    <button
      onClick={onClose}
      className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg border border-white/10 bg-white/5 text-stone-400 hover:text-stone-100 hover:bg-white/10 transition-all text-xl cursor-pointer"
    >
      ×
    </button>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav({ active }) {
  const links = ["Hero", "Skills", "Experience", "Projects", "Contact"];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-10 py-[18px] border-b border-white/8"
      style={{ background: "rgba(5,5,16,0.85)", backdropFilter: "blur(20px)" }}
    >
      <span className="font-display text-lg font-black text-stone-100">
        AM<span className="text-teal-400">.</span>
      </span>
      <div className="flex gap-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={`font-mono text-xs tracking-[1px] no-underline transition-colors duration-200 ${
              active === l.toLowerCase()
                ? "text-teal-400"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(99,202,183,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Bottom separator line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,202,183,0.3), transparent)",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <p className="font-mono text-xs text-teal-400 tracking-[4px] uppercase mb-6 animate-fadeIn">
          ✦ Available for new opportunities
        </p>

        <h1
          className="font-display font-black text-stone-100 leading-none tracking-[-2px] mb-4 animate-slideUp"
          style={{ fontSize: "clamp(52px,10vw,90px)" }}
        >
          {PERSON.name}
        </h1>

        <p
          className="font-mono text-teal-400 tracking-[2px] uppercase mb-5 animate-slideUp"
          style={{ fontSize: "clamp(13px,2vw,16px)" }}
        >
          {PERSON.designation}
        </p>

        <p className="font-body text-base text-stone-400 leading-relaxed max-w-lg mx-auto mb-12 animate-fadeIn">
          {PERSON.bio}
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap animate-fadeIn">
          <a
            href={`mailto:${PERSON.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-400 text-[#050510] rounded-xl font-mono text-[13px] font-bold tracking-[0.5px] no-underline hover:opacity-90 transition-opacity"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Hire Me
          </a>
          <a
            href="#"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-teal-400 border border-teal-400/35 rounded-xl font-mono text-[13px] font-bold tracking-[0.5px] no-underline hover:bg-teal-400/10 transition-all"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-fadeIn">
          <span className="font-mono text-[10px] text-stone-600 tracking-[2px]">
            SCROLL
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #63cab7, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── SKILL MODAL ─────────────────────────────────────────────────────────────

function SkillModal({ skill, onClose }) {
  if (!skill) return null;
  const cat = getCat(skill.category);

  return (
    <ModalOverlay onClose={onClose}>
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-7">
          <div className="flex items-center gap-4">
            <span className="text-5xl leading-none">{skill.icon}</span>
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <h2 className="m-0 font-display text-2xl font-bold text-stone-100">
                  {skill.name}
                </h2>
                {skill.featured && (
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border tracking-[1px] ${cat.border} ${cat.bg} ${cat.text}`}
                  >
                    FEATURED
                  </span>
                )}
              </div>
              <span
                className={`font-mono text-xs px-2.5 py-1 rounded border ${cat.border} ${cat.bg} ${cat.text}`}
              >
                {skill.category}
              </span>
            </div>
          </div>
          <ModalClose onClose={onClose} />
        </div>

        {/* Proficiency bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-mono text-[11px] text-stone-500 tracking-[1px] uppercase">
              Proficiency
            </span>
            <span className={`font-mono text-sm font-bold ${cat.text}`}>
              {skill.rating}%
            </span>
          </div>
          <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${cat.bar}`}
              style={{ width: `${skill.rating}%` }}
            />
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-3.5 mb-5">
          {[
            ["Experience", skill.experience],
            ["Category", skill.category],
            ["Rating", `${skill.rating} / 100`],
            ["Featured", skill.featured ? "Yes ✦" : "No"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="bg-white/3 border border-white/8 rounded-xl p-3.5"
            >
              <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-1">
                {k}
              </p>
              <p className="font-mono text-[13px] text-stone-400">{v}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="bg-white/3 border border-white/8 rounded-xl p-4">
          <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-2">
            About
          </p>
          <p className="font-body text-[13.5px] text-stone-400 leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </ModalOverlay>
  );
}

// ─── SKILLS SECTION ──────────────────────────────────────────────────────────

function SkillsSection() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];
  const filtered =
    filter === "All" ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 px-6 border-b border-white/8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <SectionLabel>Expertise</SectionLabel>
          <SectionHeading>Skills</SectionHeading>
          <p className="mt-3 font-body text-sm text-stone-500">
            Click any skill to see full details.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-9">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-md font-mono text-[11px] tracking-[0.5px] border cursor-pointer transition-all duration-150 ${
                filter === c
                  ? "bg-teal-400/10 border-teal-400 text-teal-400"
                  : "bg-transparent border-white/10 text-stone-500 hover:border-white/20 hover:text-stone-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div
          className="grid gap-3.5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          }}
        >
          {filtered.map((skill) => {
            const cat = getCat(skill.category);
            return (
              <div
                key={skill.id}
                onClick={() => setSelected(skill)}
                className="relative bg-white/3 border border-white/8 rounded-xl p-5 cursor-pointer text-center transition-all duration-200 hover:-translate-y-1 hover:bg-white/5"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = cat.hex + "55")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                }
              >
                {skill.featured && (
                  <div
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: cat.hex }}
                  />
                )}
                <div className="text-[32px] mb-2.5 leading-none">
                  {skill.icon}
                </div>
                <p className="font-display text-sm font-bold text-stone-100 mb-1.5">
                  {skill.name}
                </p>
                <p
                  className={`font-mono text-[10px] mb-2.5 tracking-[0.5px] ${cat.text}`}
                >
                  {skill.category}
                </p>
                <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cat.bar}`}
                    style={{ width: `${skill.rating}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <SkillModal skill={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// ─── EXPERIENCE SECTION ──────────────────────────────────────────────────────

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-white/8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <SectionLabel>Career</SectionLabel>
          <SectionHeading>Experience</SectionHeading>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute top-3 bottom-3 w-px"
            style={{
              left: 131,
              background:
                "linear-gradient(to bottom, rgba(99,202,183,0.4), rgba(255,255,255,0.08), transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.id}
                className="grid gap-8 items-start"
                style={{ gridTemplateColumns: "120px 1fr" }}
              >
                {/* Date column */}
                <div className="text-right relative">
                  <p className="font-mono text-[11px] text-stone-500 leading-relaxed">
                    {fmtMonthYear(exp.startDate)}
                    <br />
                    <span
                      className={
                        !exp.endDate ? "text-teal-400" : "text-stone-500"
                      }
                    >
                      {exp.endDate ? fmtMonthYear(exp.endDate) : "Present"}
                    </span>
                  </p>
                  {/* Timeline dot */}
                  <div
                    className="absolute top-1 rounded-full"
                    style={{
                      right: -38,
                      width: 10,
                      height: 10,
                      background:
                        i === 0 ? "#63cab7" : "rgba(255,255,255,0.08)",
                      border: `2px solid ${i === 0 ? "#63cab7" : "#6b6b80"}`,
                      boxShadow:
                        i === 0 ? "0 0 12px rgba(99,202,183,0.4)" : "none",
                    }}
                  />
                </div>

                {/* Content card */}
                <div
                  className="bg-white/3 border border-white/8 rounded-xl p-6 transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(99,202,183,0.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)")
                  }
                >
                  <div className="mb-3">
                    <h3 className="font-display text-lg font-bold text-stone-100 mb-1">
                      {exp.position}
                    </h3>
                    <p className="font-mono text-xs text-teal-400">
                      {exp.company}
                    </p>
                  </div>
                  <p className="font-body text-[13.5px] text-stone-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <TechBadge key={t} tech={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECT MODAL ───────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  if (!project) return null;

  return (
    <ModalOverlay onClose={onClose}>
      {/* Header */}
      <div className="flex justify-between items-start px-8 pt-7 pb-5 border-b border-white/8">
        <div>
          <h2 className="m-0 font-display text-2xl font-bold text-stone-100">
            {project.name}
          </h2>
          {project.company && (
            <p className="mt-1.5 font-mono text-xs text-teal-400">
              @ {project.company}
            </p>
          )}
        </div>
        <ModalClose onClose={onClose} />
      </div>

      {/* Screenshots */}
      <div className="px-8 pt-6">
        <div className="relative rounded-xl overflow-hidden border border-white/8 mb-3">
          <img
            src={project.screenshots[activeImg]}
            alt=""
            className="w-full object-cover block"
            style={{ height: 300 }}
          />
          <div className="absolute top-3 right-3 bg-black/65 rounded-md px-2.5 py-1 font-mono text-[11px] text-stone-400">
            {activeImg + 1} / {project.screenshots.length}
          </div>
        </div>

        {project.screenshots.length > 1 && (
          <div className="flex gap-2 mb-1">
            {project.screenshots.map((s, i) => (
              <img
                key={i}
                src={s}
                alt=""
                onClick={() => setActiveImg(i)}
                className="object-cover rounded-md cursor-pointer transition-all"
                style={{
                  width: 72,
                  height: 48,
                  border: `2px solid ${i === activeImg ? "#63cab7" : "transparent"}`,
                  opacity: i === activeImg ? 1 : 0.45,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-3.5 px-8 py-6">
        {/* Description — full width */}
        <div className="col-span-2 bg-white/3 border border-white/8 rounded-xl p-4">
          <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-2">
            Description
          </p>
          <p className="font-body text-[13.5px] text-stone-400 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Dates */}
        {[
          ["Start Date", fmtDate(project.startDate), false],
          ["End Date", fmtDate(project.endDate), !project.endDate],
        ].map(([k, v, accent]) => (
          <div
            key={k}
            className="bg-white/3 border border-white/8 rounded-xl p-4"
          >
            <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-1.5">
              {k}
            </p>
            <p
              className={`font-mono text-[13px] ${accent ? "text-teal-400" : "text-stone-400"}`}
            >
              {v}
            </p>
          </div>
        ))}

        {/* Technologies — full width */}
        <div className="col-span-2 bg-white/3 border border-white/8 rounded-xl p-4">
          <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>
        </div>

        {/* Link — full width */}
        <div className="col-span-2 bg-teal-400/10 border border-teal-400/30 rounded-xl p-4 flex justify-between items-center">
          <div>
            <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-1">
              Project Link
            </p>
            <p className="font-mono text-xs text-teal-400">
              {project.projectLink}
            </p>
          </div>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-400 text-[#050510] rounded-lg font-mono text-xs font-bold no-underline hover:opacity-90 transition-opacity"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit
          </a>
        </div>
      </div>
    </ModalOverlay>
  );
}

// ─── PROJECT CARD + SECTION ──────────────────────────────────────────────────

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="flex flex-col bg-white/3 border border-white/8 rounded-xl p-6 cursor-pointer transition-all duration-200"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(99,202,183,0.35)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-[17px] font-bold text-stone-100 mb-1">
            {project.name}
          </h3>
          {project.company && (
            <p className="font-mono text-[11px] text-stone-500">
              @ {project.company}
            </p>
          )}
        </div>
        <div className="font-mono text-[10px] text-stone-500 text-right leading-relaxed shrink-0 ml-3">
          {fmtDate(project.startDate)}
          <br />
          <span className={!project.endDate ? "text-teal-400" : ""}>
            {fmtDate(project.endDate)}
          </span>
        </div>
      </div>

      <p
        className="font-body text-[13px] text-stone-400 leading-relaxed mb-4 flex-1 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((t) => (
          <TechBadge key={t} tech={t} />
        ))}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-white/8">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="font-mono text-[11px] text-teal-400 no-underline flex items-center gap-1.5 hover:opacity-75 transition-opacity"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View Project
        </a>
        <span className="font-mono text-[10px] text-stone-600">
          {project.screenshots.length} screenshots →
        </span>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="py-24 px-6 border-b border-white/8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <SectionLabel>Selected Work</SectionLabel>
          <SectionHeading>Projects</SectionHeading>
          <p className="mt-3 font-body text-sm text-stone-500">
            Click any project to explore screenshots and full details.
          </p>
        </div>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={setSelected} />
          ))}
        </div>
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const inputCls =
    "w-full px-4 py-3 rounded-lg font-body text-[13.5px] text-stone-200 outline-none transition-colors duration-200 bg-white/3 border border-white/10 focus:border-teal-400/60 placeholder:text-stone-600";

  const ContactLink = ({ icon, label, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3.5 px-5 py-4 bg-white/3 border border-white/8 rounded-xl no-underline text-stone-100 transition-all duration-200 hover:border-teal-400/35 hover:bg-teal-400/5"
    >
      <span className="text-teal-400 text-lg w-6 text-center">{icon}</span>
      <span className="font-mono text-xs">{label}</span>
    </a>
  );

  return (
    <section id="contact" className="py-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionHeading>Contact</SectionHeading>
          <p className="mt-3 font-body text-sm text-stone-500 max-w-md">
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 items-start">
          {/* Left: links */}
          <div className="flex flex-col gap-3">
            <ContactLink
              icon="✉"
              label={PERSON.email}
              href={`mailto:${PERSON.email}`}
            />
            <ContactLink
              icon="📱"
              label={PERSON.phone}
              href={`tel:${PERSON.phone}`}
            />
            <ContactLink icon="in" label="LinkedIn" href={PERSON.linkedin} />
            <ContactLink
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              }
              label="GitHub"
              href={PERSON.github}
            />
            <div className="px-5 py-4 bg-white/3 border border-white/8 rounded-xl">
              <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[1px] mb-1">
                Location
              </p>
              <p className="font-mono text-xs text-stone-400">
                📍 {PERSON.location}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="text-center py-16 px-6 bg-teal-400/10 border border-teal-400/30 rounded-xl">
                <div className="text-[40px] mb-4">✦</div>
                <h3 className="font-display text-[22px] text-teal-400 mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-[13px] text-stone-400">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3.5">
                <input
                  className={inputCls}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder="Your email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                  className={`${inputCls} resize-y`}
                  placeholder="Your message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                <button
                  onClick={() =>
                    form.name && form.email && form.message && setSent(true)
                  }
                  disabled={!form.name || !form.email || !form.message}
                  className="w-full py-3.5 bg-teal-400 text-[#050510] rounded-lg font-mono text-[13px] font-bold tracking-[0.5px] cursor-pointer border-none hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/8 flex justify-between items-center">
          <span className="font-display text-lg font-black text-stone-100">
            AM<span className="text-teal-400">.</span>
          </span>
          <p className="font-mono text-[11px] text-stone-600">
            © {new Date().getFullYear()} {PERSON.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { threshold: 0.3 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Fonts ─────────────────────────────────────────────────────── */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora&family=JetBrains+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-mono    { font-family: 'JetBrains Mono', monospace; }
        .font-body    { font-family: 'Lora', serif; }

        /* ── Animations ─────────────────────────────────────────────────── */
        @keyframes fadeIn  { from { opacity:0 }                      to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        .animate-fadeIn  { animation: fadeIn  0.6s ease both; }
        .animate-slideUp { animation: slideUp 0.5s ease both; }

        /* ── Base reset ─────────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin:0; padding:0; background:#050510; }
        ::-webkit-scrollbar       { width: 5px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        ::-webkit-scrollbar-thumb { background: rgba(99,202,183,0.2); border-radius: 3px; }
        input::placeholder, textarea::placeholder { color: #57534e; }

        /* ── Tailwind opacity-variant polyfills (CDN doesn't JIT these) ── */

        /* Backgrounds */
        .bg-white\\/3  { background-color: rgba(255,255,255,0.03); }
        .bg-white\\/5  { background-color: rgba(255,255,255,0.05); }
        .bg-white\\/8  { background-color: rgba(255,255,255,0.08); }
        .bg-white\\/10 { background-color: rgba(255,255,255,0.10); }

        .bg-teal-400\\/5  { background-color: rgba(45,212,191,0.05); }
        .bg-teal-400\\/10 { background-color: rgba(45,212,191,0.10); }

        .bg-blue-400\\/10   { background-color: rgba(96,165,250,0.10); }
        .bg-orange-300\\/10 { background-color: rgba(253,186,116,0.10); }
        .bg-purple-400\\/10 { background-color: rgba(192,132,252,0.10); }
        .bg-red-400\\/10    { background-color: rgba(248,113,113,0.10); }
        .bg-yellow-300\\/10 { background-color: rgba(253,224,71,0.10); }
        .bg-black\\/65      { background-color: rgba(0,0,0,0.65); }

        /* Borders */
        .border-white\\/8  { border-color: rgba(255,255,255,0.08); }
        .border-white\\/10 { border-color: rgba(255,255,255,0.10); }

        .border-teal-400\\/30 { border-color: rgba(45,212,191,0.30); }
        .border-teal-400\\/35 { border-color: rgba(45,212,191,0.35); }
        .border-teal-400\\/60 { border-color: rgba(45,212,191,0.60); }

        .border-blue-400\\/30   { border-color: rgba(96,165,250,0.30); }
        .border-orange-300\\/30 { border-color: rgba(253,186,116,0.30); }
        .border-purple-400\\/30 { border-color: rgba(192,132,252,0.30); }
        .border-red-400\\/30    { border-color: rgba(248,113,113,0.30); }
        .border-yellow-300\\/30 { border-color: rgba(253,224,71,0.30); }

        /* focus: variant */
        .focus\\:border-teal-400\\/60:focus { border-color: rgba(45,212,191,0.60); }

        /* hover: variants */
        .hover\\:bg-teal-400\\/10:hover  { background-color: rgba(45,212,191,0.10); }
        .hover\\:bg-teal-400\\/5:hover   { background-color: rgba(45,212,191,0.05); }
        .hover\\:border-teal-400\\/35:hover { border-color: rgba(45,212,191,0.35); }
        .hover\\:border-white\\/20:hover { border-color: rgba(255,255,255,0.20); }

        /* Colours not in CDN base */
        .text-teal-300   { color: #5eead4; }
        .text-teal-400   { color: #2dd4bf; }
        .bg-teal-400     { background-color: #2dd4bf; }
        .border-teal-400 { border-color: #2dd4bf; }

        .text-blue-300   { color: #93c5fd; }
        .bg-blue-400     { background-color: #60a5fa; }
        .text-orange-300 { color: #fdba74; }
        .bg-orange-300   { background-color: #fdba74; }
        .text-purple-300 { color: #d8b4fe; }
        .bg-purple-400   { background-color: #c084fc; }
        .text-red-300    { color: #fca5a5; }
        .bg-red-400      { background-color: #f87171; }
        .text-yellow-300 { color: #fde047; }
        .bg-yellow-300   { background-color: #fde047; }

        .text-stone-100  { color: #f5f5f4; }
        .text-stone-200  { color: #e7e5e4; }
        .text-stone-400  { color: #a8a29e; }
        .text-stone-500  { color: #78716c; }
        .text-stone-600  { color: #57534e; }

        /* disabled: */
        .disabled\\:opacity-40:disabled        { opacity: 0.4; }
        .disabled\\:cursor-not-allowed:disabled { cursor: not-allowed; }
      `}</style>

      <div
        className="min-h-screen"
        style={{
          background: "#050510",
          backgroundImage:
            "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(99,202,183,0.05), transparent)",
        }}
      >
        <Nav active={activeSection} />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
