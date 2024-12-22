import { useImageBox } from "@/services/image.provider";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import WatermarkPopover from "./ui/watermark-popup";

const Watermark = () => {
  const { watermark, watermarkPosition } = useImageBox();

  const [inputBrandTagValue, setInputBrandTagValue] = useState<string>("");

  const inputWidth = `${Math.max(40, 20 + inputBrandTagValue.length * 7)}px`; // Adjust the multiplier as needed
  return (
    <div
      className={cn("flex w-full absolute bottom-3 left-0 px-5", {
        "justify-center": watermarkPosition === "center",
        "justify-end": watermarkPosition === "right",
        "justify-start": watermarkPosition === "left",
      })}
    >
      <div
        className={cn("flex gap-[2px] items-stretch min-w-24 max-w-full", {
          "hidden invisible opacity-0": !watermark,
        })}
      >
        <WatermarkPopover />
        <input
          id="brandInput"
          className="flex-1 bg-transparent border-none outline-none focus:outline-none text-sm min-w-0  text-black placeholder:text-black font-medium transition-all duration-300 ease-in-out"
          placeholder="watermark"
          value={inputBrandTagValue}
          style={{ width: inputWidth }}
          onChange={(e) => setInputBrandTagValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Watermark;
