"use client";
import { useCodeImage } from "@/providers/code-image";
import React from "react";
import languages from "../../languages.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import * as RSelect from "@radix-ui/react-select";

import themes from "../../default-theme.json";
import { ThemeProps } from "@/types";
import { cn } from "@/utils/cn";
import { filterColor } from "@/utils/theme";
import { paddings, tabs as tabsList } from "@/constants";
import * as Tabs from "@radix-ui/react-tabs";
import { FiDownload } from "react-icons/fi";

const ImageBoxControls = () => {
  const { CaptureImage } = useCodeImage();
  return (
    <div className="w-fit bg-zinc-800 rounded-b-lg flex gap-4 items-end justify-center px-10 py-5 fixed top-0 left-1/2 -translate-x-1/2">
      {/* select theme */}
      <div>
        <span className="options-label">Theme</span>
        <SelectTheme />
      </div>
      {/* chnage mode */}
      <div>
        <span className="options-label">Dark Mode</span>
        <ChnageMode />
      </div>
      <div>
        <span className="options-label">Padding</span>
        <SelectPadding />
      </div>
      {/* tabs */}
      <div>
        <span className="options-label">Tabs</span>
        <TabSize />
      </div>
      <div>
        <span className="options-label">Language</span>
        <SelectLanguage />
      </div>

      <button
        className="relative inline-block group mb-1 "
        onClick={CaptureImage}
      >
        <span className="relative z-10 block px-2 py-1 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border border-orange-500 rounded-lg text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-800"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
          <span className="relative flex items-center gap-2">
            <FiDownload className="size-4" />
            Save
          </span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-7 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  );
};

export default ImageBoxControls;

function SelectLanguage() {
  const { language, changeLanguage, defaultValues } = useCodeImage();

  return (
    <Select onValueChange={changeLanguage} value={language.value}>
      <SelectTrigger className="w-fit h-fit py-1 px-2 rounded-lg bg-zinc-900 min-w-28 border-zinc-700">
        <SelectValue asChild>
          <span>
            {language.value === defaultValues.defaultLanguage
              ? `${language.value} (auto)`
              : language.value}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-zinc-900">
        {languages.map((lenguage) => (
          <SelectItem key={lenguage.value} value={lenguage.value}>
            {lenguage.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function SelectPadding() {
  const { padding, chnagePadding } = useCodeImage();

  return (
    <Select onValueChange={chnagePadding} value={String(padding)}>
      <SelectTrigger className="w-fit h-fit py-1 px-2 rounded-lg bg-zinc-900 border-zinc-700">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-zinc-900">
        {paddings.map((p) => (
          <SelectItem key={p} value={String(p)}>
            {p}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function SelectTheme() {
  // default theme
  const { theme, changeTheme } = useCodeImage();
  return (
    <Select onValueChange={changeTheme} defaultValue={theme.name}>
      <SelectTrigger className="w-fit h-fit py-1 px-2 rounded-lg bg-zinc-900 border-zinc-700 min-w-32">
        <RSelect.Value asChild>
          <div className="w-full flex flex-row gap-2 select-none items-center capitalize">
            <div
              className={cn("size-4 rounded-full", {})}
              style={{
                background: filterColor(theme.color, theme.deg),
              }}
            />
            {theme.name}
          </div>
        </RSelect.Value>
      </SelectTrigger>
      <SelectContent className="bg-zinc-900">
        {themes.map((t: ThemeProps) => {
          const bg = filterColor(t.color, t.deg);
          return (
            <SelectItem
              key={t.name}
              value={t.name}
              className=""
              defaultValue={theme.name}
            >
              <div className="w-full flex flex-row gap-2 capitalize">
                <div
                  className={cn("size-4 rounded-full", {})}
                  style={{
                    background: bg,
                  }}
                />
                {t.name}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

function ChnageMode() {
  const { mode, chnageMode } = useCodeImage();

  return (
    <div className="checkbox-wrapper-51">
      <input
        type="checkbox"
        id="cbx-51"
        className="invisible hidden"
        checked={mode === "dark"}
        onChange={(e) => {
          chnageMode(e.target.checked);
        }}
      />
      <label
        htmlFor="cbx-51"
        className="toggle before:content-[''] before:relative before:top-px before:left-px before:w-10 before:h-[22px] before:block before:bg-[#c8ccd4] before:rounded-xl before:[transition:background_0.2s_ease] relative block w-10 h-6 cursor-pointer [transform:translate3d(0,_0,_0)]"
      >
        <span className="absolute top-[0] left-[0] w-[24px] h-[24px] block bg-[#fff] rounded-[50%] [box-shadow:0_2px_6px_rgba(154,153,153,0.75)] [transition:all_0.2s_ease]">
          <svg
            width="10px"
            height="10px"
            viewBox="0 0 10 10"
            className="fill-none m-2"
          >
            <path
              d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"
              className="stroke-[#c8ccd4] stroke-[2] [transition:all_0.5s_linear] [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:24] [stroke-dashoffset:0]"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
}

function TabSize() {
  const { tab, chnageTab } = useCodeImage();

  return (
    <Tabs.Root value={String(tab)} onValueChange={chnageTab}>
      <Tabs.List className="flex items-center gap-2 transition-all duration-300 ease-in-out">
        {tabsList.map((t) => (
          <Tabs.Trigger
            key={t}
            value={String(t)}
            className="py-1 px-2 rounded-lg data-[state=active]:dark:bg-zinc-900 dark:data-[state=active]:border border-zinc-600 text-sm transition-transform duration-500 ease-in-out dark:hover:bg-zinc-900"
          >
            {t}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}
