import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/code-image-logo.svg"}
      alt=""
      width={200}
      height={150}
      className="cursor-pointer select-none lg:w-32 h-auto"
    />
  );
};

export default Logo;
