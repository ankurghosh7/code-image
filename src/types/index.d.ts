import { IconType } from "react-icons";

export interface LenguageProps {
  label: string;
  value: string;
}

export interface ThemeProps {
  name: string;
  color: string[];
  deg: number;
  default?: boolean;
  dropColor: string;
}

export interface SizeProps {
  name: string;
  width: number;
  height: number;
}

export interface LogoType {
  name: string;
  icon: IconType;
}

export type WatermarkPosition = "left" | "right" | "center";
