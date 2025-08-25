"use client";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";

import { cn, useScreenSize } from "@/utils/utils";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const screenSize = useScreenSize();

  // Provide fallback values if screenSize is not loaded yet
  const width = screenSize.isLoaded ? screenSize.width : 0;
  const height = screenSize.isLoaded ? screenSize.height : 0;
  const xPositive = useTransform(scrollYProgress, [0, 0.5], [0, width + 500]);
  const yNegative = useTransform(scrollYProgress, [0, 0.5], [0, -width - 500]);
  const xNegative = useTransform(scrollYProgress, [0, 0.5], [0, -width - 550]);

  const heroYPositive = useTransform(scrollYProgress, [0.1, 0.3], [height, 0]);

  return (
    <div className="h-[5000px] w-full overflow-x-hidden">
      <main className="relative flex h-dvh w-full items-center">
        <div className="fixed flex h-full w-full flex-col items-center justify-center gap-10">
          {width > 450 ? (
            <div className="flex flex-col items-center">
              <motion.h1
                style={{ x: xNegative }}
                className="text-center text-6xl font-extrabold md:text-8xl lg:text-9xl"
              >
                I'm Full Stack
              </motion.h1>
              <motion.h1
                style={{ x: xPositive }}
                className="text-center text-6xl font-extrabold md:text-8xl lg:text-9xl"
              >
                Developer
              </motion.h1>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <motion.h1
                style={{ y: yNegative }}
                className="text-center text-8xl font-black"
              >
                I'm
              </motion.h1>
              <div className="flex flex-row items-start gap-5">
                <motion.h1
                  style={{ writingMode: "vertical-rl", x: xPositive }}
                  className="rotate-180 text-center text-7xl font-black"
                >
                  Full Stack
                </motion.h1>
                <motion.h1
                  style={{ writingMode: "vertical-rl", x: xPositive }}
                  className="text-center text-7xl font-black"
                >
                  Developer
                </motion.h1>
              </div>
            </div>
          )}
        </div>
        <div className="fixed flex h-full w-full flex-col items-center justify-center">
          <motion.div
            style={{
              y: heroYPositive,
            }}
            className="mx-2.5 flex max-w-2xl flex-col items-center gap-5 rounded-2xl px-5 py-10 xl:max-w-4xl xl:flex-row xl:px-5 xl:py-5"
          >
            <Image
              className="w-40 md:w-2xs 2xl:w-md"
              src={HeroImage}
              alt="hero-image"
            />
            <div className="flex w-full flex-col items-start gap-2.5 px-5">
              <h1 className="text-2xl font-bold md:text-4xl">
                I'm Amila Nirmal
              </h1>
              <p className="text-justify text-sm font-medium md:text-xl">
                I'm a university student at Rajarata University of Sri Lanka,
                currently pursuing a degree in Information and Communication
                Technology. My focus is on becoming a full-stack developer.
                Academically, I work on web development, human-computer
                interaction, and object-oriented programming. I've also gained
                practical experience by working on several projects.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
