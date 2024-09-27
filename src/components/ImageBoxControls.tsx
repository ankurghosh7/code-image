"use client";
import { useImageBoxSettings } from "@/providers/imagebox-settings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import { filterColor, findTheme } from "@/utils/theme";
import { removeParams, setToUrl } from "@/utils/params";
import createUrl from "@/utils/create-url";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { findLanguage } from "@/utils/language";
import { tabs as tabsList } from "@/constants";
import * as Tabs from "@radix-ui/react-tabs";

interface baseProps {
  searchParams: URLSearchParams;
  router: AppRouterInstance;
  pathname: string;
}
const ImageBoxControls = ({ defaultLean }: { defaultLean: string }) => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(params.toString());
  return (
    <div className="w-fit bg-zinc-800 rounded-lg flex gap-4 items-start px-10 py-5 ">
      {/* select theme */}
      <div>
        <span className="options-label">Theme</span>
        <SelectTheme
          searchParams={searchParams}
          pathname={pathname}
          router={router}
        />
      </div>
      {/* chnage mode */}
      <div>
        <span className="options-label">Dark Mode</span>
        <ChnageMode
          searchParams={searchParams}
          pathname={pathname}
          router={router}
        />
      </div>
      <div>
        <span className="options-label">Padding</span>
        <SelectPadding
          searchParams={searchParams}
          pathname={pathname}
          router={router}
        />
      </div>
      {/* tabs */}
      <div>
        <span className="options-label">Tabs</span>
        <TabSize
          searchParams={searchParams}
          pathname={pathname}
          router={router}
        />
      </div>
      <div>
        <span className="options-label">Language</span>
        <SelectLanguage
          searchParams={searchParams}
          pathname={pathname}
          router={router}
          le={defaultLean}
        />
      </div>
    </div>
  );
};

export default ImageBoxControls;

interface SelectLanguageProps extends baseProps {
  le: string;
}

function SelectLanguage({
  pathname,
  router,
  le,
  searchParams,
}: SelectLanguageProps) {
  const { language, setLanguage, defaultValues } = useImageBoxSettings();
  const getUrlLanguage = searchParams.get("la");
  if (getUrlLanguage) {
    setLanguage(findLanguage(getUrlLanguage, languages));
  } else if (le) {
    setLanguage(findLanguage(le, languages));
  }
  function onChange(value: string) {
    if (value === defaultValues.defaultLanguage.value) {
      setLanguage(defaultValues.defaultLanguage);
      removeParams("la", searchParams);
    } else {
      setToUrl("la", value, searchParams);
      setLanguage(findLanguage(value, languages));
    }
    router.push(createUrl(pathname, searchParams), {
      scroll: false,
    });
  }

  return (
    <Select onValueChange={onChange} value={language.value}>
      <SelectTrigger className="w-fit h-fit py-1 px-2 rounded-lg bg-zinc-900 min-w-28 border-zinc-700">
        <SelectValue asChild>
          <span>
            {language.value === le
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

function SelectPadding({ pathname, router, searchParams }: baseProps) {
  const { padding, setPadding, defaultValues } = useImageBoxSettings();
  const paddings = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
  const onChange = (value: string) => {
    if (parseInt(value) === defaultValues.defaultPadding) {
      setPadding(defaultValues.defaultPadding);
      removeParams("p", searchParams);
    } else {
      setToUrl("p", value, searchParams);
      setPadding(parseInt(value));
    }
    router.push(createUrl(pathname, searchParams), {
      scroll: false,
    });
  };

  return (
    <Select onValueChange={onChange} value={String(padding)}>
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

function SelectTheme({ pathname, router, searchParams }: baseProps) {
  // default theme
  const { theme, setTheme, defaultValues } = useImageBoxSettings();

  const onChange = (vlaue: string) => {
    if (vlaue === defaultValues.defaultTheme.name) {
      setTheme(defaultValues.defaultTheme);
      removeParams("t", searchParams);
    } else {
      setToUrl("t", vlaue, searchParams);
      setTheme(findTheme(vlaue, themes));
    }
    router.push(createUrl(pathname, searchParams), {
      scroll: false,
    });
  };

  return (
    <Select onValueChange={onChange} defaultValue={theme.name}>
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

function ChnageMode({ pathname, router, searchParams }: baseProps) {
  const { mode, setMode, defaultValues } = useImageBoxSettings();
  function onChange(value: boolean) {
    if (value) {
      setMode(defaultValues.defaultMode);
      removeParams("m", searchParams);
    } else {
      setToUrl("m", "false", searchParams);
      setMode("light");
    }
    router.push(createUrl(pathname, searchParams), {
      scroll: false,
    });
  }

  return (
    <div className="checkbox-wrapper-51">
      <input
        type="checkbox"
        id="cbx-51"
        className="invisible hidden"
        checked={mode === "dark"}
        onChange={(e) => {
          onChange(e.target.checked);
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

function TabSize({ pathname, router, searchParams }: baseProps) {
  const { tabs, setTabs, defaultValues } = useImageBoxSettings();
  const onChange = (value: string) => {
    if (parseInt(value) === defaultValues.defaultTabs) {
      setTabs(defaultValues.defaultTabs);
      removeParams("tb", searchParams);
    } else {
      setToUrl("tb", value, searchParams);
      setTabs(parseInt(value));
    }
    router.push(createUrl(pathname, searchParams), {
      scroll: false,
    });
  };
  return (
    <Tabs.Root value={String(tabs)} onValueChange={onChange}>
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
