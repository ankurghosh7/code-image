"use client";
import { useImageBox } from "@/services/image.provider";
import React from "react";

const CustomThemePopup = () => {
  const { showCustomThemePopup, toggleShowCustomThemePopup } = useImageBox();

  if (!showCustomThemePopup) return;
  return (
    <div className="w-40 h-40 rounded-md  bg-zinc-400">
      <button onClick={() => toggleShowCustomThemePopup(false)}>close</button>
    </div>
  );
};

export default CustomThemePopup;
