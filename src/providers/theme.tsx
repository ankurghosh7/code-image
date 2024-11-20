"use client";

import { useContext, createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // get local theme
  const ISSERVER = typeof window === "undefined";

  // theme state
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (!ISSERVER) {
      const localTheme = localStorage.getItem("theme");
      if (localTheme) {
        setTheme(localTheme as "light" | "dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [ISSERVER]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.classList.add("dark");
      if (!ISSERVER) localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", theme);

      document.documentElement.classList.remove("dark");
      if (!ISSERVER) localStorage.setItem("theme", "light");
    }
  }, [theme, ISSERVER]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
