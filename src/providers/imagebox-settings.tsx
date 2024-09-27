"use client";

import { LenguageProps, ThemeProps } from "@/types";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import themes from "../../default-theme.json";
import languages from "../../languages.json";
import { findTheme } from "@/utils/theme";
interface ImageBoxSettingsContextProps {
  defaultValues: {
    defaultPadding: number;
    defaultTheme: ThemeProps;
    defaultLanguage: LenguageProps;
    defaultMode: "dark" | "light";
    defaultTabs: number;
  };

  theme: ThemeProps;
  padding: number;
  mode: "dark" | "light";
  language: LenguageProps;
  tabs: number;
  setTheme: (theme: ThemeProps) => void;
  setPadding: (padding: number) => void;
  setMode: (mode: "dark" | "light") => void;
  setLanguage: (language: LenguageProps) => void;
  setTabs: (tabs: number) => void;
  searchParams: ReadonlyURLSearchParams;
}

interface ImageBoxSettingsProviderProps {
  children: React.ReactNode;
}

const ImageBoxSettingsContext = createContext<ImageBoxSettingsContextProps>(
  {} as ImageBoxSettingsContextProps
);

export function useImageBoxSettings() {
  return useContext(ImageBoxSettingsContext);
}

export function ImageBoxSettingsProvider({
  children,
}: ImageBoxSettingsProviderProps) {
  const searchParams = useSearchParams();
  const defaultTheme = themes[0];
  const defaultPadding = 65;
  const defaultMode = "dark";
  const defaultLanguage = languages[0];

  const [theme, setTheme] = useState<ThemeProps>(
    themes.find((t) => t.default) ?? defaultTheme
  );
  const [padding, setPadding] = useState<number>(defaultPadding);
  const [mode, setMode] = useState<"dark" | "light">(defaultMode);
  const [language, setLanguage] = useState<LenguageProps>(defaultLanguage);
  // const [size, setSize] = useState<number>(0);
  const [tabs, setTabs] = useState<number>(2);
  useEffect(() => {
    const getUrlTheme = searchParams.get("t");
    const getUrlPadding = searchParams.get("p");
    const getUrlMode = searchParams.get("m");
    const getUrlTabs = searchParams.get("tb");
    if (getUrlTheme) {
      setTheme(findTheme(getUrlTheme, themes));
    }
    if (getUrlPadding) {
      console.log(parseInt(getUrlPadding), "padding");
      setPadding(parseInt(getUrlPadding));
    }
    if (getUrlMode) {
      setMode(getUrlMode === "false" ? "light" : "dark");
    }
    if (getUrlTabs) {
      setTabs(parseInt(getUrlTabs));
    }
  }, [searchParams]);

  return (
    <ImageBoxSettingsContext.Provider
      value={{
        defaultValues: {
          defaultTheme,
          defaultLanguage,
          defaultMode,
          defaultPadding,
          defaultTabs: 2,
        },
        tabs,
        setTabs,
        theme,
        setTheme,
        padding,
        setPadding,
        mode,
        setMode,
        language,
        setLanguage,
        searchParams,
      }}
    >
      {children}
    </ImageBoxSettingsContext.Provider>
  );
}
