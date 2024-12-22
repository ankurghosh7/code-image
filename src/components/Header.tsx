"use client";
import React from "react";
import Link from "next/link";
import ThemeSwticher from "./ThemeSwticher";
import AboutDialog from "./AboutDialog";
import Image from "next/image";
import { MdOutlineSaveAlt } from "react-icons/md";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="w-full py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Code Image"
            width={150}
            height={50}
            className="cursor-pointer w-28"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <AboutDialog />
          <ThemeSwticher />
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <button className="p-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <MdOutlineSaveAlt className="size-5" />
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
