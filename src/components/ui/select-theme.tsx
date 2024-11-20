import React from "react";
import * as RSelect from "@radix-ui/react-select";

import themes from "../../../default-theme.json";
import { ThemeProps } from "@/types";
import { cn } from "@/utils/cn";
import { filterColor } from "@/utils/theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useImageBox } from "@/providers/image-box";
const SelectTheme = () => {
  const { theme, changeTheme } = useImageBox();
  return (
    <Select onValueChange={changeTheme} defaultValue={theme.name}>
      <SelectTrigger className="control-trigger group min-w-32 duration-300 [&:nth-child(2)]:[&_span]:data-[state=open]:-translate-x-40">
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
        <span className="control-trigger-sine"></span>
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-900 bg-zinc-300">
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
};

export default SelectTheme;
