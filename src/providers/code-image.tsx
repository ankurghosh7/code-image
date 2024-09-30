"use client";

import { LenguageProps, SizeProps, ThemeProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import themes from "../../default-theme.json";
import { findTheme } from "@/utils/theme";
import { findLanguage, findSize } from "@/utils/language";
import { defaultMode, defaultPadding, defaultTab } from "@/constants";
import GetCode from "@/utils/chose-random-code-snippet";
import { removeParams, setToUrl } from "@/utils/params";
import createUrl from "@/utils/create-url";
import * as htmlToImage from "html-to-image";

import { sizes } from "@/constants";
interface CodeImageContextProps {
  defaultValues: {
    defaultPadding: number;
    defaultTheme: string;
    defaultMode: "dark" | "light";
    defaultTab: number;
    defaultCode: string;
    defaultLanguage: string;
  };

  theme: ThemeProps;
  padding: number;
  mode: "dark" | "light";
  language: LenguageProps;
  tab: number;
  size: SizeProps;
  changeTheme: (theme: string) => void;
  chnagePadding: (padding: string) => void;
  chnageMode: (mode: boolean) => void;
  changeLanguage: (language: string) => void;
  chnageTab: (tab: string) => void;
  changeSize: (size: string) => void;
  setDefaultCode: React.Dispatch<React.SetStateAction<string>>;
  canvasRef: RefObject<HTMLDivElement>;
  CaptureImage(): void;
}

interface CodeImageProviderProps {
  children: React.ReactNode;
}

const CodeImageContext = createContext<CodeImageContextProps>(
  {} as CodeImageContextProps
);

export function useCodeImage() {
  return useContext(CodeImageContext);
}

export function CodeImageProvider({ children }: CodeImageProviderProps) {
  const searchParams = useSearchParams();
  const SetSearchParams = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();
  const canvasRef = useRef<HTMLDivElement>(null);
  const defaultTheme = useMemo(() => {
    return themes.find((t) => t?.default === true) ?? themes[0];
  }, []);

  const code = useMemo(() => {
    const code = GetCode();
    return {
      code: code.code,
      lang: code.lang,
    };
  }, []);

  const [theme, setTheme] = useState<ThemeProps>(themes[0]);

  const [padding, setPadding] = useState<number>(defaultPadding);
  const [mode, setMode] = useState<"dark" | "light">(defaultMode);
  const [language, setLanguage] = useState<LenguageProps>(
    findLanguage(code.lang)
  );
  const [size, setSize] = useState<SizeProps>(sizes[0]);
  const [tab, setTab] = useState<number>(defaultTab);
  const [defaultCode, setDefaultCode] = useState<string>(code.code);

  const changeTheme = (theme: string) => {
    if (theme === defaultTheme.name) {
      setTheme(findTheme(theme));
      removeParams("t", SetSearchParams);
    }
    setToUrl("t", theme, SetSearchParams);
    setTheme(findTheme(theme));

    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  };
  const changeLanguage = (language: string) => {
    if (language === code.lang) {
      setLanguage(findLanguage(language));
      removeParams("la", SetSearchParams);
    }
    setToUrl("la", language, SetSearchParams);
    setLanguage(findLanguage(language));
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  };
  const chnagePadding = (padding: string) => {
    if (parseInt(padding) === defaultPadding) {
      setPadding(defaultPadding);
      removeParams("p", SetSearchParams);
    } else {
      setToUrl("p", padding, SetSearchParams);
      setPadding(parseInt(padding));
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  };
  function chnageMode(value: boolean) {
    if (value) {
      setMode(defaultMode);
      removeParams("m", SetSearchParams);
    } else {
      setToUrl("m", "false", SetSearchParams);
      setMode("light");
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }

  function chnageTab(tab: string) {
    if (parseInt(tab) === defaultTab) {
      setTab(defaultTab);
      removeParams("tb", SetSearchParams);
    } else {
      setToUrl("tb", tab, SetSearchParams);
      setTab(parseInt(tab));
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }

  function changeSize(size: string) {
    console.log(size);
  }
  async function CaptureImage() {
    if (!canvasRef.current) {
      return;
    }
    const dataUrl = await htmlToImage.toPng(canvasRef.current, {
      quality: 1,
    });
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "code-snippet.png";
    link.click();
  }
  useEffect(() => {
    const urlTheme = searchParams.get("t");
    const urlPadding = searchParams.get("p");
    const urlMode = searchParams.get("m");
    const urlTab = searchParams.get("tb");
    const urlSize = searchParams.get("s");
    const urlLanguage = searchParams.get("la");
    if (urlTheme) {
      setTheme(findTheme(urlTheme));
    }
    if (urlPadding) {
      setPadding(parseInt(urlPadding));
    }
    if (urlMode) {
      setMode(urlMode === "false" ? "light" : "dark");
    }
    if (urlTab) {
      setTab(parseInt(urlTab));
    }
    if (urlSize) {
      setSize(findSize(urlSize));
    }
    if (urlLanguage) {
      setLanguage(findLanguage(urlLanguage));
    }
  }, [searchParams]);

  return (
    <CodeImageContext.Provider
      value={{
        defaultValues: {
          defaultTheme: defaultTheme.name,
          defaultMode,
          defaultPadding,
          defaultTab: defaultTab,
          defaultCode,
          defaultLanguage: code.lang,
        },
        setDefaultCode,
        tab,
        chnageTab,
        theme,
        changeTheme,
        padding,
        chnagePadding,
        mode,
        chnageMode,
        language,
        changeLanguage,
        canvasRef,
        CaptureImage,
        size,
        changeSize,
      }}
    >
      {children}
    </CodeImageContext.Provider>
  );
}
