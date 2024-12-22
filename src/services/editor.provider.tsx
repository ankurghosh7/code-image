"use client";

import { LenguageProps, SizeProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { findLanguage, findSize } from "@/utils/language";
import { controlThemes, defaultMode, defaultTab } from "@/constants";
import GetCode from "@/utils/chose-random-code-snippet";
import { removeParams, setToUrl } from "@/utils/params";
import createUrl from "@/utils/create-url";

import { sizes } from "@/constants";
interface CodeBoxContextProps {
  defaultValues: {
    defaultMode: "dark" | "light";
    defaultTab: number;
    defaultCode: string;
    defaultLanguage: string;
    defaultControlTheme: string;
  };
  controlTheme: string;
  showControlTheme: boolean;
  mode: "dark" | "light";
  language: LenguageProps;
  tab: number;
  size: SizeProps;
  chnageMode: (mode: boolean) => void;
  changeLanguage: (language: string) => void;
  chnageTab: (tab: string) => void;
  changeSize: (size: string) => void;
  setDefaultCode: React.Dispatch<React.SetStateAction<string>>;
  changeControlTheme: (theme: string) => void;
  toggleControlTheme: (value: boolean) => void;
  showBoxTitle: boolean;
  toggleBoxTitle: (value: boolean) => void;
  backgroundOpacity: number;
  changeBackgroundOpacity: (value: number) => void;
}

interface CodeImageProviderProps {
  children: React.ReactNode;
}

const CodeBoxContext = createContext<CodeBoxContextProps>(
  {} as CodeBoxContextProps
);

export function useCodeBox() {
  return useContext(CodeBoxContext);
}

export function CodeBoxProvider({ children }: CodeImageProviderProps) {
  const searchParams = useSearchParams();
  const SetSearchParams = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();

  const code = useMemo(() => {
    const code = GetCode();
    return {
      code: code.code,
      lang: code.lang,
    };
  }, []);

  const [mode, setMode] = useState<"dark" | "light">(defaultMode);
  const [language, setLanguage] = useState<LenguageProps>(
    findLanguage(code.lang)
  );
  const [size, setSize] = useState<SizeProps>(sizes[0]);
  const [tab, setTab] = useState<number>(defaultTab);
  const [defaultCode, setDefaultCode] = useState<string>(code.code);

  const [showControlTheme, setShowControlTheme] = useState<boolean>(true);
  const [controlTheme, setControlTheme] = useState<string>(
    controlThemes[0].name
  );
  const [showBoxTitle, setShowBoxTitle] = useState<boolean>(true);
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(75);
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

  function toggleControlTheme(value: boolean) {
    if (value) {
      setShowControlTheme(true);
      removeParams("ct", SetSearchParams);
    } else {
      setToUrl("ct", "false", SetSearchParams);
      setShowControlTheme(false);
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }
  function changeControlTheme(theme: string) {
    if (theme === controlThemes[0].name) {
      setControlTheme(theme);
      removeParams("ctt", SetSearchParams);
    } else {
      setToUrl("ctt", theme, SetSearchParams);
      setControlTheme(theme);
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }
  function toggleBoxTitle(value: boolean) {
    if (value) {
      setShowBoxTitle(true);
      removeParams("bt", SetSearchParams);
    } else {
      setToUrl("bt", "false", SetSearchParams);
      setShowBoxTitle(false);
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }

  function changeBackgroundOpacity(value: number) {
    if (value === 75 || value > 100) {
      setBackgroundOpacity(75);
      removeParams("bo", SetSearchParams);
    } else {
      setBackgroundOpacity(value);
      setToUrl("bo", value.toString(), SetSearchParams);
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
    setBackgroundOpacity(value);
  }
  useEffect(() => {
    const urlMode = searchParams.get("m");
    const urlTab = searchParams.get("tb");
    const urlSize = searchParams.get("s");
    const urlLanguage = searchParams.get("la");
    const urlControlTheme = searchParams.get("ctt");
    const urlShowControlTheme = searchParams.get("ct");
    const urlBackgroundOpacity = searchParams.get("bo");
    const urlBoxTitle = searchParams.get("bt");
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
    if (urlControlTheme) {
      setControlTheme(urlControlTheme);
    }
    if (urlShowControlTheme) {
      setShowControlTheme(urlShowControlTheme === "false" ? false : true);
    }
    if (urlBackgroundOpacity) {
      setBackgroundOpacity(parseInt(urlBackgroundOpacity));
    }
    if (urlBoxTitle) {
      setShowBoxTitle(urlBoxTitle === "false" ? false : true);
    }
  }, [searchParams]);

  return (
    <CodeBoxContext.Provider
      value={{
        defaultValues: {
          defaultMode,
          defaultTab: defaultTab,
          defaultCode,
          defaultLanguage: code.lang,
          defaultControlTheme: controlThemes[0].name,
        },
        setDefaultCode,
        tab,
        chnageTab,

        mode,
        chnageMode,
        language,
        changeLanguage,

        size,
        changeSize,
        changeControlTheme,
        controlTheme,
        showControlTheme,
        toggleControlTheme,
        showBoxTitle,
        toggleBoxTitle,
        changeBackgroundOpacity,
        backgroundOpacity,
      }}
    >
      {children}
    </CodeBoxContext.Provider>
  );
}
