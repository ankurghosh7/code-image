"use client";
import React from "react";
import Link from "next/link";
import ThemeSwticher from "./ThemeSwticher";
import AboutDialog from "./AboutDialog";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MobileImageSaveBtn } from "./ImageSaveBtn";

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
          <AboutDialog
            button={
              <button className="p-2 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full transition-colors">
                <AiOutlineInfoCircle className="size-5" />
              </button>
            }
          />
          <ThemeSwticher />
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <MobileImageSaveBtn />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
