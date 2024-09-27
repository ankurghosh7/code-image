"use client";
import { useImageBoxSettings } from "@/providers/imagebox-settings";
import { cn } from "@/utils/cn";
import { filterColor } from "@/utils/theme";
import React from "react";
import HljsCodeBox from "./HljsCodeBox";

const ImageBox = ({
  defaultCode,
}: {
  defaultCode: string;
  language: string;
}) => {
  const { theme, padding, mode, language: la, tabs } = useImageBoxSettings();
  const [editorVlaue, setEditorValue] = React.useState(defaultCode);
  return (
    <div
      className={cn("rounded-lg h-auto w-[520px]", {})}
      style={{
        background: filterColor(theme.color, theme.deg),
        padding: `${padding}px`,
      }}
    >
      <div
        className={cn("w-full rounded-lg p-4 space-y-3 shadow-md min-h-32 ", {
          "bg-black/70 ": mode === "dark",
          "bg-white/80": mode === "light",
        })}
      >
        <div className="grid grid-cols-[50px_1fr_50px]">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="size-3 rounded-full bg-zinc-600/80"></div>
            ))}
          </div>
          <input
            placeholder="Untitled"
            className="w-full border-none text-center placeholder:text-center focus:outline-none bg-transparent text-sm"
          />
        </div>

        {/* code box */}
        <HljsCodeBox
          code={editorVlaue}
          language={la.value}
          setEditorValue={setEditorValue}
          tab={tabs}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default ImageBox;
