"use client";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { useImageBox } from "@/services/image.provider";

const ImageSaveBtn = () => {
  const { CaptureImage } = useImageBox();

  return (
    <button
      className="relative group mb-1 hidden lg:inline-block"
      onClick={CaptureImage}
    >
      <div className="relative z-10 block p-2 lg:px-2 lg:py-1 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border border-orange-500 rounded-full lg:rounded-lg text-white">
        <span className="absolute inset-0 w-full h-full p-3 lg:px-5 lg:py-3 rounded-full lg:rounded-lg bg-orange-800"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
        <div className="relative flex items-center gap-2">
          <FiDownload className="size-5 lg:size-4" />
          <span className="hidden lg:inline">Save</span>
        </div>
      </div>
      <span
        className="absolute bottom-0 right-0 w-full h-0 lg:h-7 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-full lg:rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
};

export default ImageSaveBtn;

export function MobileImageSaveBtn() {
  const { CaptureImage } = useImageBox();

  return (
    <button
      className="relative inline-block group mb-1 lg:hidden "
      onClick={CaptureImage}
    >
      <div className="relative z-10 block p-2 lg:px-2 lg:py-1 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border border-orange-500 rounded-full lg:rounded-lg text-white">
        <span className="absolute inset-0 w-full h-full p-3 lg:px-5 lg:py-3 rounded-full lg:rounded-lg bg-orange-800"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
        <div className="relative flex items-center gap-2">
          <FiDownload className="size-5 lg:size-4" />
          <span className="hidden lg:inline">Save</span>
        </div>
      </div>
    </button>
  );
}
