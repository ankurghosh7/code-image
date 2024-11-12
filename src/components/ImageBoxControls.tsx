"use client";
import React from "react";

import { FiDownload } from "react-icons/fi";
import SelectLanguage from "./ui/select-language";
import SelectPadding from "./ui/select-padding";
import SelectTheme from "./ui/select-theme";
import ModeSwticher from "./ui/mode-swticher";

import MoreSettingDialog from "./more-setting-dialog";
import { useImageBox } from "@/providers/image-box";

const ImageBoxControls = () => {
  const { CaptureImage } = useImageBox();
  return (
    <div className="w-auto bg-gray-400 dark:bg-zinc-800 rounded-b-lg flex gap-4 items-end justify-center px-10 py-5 absolute top-0 left-1/2 -translate-x-1/2 z-10">
      {/* select theme */}
      <div className="options-label-weapper">
        <span className="options-label ">Theme</span>
        <SelectTheme />
      </div>
      {/* chnage mode */}
      <div className="options-label-weapper">
        <span className="options-label 	">Dark Mode</span>
        <ModeSwticher />
      </div>
      <div className="options-label-weapper">
        <span className="options-label">Padding</span>
        <SelectPadding />
      </div>

      <div className="options-label-weapper">
        <span className="options-label">Language</span>
        <SelectLanguage />
      </div>

      <MoreSettingDialog />
      <button
        className="relative inline-block group mb-1 "
        onClick={CaptureImage}
      >
        <span className="relative z-10 block px-2 py-1 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border border-orange-500 rounded-lg text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-800"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
          <span className="relative flex items-center gap-2">
            <FiDownload className="size-4" />
            Save
          </span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-7 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  );
};

export default ImageBoxControls;
