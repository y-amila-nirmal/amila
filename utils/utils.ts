import { useEffect, useState, useCallback } from "react";
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

export function useToast(): {
  toast: (options: { title: string; description?: string }) => void;
} {
  const toast = useCallback(
    ({ title, description }: { title: string; description?: string }) => {
      if (typeof window !== "undefined") {
        window.alert(`${title}${description ? "\n" + description : ""}`);
      }
    },
    [],
  );
  return { toast };
}
