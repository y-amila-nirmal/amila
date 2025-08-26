"use client";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";

import { cn, useScreenSize, useToast } from "@/utils/utils";
import { motion, scale, useScroll, useTransform } from "motion/react";
import { useCallback, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  // const screenSize = useScreenSize();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const heroImage = useTransform(scrollYProgress, [0, 0.35], [0, -1000]);
  // const heroHeading = useTransform(scrollYProgress, [0, 2], [0, 50]);
  const skill = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "Git",
    "Figma",
    "REST API",
    "WebSocket",
    "VS Code",
    "Linux",
  ];
  const projectCard = [
    {
      title: "MOG Message",
      description:
        "MOG Message is a mini messaging tool that allows you to quickly send and receive text messages with friends. Simple, fast, and easy to use for instant communication.",
      url: "https://message.mog.place",
      image:
        "https://raw.githubusercontent.com/y-amila-nirmal/blah/refs/heads/master/images/icon.png",
      alt: "message-image",
      gitUrl: "https://github.com/y-amila-nirmal/message",
      technology: ["React", "Node.js", "WebSocket"],
    },
    {
      title: "Blah",
      description:
        "Blah is a Visual Studio Code theme that offers three distinct color schemes, providing an enhanced and enjoyable coding experience.",
      url: "https://marketplace.visualstudio.com/items?itemName=amila.blah",
      image:
        "https://raw.githubusercontent.com/y-amila-nirmal/blah/refs/heads/master/images/icon.png",
      alt: "blah-image",
      gitUrl: "https://github.com/y-amila-nirmal/blah",
      technology: ["JSON", "VSIX packaging", "Node.js"],
    },
    {
      title: "Multiplication Table",
      description:
        "This is a simple Python program that generates a multiplication table in the command line.",
      url: "https://github.com/y-amila-nirmal/multiplication-tables",
      image:
        "https://raw.githubusercontent.com/y-amila-nirmal/blah/refs/heads/master/images/icon.png",
      alt: "message-image",
      gitUrl: "https://github.com/y-amila-nirmal/blah",
      technology: ["Python", "CLI"],
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
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <div className="relative flex h-dvh w-full flex-col items-center justify-center">
        <motion.div
          style={{
            y: heroImage,
          }}
        >
          <Image className="w-3xs sm:w-xs" src={HeroImage} alt="hero-image" />
        </motion.div>
        <div className="absolute mt-32 flex h-dvh w-full flex-col items-center justify-center gap-5 sm:mt-52">
          <h1 className="-z-10 text-center text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
            Full Stack
          </h1>
          <h1 className="text-center text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
            Developer
          </h1>
        </div>
      </div>
      <div className="flex max-w-4xl flex-col items-center py-40">
        <div className="mx-2.5 flex max-w-2xl flex-col items-center gap-5 rounded-2xl px-5 py-10 xl:max-w-4xl xl:flex-row xl:px-5 xl:py-5">
          <div className="flex w-full flex-col items-center gap-5 px-5">
            <h1 className="text-3xl font-bold md:text-6xl">I'm Amila Nirmal</h1>
            <p className="text-center font-sans text-sm font-medium md:text-xl">
              I'm a university student at Rajarata University of Sri Lanka,
              currently pursuing a degree in Information and Communication
              Technology. My focus is on becoming a full-stack developer.
              Academically, I work on web development, human-computer
              interaction, and object-oriented programming. I've also gained
              practical experience by working on several projects. Additionally,
              I am collecting experience as a full-stack developer to further
              enhance my skills.
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-w-2xl flex-col items-center gap-20 px-5 pt-40">
        {projectCard.map((project, id) => (
          <a
            href={project.url}
            className="flex w-full"
            key={id}
            target="_blank"
          >
            <div className="flex w-full flex-col items-center gap-5 rounded-2xl border border-dotted border-gray-400 px-5 py-10 shadow-xs md:flex-row">
              <Image
                className="w-auto"
                width={150}
                height={150}
                src={project.image}
                alt={project.alt}
              />
              <div className="flex flex-col items-start gap-2.5">
                <h3 className="text-2xl font-bold md:text-4xl">
                  {project.title}
                </h3>
                <p className="text-justify text-sm font-medium md:text-xl">
                  {project.description}
                </p>
                <div className="mt-2.5 flex flex-row items-center gap-2.5">
                  {project.technology.map((tech, id) => (
                    <span
                      key={id}
                      className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-700"
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
      <div className="flex w-full max-w-2xl flex-col items-center gap-5 px-10 py-40">
        <div className="flex w-full flex-col items-start gap-2.5">
          <h3 className="text-3xl font-bold md:text-4xl">Skill Set</h3>
          <div className="flex flex-wrap gap-2">
            {skill.map((tech, id) => (
              <span
                key={id}
                className="m-1.5 ml-0 shrink rounded bg-gray-200 px-2 py-1 text-xs text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-col items-start gap-5 px-5 pb-10">
        <h3 className="text-3xl font-bold md:text-4xl">Contact Me</h3>
        <label htmlFor="contact" className="text-xl">
          Contact Informations
        </label>
        <div
          id="contact"
          className="flex w-full flex-col items-start gap-5 rounded-2xl border border-dotted border-gray-400 px-5 py-10 shadow-xs"
        >
          <div className="flex w-full flex-col items-start">
            <label id="git" className="font-bold">
              GitHub
            </label>
            <a
              href="https://github.com/y-amila-nirmal"
              id="git"
              className="text-gray-800"
            >
              y-amila-nirmal
            </a>
          </div>
          <div className="flex w-full flex-col items-start">
            <label id="email" className="font-bold">
              E-mail
            </label>
            <a
              href="mailto:yamilanirmal@gmail.com"
              id="email"
              className="text-gray-800"
            >
              yamilanirmal@gmail.com
            </a>
          </div>
          <div className="flex w-full flex-col items-start">
            <label id="number" className="font-bold">
              Phone Number
            </label>
            <a href="tel:+94752353356" id="number" className="text-gray-800">
              +94 75 235 3356
            </a>
          </div>
          <div className="flex w-full flex-col items-start">
            <label id="linkdin" className="font-bold">
              Linkdin
            </label>
            <a
              href="https://www.linkedin.com/in/amila-nirmal"
              id="linkdin"
              className="text-gray-800"
            >
              amila-nirmal
            </a>
          </div>
        </div>
        <label htmlFor="form" className="text-xl">
          Message Forum
        </label>
        <form
          id="form"
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-start gap-5 rounded-2xl border border-dotted border-gray-400 px-5 py-10 shadow-xs"
        >
          <div className="flex w-full flex-col items-center md:flex-row md:items-start md:gap-5">
            <div className="flex w-full flex-col items-start">
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="firstName">
                  First Name&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="lastName">
                  Last Name&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Silva"
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="email">
                  E-Mail&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  placeholder="john.doe@example.com"
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="company">
                  Company&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  placeholder="Your Company Name"
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="phone">
                  Phone&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  placeholder="+94 75 123 4567"
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="subject">
                  Subject&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
              <div className="mt-5 flex w-full flex-col space-y-2">
                <label className="text-sm" htmlFor="message">
                  Message&nbsp;<span className="text-red-500">*</span>
                </label>
                <input
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us more about your inquiry..."
                  className="focus:ring-ring w-full rounded-sm border border-dotted border-gray-400 p-0.5 px-3 shadow"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-2xl border border-gray-400 py-3 font-medium hover:bg-gray-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
