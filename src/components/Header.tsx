"use client";
import React from "react";
import Link from "next/link";
import ThemeSwticher from "./ThemeSwticher";
import AboutDialog from "./about-dialog";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full xl:px-20 px-4">
      <div className=" h-16 grid grid-cols-[90px_1fr_110px] md:grid-cols-[auto_1fr_auto] items-center">
        <Link href="/" className="w-fit">
          <div className="flex items-center gap-x-0.5 justify-center bg-none dark:bg-gradient-to-r dark:from-white/20 dark:to-blue-400/20 rounded-md">
            <Logo />
          </div>
        </Link>
        <div></div>
        <div className="w-full flex justify-end gap-4">
          <AboutDialog />
          <ThemeSwticher />
        </div>
      </div>
    </header>
  );
};

export default Header;
