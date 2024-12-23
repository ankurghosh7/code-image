import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 text-center text-xs md:text-sm text-muted-foreground min-h-16 w-full bg-gray-400 text-black dark:text-white dark:bg-zinc-800 flex justify-center md:justify-end items-center xl:px-20 font-medium">
      <div>
        <p className="text-black dark:text-white">
          Copyright © 2024 - All right reserved by{" "}
          <Link
            href={"https://www.ankurghosh.xyz/copy-right"}
            className="underline underline-offset-1 text-blue-500 transition-colors duration-300"
            target="_blank"
          >
            Ankur Ghosh
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
