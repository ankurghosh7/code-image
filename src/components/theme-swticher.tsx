"use client";
import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeSwticher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className={cn("w-fit p-2 rounded-full dark:bg-zinc-600 bg-zinc-300")}
      >
        {theme === "light" ? <IoMoon /> : <IoSunny />}
      </button>
    </>
  );
};

export default ThemeSwticher;
