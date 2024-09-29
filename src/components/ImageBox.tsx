"use client";
import { useCodeImage } from "@/providers/code-image";
import { cn } from "@/utils/cn";
import { filterColor } from "@/utils/theme";
import React from "react";
import CodeBox from "./CodeBox";

const ImageBox = () => {
  const {
    theme,
    padding,
    mode,
    language: la,
    tab,
    defaultValues,
    canvasRef,
  } = useCodeImage();
  const [editorVlaue, setEditorValue] = React.useState(
    defaultValues.defaultCode
  );

  return (
    <div
      className={cn("rounded-lg h-auto w-[520px]", {})}
      style={{
        background: filterColor(theme.color, theme.deg),
        padding: `${padding}px`,
      }}
      ref={canvasRef}
    >
      <div
        className={cn(
          "w-full rounded-lg p-4 space-y-3 shadow-2xl shadow-zinc-900/50 min-h-32  ",
          {
            "bg-black/70 ": mode === "dark",
            "bg-white/80": mode === "light",
          }
        )}
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

        <CodeBox
          code={editorVlaue}
          language={la.value}
          setEditorValue={setEditorValue}
          tab={tab}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default ImageBox;
