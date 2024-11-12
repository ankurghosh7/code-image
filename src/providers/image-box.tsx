"use client";
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
import { removeParams, setToUrl } from "@/utils/params";
import createUrl from "@/utils/create-url";
import { ThemeProps, WatermarkPosition } from "@/types";
import * as htmlToImage from "html-to-image";
import { findTheme } from "@/utils/theme";
import { defaultBrandTagPosition, defaultPadding } from "@/constants";
interface ImageBoxContextProps {
  theme: ThemeProps;
  changeTheme: (theme: string) => void;
  canvasRef: RefObject<HTMLDivElement>;
  CaptureImage(): void;
  defaultTheme: string;
  defaultPadding: number;
  padding: number;
  chnagePadding: (padding: string) => void;
  watermark: boolean;
  ToggleWatermark(tag: boolean): void;
  watermarkPosition: WatermarkPosition;
  changeWatermarkPosition(position: string): void;
}

interface ImageBoxProviderProps {
  children: React.ReactNode;
}

const ImageBoxContext = createContext<ImageBoxContextProps>(
  {} as ImageBoxContextProps
);

export function useImageBox() {
  return useContext(ImageBoxContext);
}

export function ImageBoxProvider({ children }: ImageBoxProviderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const SetSearchParams = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();

  const defaultTheme = useMemo(() => {
    return themes.find((t) => t?.default === true) ?? themes[0];
  }, []);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeProps>(themes[0]);
  const [padding, setPadding] = useState<number>(defaultPadding);
  const [watermark, setWatermark] = useState<boolean>(true);
  const [watermarkPosition, setWatermarkPosition] = useState<WatermarkPosition>(
    defaultBrandTagPosition
  );
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
  function ToggleWatermark(value: boolean) {
    if (value) {
      setWatermark(true);
      removeParams("wm", SetSearchParams);
    } else {
      setToUrl("wm", "false", SetSearchParams);
      setWatermark(false);
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }

  function changeWatermarkPosition(position: string) {
    console.log("position", position);
    if (position === defaultBrandTagPosition) {
      setWatermarkPosition(defaultBrandTagPosition);
      removeParams("wmp", SetSearchParams);
    } else if (
      position === "center" ||
      position === "right" ||
      position === "left"
    ) {
      setToUrl("wmp", position, SetSearchParams);
      setWatermarkPosition(position as WatermarkPosition);
    } else {
      setWatermarkPosition(defaultBrandTagPosition);
      removeParams("wmp", SetSearchParams);
    }
    router.push(createUrl(pathname, SetSearchParams), {
      scroll: false,
    });
  }

  useEffect(() => {
    const urlTheme = searchParams.get("t");
    const urlPadding = searchParams.get("p");
    const urlWMTab = searchParams.get("wm");
    const urlWatermarkPosition = searchParams.get("wmp");
    if (urlTheme) {
      setTheme(findTheme(urlTheme));
    }
    if (urlPadding) {
      setPadding(parseInt(urlPadding));
    }
    if (urlWMTab) {
      setWatermark(false);
    }
    if (urlWatermarkPosition) {
      setWatermarkPosition(urlWatermarkPosition as WatermarkPosition);
    }
  }, [searchParams]);
  return (
    <ImageBoxContext.Provider
      value={{
        theme,
        changeTheme,
        canvasRef,
        CaptureImage,
        defaultTheme: defaultTheme.name,
        padding,
        chnagePadding,
        defaultPadding,
        watermark,
        ToggleWatermark,
        watermarkPosition,
        changeWatermarkPosition,
      }}
    >
      {children}
    </ImageBoxContext.Provider>
  );
}
