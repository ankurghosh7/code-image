import React from "react";

import SelectLanguage from "./ui/select-language";
import SelectPadding from "./ui/select-padding";
import SelectTheme from "./ui/select-theme";
import ModeSwticher from "./ui/mode-swticher";

import MoreSettingDialog from "./CodeImageSettingsDialog";
import ImageSaveBtn from "./ImageSaveBtn";

const Toolbar = () => {
  return (
    <div className="flex w-full lg:w-auto bg-gray-400 dark:bg-zinc-800 lg:rounded-b-lg gap-4 items-center md:items-end justify-start lg:justify-center px-4 lg:px-10 py-2 lg:py-5 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-10 overflow-x-scroll lg:overflow-hidden">
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
      <ImageSaveBtn />
    </div>
  );
};

export default Toolbar;
