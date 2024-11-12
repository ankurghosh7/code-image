import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-muted-foreground min-h-16 w-full bg-gray-400 dark:bg-zinc-800 flex justify-end items-center xl:px-20 font-medium">
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link
            href={"https://www.ankurghosh.xyz/copy-right"}
            className="underline underline-offset-1 hover:text-blue-600 transition-colors duration-300"
            target="_blank"
          >
            Ankur Ghosh
          </Link>
        </p>
      </div>
      {/* <div className="flex items-center gap-4">
        <Link
          href={"/privacy"}
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Privacy Policy
        </Link>
        <Link
          href={"/terms"}
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Terms & Conditions
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
