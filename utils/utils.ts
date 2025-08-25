import { useEffect, useState } from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ScreenSize {
  width: number;
  height: number;
  isLoaded: boolean;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 1920,
    height: 1080,
    isLoaded: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.screen.width;
      const height = window.screen.height;

      setScreenSize({ width, height, isLoaded: true });
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);
    window.addEventListener("orientationchange", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("orientationchange", updateScreenSize);
    };
  }, []);

  return screenSize;
}
