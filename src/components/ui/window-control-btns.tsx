import { useCodeBox } from "@/services/editor.provider";
import { cn } from "@/utils/cn";
import React from "react";

const WindowControlBtns = () => {
  const { controlTheme } = useCodeBox();

  return (
    <>
      <div
        className={cn("size-3 rounded-full ", {
          "bg-red-500": controlTheme === "mac",
          "bg-transparent border": controlTheme === "outline",
          "bg-zinc-700 border": controlTheme === "outline-fill",
          "bg-zinc-600/85": controlTheme === "fill",
        })}
      ></div>
      <div
        className={cn("size-3 rounded-full ", {
          "bg-yellow-400": controlTheme === "mac",
          "bg-transparent border": controlTheme === "outline",
          "bg-zinc-700 border": controlTheme === "outline-fill",
          "bg-zinc-600/85": controlTheme === "fill",
        })}
      ></div>
      <div
        className={cn("size-3 rounded-full ", {
          "bg-green-500": controlTheme === "mac",
          "bg-transparent border": controlTheme === "outline",
          "bg-zinc-700 border": controlTheme === "outline-fill",
          "bg-zinc-600/85": controlTheme === "fill",
        })}
      ></div>
    </>
  );
};

export default WindowControlBtns;
