import React from "react";
import WindowControlBtns from "./window-control-btns";
import { useCodeBox } from "@/providers/code-box";

const CodeBoxHeader = () => {
  const { showBoxTitle, showControlTheme } = useCodeBox();
  if (!showBoxTitle && !showControlTheme) return null;
  return (
    <div className="grid grid-cols-[50px_1fr_50px] ">
      <div className="flex items-center justify-center gap-2">
        {showControlTheme && <WindowControlBtns />}
      </div>
      {showBoxTitle && (
        <input
          placeholder="Untitled"
          className="w-full border-none text-center placeholder:text-center focus:outline-none bg-transparent text-sm"
        />
      )}
    </div>
  );
};

export default CodeBoxHeader;
