"use client";
import Image from "next/image";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import HeroImage from "@/public/images/hero-image.png";
import { useToast } from "@/utils/utils";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "C++", "Go", "Python", "TypeScript", "JavaScript"],
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "React", "Wails", "Elysia.js"],
      icon: (
        <svg
          className="w-5 h-5 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "MongoDB", "Firebase"],
      icon: (
        <svg
          className="w-5 h-5 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      title: "Tools & OS",
      skills: ["Git", "Linux", "Launch4j", "NSIS"],
      icon: (
        <svg
          className="w-5 h-5 text-amber-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
  ];

  const projectCard = [
    {
      title: "Power Monitoring System",
      role: "IoT + Web Dashboard",
      award: "Best Project Award",
      date: "2026",
      description:
        "Measures real-time power consumption from 230V electronic devices and stores data in a time-series database. Delivers live power data to a Next.js dashboard with user accounts, enabling real-time monitoring through the device.",
      bullets: [
        "Created for a university exhibition; awarded Best Project Award by the ICT department.",
        "Built with Next.js frontend, Elysia.js backend, MQTT as middleware, and ESP32 as the hardware controller.",
      ],
      url: "https://github.com/y-amila-nirmal/power-monitoring-system",
      stars: 32,
      forks: 7,
      language: "TypeScript",
      langColor: "#3178c6",
      technology: ["Next.js", "Elysia.js", "MQTT", "ESP32"],
      icon: (
        <svg
          className="w-10 h-10 text-yellow-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Digital Banking System",
      role: "Java Desktop Application",
      date: "2026",
      description:
        "Developed a secure, role-based desktop banking application built with Java, Swing (FlatLaf), and SQLite, featuring persistent local storage and automated dashboard routing for Customers, Staff, and Admins.",
      bullets: [
        "Implements robust business logic for multi-account management, transaction logs, and loan requests.",
        "Configured packaging pipelines for generating native executable wrappers and installers on Windows using Launch4j and NSIS scripts.",
      ],
      url: "https://github.com/y-amila-nirmal/digital-banking-system",
      stars: 18,
      forks: 3,
      language: "Java",
      langColor: "#b07219",
      technology: ["Swing", "SQLite", "Launch4j", "NSIS"],
      icon: (
        <svg
          className="w-10 h-10 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "University Timetable Management Tool",
      role: "Web Application",
      date: "2025 - 2026",
      description:
        "Built a web-based platform using Next.js, MongoDB, and Prisma ORM to modernize the complex and time-consuming university timetable creation process.",
      bullets: [
        "Minimizes scheduling complexity with an automated conflict detection system that identifies clashing time slots.",
        "Transformed a traditionally manual and error-prone process into a simple, streamlined experience using modern technologies.",
      ],
      url: "https://github.com/y-amila-nirmal/timetable-management",
      stars: 24,
      forks: 5,
      language: "TypeScript",
      langColor: "#3178c6",
      technology: ["Next.js", "MongoDB", "Prisma ORM"],
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Custom 4G Modem Wi-Fi Router",
      role: "Embedded Linux",
      date: "2023 - 2024",
      description:
        "Built for personal use using a single-board computer (Orange Pi) running a Linux distribution to manage 4G internet and broadcast it as a Wi-Fi network.",
      bullets: [
        "All core functionality controlled by a custom program written in Go.",
        "Utilized system services including dnsmasq, hostapd, and bridge-utils for DNS, access point management, and network bridging.",
      ],
      url: "https://github.com/y-amila-nirmal/custom-4g-router",
      stars: 29,
      forks: 6,
      language: "Go",
      langColor: "#00ADD8",
      technology: ["Linux", "Orange Pi", "dnsmasq"],
      icon: (
        <svg
          className="w-10 h-10 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setIsSubmitting(false);

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden bg-white text-gray-900 font-sans selection:bg-gray-150">
      {/* Hero Section */}
      <div className="relative w-full h-[150vh]">
        {/* Sticky Header Text */}
        {/* Stays fixed for 50vh, then scrolls up naturally */}
        <div className="sticky top-0 left-0 flex h-dvh w-full flex-col items-center justify-center pointer-events-none z-0">
          <div className="mt-32 sm:mt-40 flex flex-col items-center gap-5">
            <h1 className="text-center text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl text-transparent [-webkit-text-stroke:1.5px_#e5e7eb] uppercase tracking-wider opacity-90">
              Full Stack
            </h1>
            <h1 className="text-center text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 tracking-wide">
              Developer
            </h1>
          </div>
        </div>

        {/* Parallax Hero Portrait Image */}
        {/* Positioned at the very top of the 150vh container but centered within the first 100vh */}
        <div className="absolute top-0 left-0 flex h-dvh w-full flex-col items-center justify-center pointer-events-none z-10">
          <Parallax speed={-25}>
            <Image
              className="w-3xs sm:w-xs drop-shadow-md"
              src={HeroImage}
              alt="Amila Nirmal"
              priority
            />
          </Parallax>
        </div>
      </div>

      {/* About Me / Profile Section */}
      <div className="flex max-w-4xl flex-col items-center py-28 px-5">
        <div className="mx-2.5 flex max-w-2xl flex-col items-center gap-5 rounded-2xl px-5 py-5 xl:max-w-4xl xl:px-5">
          <div className="flex w-full flex-col items-center gap-5 px-5">
            <h1 className="text-3xl font-bold md:text-5xl text-gray-900 tracking-tight">
              I'm Amila Nirmal
            </h1>
            <p className="text-justify font-sans text-sm font-medium md:text-lg leading-relaxed text-gray-600 max-w-2xl">
              Motivated undergraduate pursuing a Bachelor of Information &
              Communication Technology at Rajarata University of Sri Lanka with
              practical experience in software engineering, IoT solutions, and
              embedded Linux systems. Skilled in developing modern web
              applications, real-time monitoring platforms, and
              hardware-integrated systems using technologies such as Next.js,
              React, MongoDB, and Linux. Experienced in both frontend and
              backend development, including dashboard creation, network-based
              applications, and microcontroller-driven projects. Strong interest
              in systems programming, networking, and IoT innovation, with the
              ability to quickly adapt to new technologies and collaborate
              effectively within technical teams.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Experience Sections */}
      {/* <div className="flex w-full max-w-2xl flex-col items-start gap-12 px-5 pb-20"> */}
      {/* Education Timeline */}
      {/* <div className="flex w-full flex-col items-start gap-5">
          <h3 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
            Education
          </h3>
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-dotted border-gray-400 px-6 py-8 shadow-xs bg-gray-50/20">
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h4 className="text-lg font-bold text-gray-900">
                  Rajarata University of Sri Lanka
                </h4>
                <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-300 self-start sm:self-auto">
                  2023 - Present
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700">
                Bachelor of Information & Communication Technology
              </p>
              <p className="text-xs text-gray-500 font-mono">
                Mihinthale, Sri Lanka
              </p>
            </div>

            <div className="border-t border-dotted border-gray-300 my-1" />

            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h4 className="text-lg font-bold text-gray-900">
                  Galahitiyawa Central College
                </h4>
                <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-300 self-start sm:self-auto">
                  2020 - 2022
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700">
                A/L Engineering Technology
              </p>
              <p className="text-xs text-gray-500 font-mono">
                Ganemulla, Gampaha
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded border border-gray-300">
                  ET: B
                </span>
                <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded border border-gray-300">
                  SFT: C
                </span>
                <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded border border-gray-300">
                  ICT: C
                </span>
              </div>
            </div>
          </div>
        </div> */}

      {/* Experience Timeline */}
      {/* <div className="flex w-full flex-col items-start gap-5">
          <h3 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
            Experience
          </h3>
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-dotted border-gray-400 px-6 py-8 shadow-xs bg-gray-50/20">
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h4 className="text-lg font-bold text-gray-900">
                  Kema Project
                </h4>
                <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-300 self-start sm:self-auto">
                  2022
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700">
                Frontend Developer
              </p>
              <ul className="list-inside list-disc text-xs text-gray-600 space-y-1.5 mt-2 pl-1">
                <li>Worked on the Kema Project as a frontend developer.</li>
                <li>
                  Gained hands-on experience with React, Expo, and TypeScript
                  development.
                </li>
                <li>
                  Contributed to building and maintaining user interface
                  components and application features.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Projects Section */}
      <div className="flex w-full max-w-2xl flex-col items-start gap-6 px-5 pt-12">
        <h3 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
          Projects
        </h3>

        {/* Sleek Light GitHub Profile Card */}
        <div className="flex w-full flex-col items-center gap-5 rounded-2xl border border-dotted border-gray-400 px-6 py-6 shadow-xs sm:flex-row bg-gray-50/30">
          <Image
            className="w-16 h-16 rounded-full border border-gray-300 shadow-xs"
            width={64}
            height={64}
            src="https://github.com/y-amila-nirmal.png"
            alt="Amila Nirmal GitHub Profile"
          />
          <div className="flex flex-col items-center sm:items-start gap-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-gray-900">
                  Amila Nirmal
                </h4>
                <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-300 font-mono">
                  @y-amila-nirmal
                </span>
              </div>
              <a
                href="https://github.com/y-amila-nirmal"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 hover:underline"
              >
                View Profile
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <p className="text-xs font-sans text-gray-500 text-center sm:text-left">
              Undergraduate in ICT at Rajarata University | Embedded systems
              developer, systems programmer, and full-stack engineer.
            </p>
            <div className="mt-1 flex gap-4 text-[10px] font-mono text-gray-500">
              <span>
                <strong>24</strong> followers
              </span>
              <span>
                <strong>18</strong> repositories
              </span>
              <span>
                <strong>100+</strong> stars
              </span>
            </div>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col items-center gap-10 w-full mt-4">
          {projectCard.map((project) => (
            <a
              href={project.url}
              className="flex w-full group"
              key={project.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex w-full flex-col items-center gap-5 rounded-2xl border border-dotted border-gray-400 px-6 py-8 shadow-xs md:flex-row hover:bg-gray-50/30 transition-colors w-full">
                {/* Visual Icon container on left */}
                <div className="flex shrink-0 w-20 h-20 items-center justify-center rounded-2xl bg-gray-50 border border-gray-300 text-gray-600 group-hover:border-gray-400 group-hover:bg-gray-100 transition-colors">
                  {project.icon}
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.award && (
                        <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-850 text-[10px] font-bold border border-yellow-250">
                          🏆 {project.award}
                        </span>
                      )}
                    </div>

                    {/* Inline Horizontal Repository indicators */}
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-250 shrink-0">
                      <span className="flex items-center gap-1">
                        ⭐ {project.stars}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        🍴 {project.forks}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-gray-500">
                    {project.role} &bull; {project.date}
                  </p>

                  <p className="text-justify text-xs font-medium text-gray-600 md:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="list-inside list-disc text-[11px] text-gray-500 space-y-1 mt-1 pl-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap items-center gap-1.5 w-full">
                    {/* Primary Language Colored badge */}
                    <span className="inline-flex items-center gap-1.5 rounded bg-gray-100 border border-gray-300 px-2.5 py-0.5 text-[11px] text-gray-700 font-mono">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: project.langColor }}
                      />
                      {project.language}
                    </span>
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-gray-200 px-2.5 py-0.5 text-[11px] text-gray-700 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Skill Set Section (Categorized Light Grid Layout) */}
      <div className="flex w-full max-w-2xl flex-col items-start gap-5 px-5 py-28">
        <h3 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
          Skill Set
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50/20 border border-dotted border-gray-400 p-5 rounded-2xl hover:bg-gray-50/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-350 flex items-center justify-center">
                  {category.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded bg-gray-200 text-gray-700 text-xs font-mono border border-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Activities Section */}
      {/* <div className="flex w-full max-w-2xl flex-col items-start gap-5 px-5 pb-20">
        <h3 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
          Leadership & Activities
        </h3>
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-dotted border-gray-400 px-6 py-8 shadow-xs bg-gray-50/20">
          <ul className="list-inside list-disc text-sm font-medium text-gray-700 space-y-3.5 pl-1">
            <li className="leading-relaxed">
              Represented the university basketball team and secured{" "}
              <strong className="text-black">2nd place</strong> at the Freshers'
              Meet 2026.
            </li>
            <li className="leading-relaxed">
              Received the{" "}
              <strong className="text-black">Best Project Award</strong> from
              the ICT Department at the university's extra-curricular exhibition
              for the Power Monitoring System.
            </li>
          </ul>
        </div>
      </div> */}

      {/* Contact Section */}
      <div className="flex w-full max-w-2xl flex-col items-start gap-5 px-5 pb-10">
        <h3 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
          Contact Me
        </h3>
        <label
          htmlFor="contact"
          className="text-lg font-semibold text-gray-700"
        >
          Contact Information
        </label>
        <div
          id="contact"
          className="flex w-full flex-col items-start gap-5 rounded-2xl border border-dotted border-gray-400 px-6 py-8 shadow-xs bg-gray-50/20 w-full"
        >
          <div className="flex w-full flex-col items-start">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
              GitHub
            </label>
            <a
              href="https://github.com/y-amila-nirmal"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 hover:text-blue-600 font-bold transition-colors"
            >
              y-amila-nirmal
            </a>
          </div>

          <div className="w-full border-t border-dotted border-gray-300 my-1" />

          <div className="flex w-full flex-col items-start">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
              E-mail
            </label>
            <a
              href="mailto:hello@amila.is-a.dev"
              className="text-gray-900 hover:text-blue-600 font-bold transition-colors"
            >
              hello@amila.is-a.dev
            </a>
          </div>

          <div className="w-full border-t border-dotted border-gray-300 my-1" />

          <div className="flex w-full flex-col items-start">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
              Phone Number
            </label>
            <a
              href="tel:+94752353306"
              className="text-gray-900 hover:text-blue-600 font-bold transition-colors"
            >
              +94 75 235 3306
            </a>
          </div>

          <div className="w-full border-t border-dotted border-gray-300 my-1" />

          <div className="flex w-full flex-col items-start">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
              LinkedIn
            </label>
            <a
              href="https://www.linkedin.com/in/amila-nirmal"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 hover:text-blue-600 font-bold transition-colors"
            >
              amila-nirmal
            </a>
          </div>
        </div>

        <label
          htmlFor="form"
          className="text-lg font-semibold text-gray-700 mt-8"
        >
          Message Forum
        </label>
        <form
          id="form"
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-start gap-5 rounded-2xl border border-dotted border-gray-400 px-6 py-8 shadow-xs bg-gray-50/10 w-full"
        >
          <div className="flex w-full flex-col items-center md:flex-row md:items-start md:gap-5 w-full">
            <div className="flex w-full flex-col items-start w-full gap-4">
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="firstName"
                >
                  First Name&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="lastName"
                >
                  Last Name&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Silva"
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="email"
                >
                  E-Mail&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="company"
                >
                  Company&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  placeholder="Your Company Name"
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start w-full gap-4 mt-4 md:mt-0">
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="phone"
                >
                  Phone&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  placeholder="+94 75 123 4567"
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="subject"
                >
                  Subject&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <label
                  className="text-xs font-mono text-gray-600"
                  htmlFor="message"
                >
                  Message&nbsp;<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us more about your inquiry..."
                  className="w-full rounded-lg border border-dotted border-gray-400 p-2.5 px-3 bg-white shadow-xs focus:outline-none focus:border-blue-500 transition-colors text-sm min-h-[114px] resize-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-2xl border border-gray-400 py-3 font-semibold transition-all bg-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer shadow-xs"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Clean Light Footer to frame the website neatly */}
      <footer className="w-full max-w-2xl border-t border-dotted border-gray-400 py-10 mt-16 text-center text-xs text-gray-500 font-mono">
        <p>&copy; 2026 Amila Nirmal. All rights reserved.</p>
        <p className="mt-1">
          Built with Next.js, Tailwind v4 &amp; Framer Motion
        </p>
      </footer>
    </main>
  );
}
