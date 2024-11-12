"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwticher from "./theme-swticher";
import AboutDialog from "./about-dialog";

const Header = () => {
  return (
    <header className="w-full xl:px-20 ">
      <div className=" h-16 grid grid-cols-[100px_1fr_100px] items-center">
        <Link href="/">
          <div className="flex items-center gap-x-0.5 justify-center bg-none dark:bg-gradient-to-r dark:from-green-400/20 dark:to-blue-400/20">
            <Image
              alt="logo"
              src={"/left-icon.svg"}
              width={25}
              height={30}
              className="w-6 h-8"
            />
            <Image
              alt="logo"
              src={"/name.svg"}
              width={150}
              height={36}
              className=" w-28 h-6 mb-1 dark:invert invert-0"
            />
            <Image
              alt="logo"
              src={"/right-icon.svg"}
              width={25}
              height={30}
              className="w-6 h-8"
            />
          </div>
        </Link>
        <nav>
          <ul className="w-full flex items-center justify-center gap-8"></ul>
        </nav>

        <div className="w-full flex justify-end gap-4">
          <AboutDialog />
          <ThemeSwticher />
        </div>
      </div>
    </header>
  );
};

export default Header;
