"use client";
import { useTheme } from "@/providers/theme";
import { IoSunny, IoMoon } from "react-icons/io5";
import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="w-full xl:px-20 ">
      <div className=" h-16 grid grid-cols-[100px_1fr_100px] items-center">
        <Link href="/">Code Image</Link>
        <nav>
          <ul className="w-full flex items-center justify-center gap-8"></ul>
        </nav>

        <div className="w-full flex justify-end">
          <button
            onClick={toggleTheme}
            className={cn("w-fit p-2 rounded-full dark:bg-zinc-600")}
          >
            {theme === "light" ? <IoMoon /> : <IoSunny />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
