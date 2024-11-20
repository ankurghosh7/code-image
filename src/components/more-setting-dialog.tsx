import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IoSettingsSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import ControlThemeRadio from "./ui/control-theme-radio";
import FormatTabs from "./ui/editor-tabs";
import { BrandTagSwticher, SelectBrandTagPosition } from "./ui/watermark";
import { useCodeBox } from "@/providers/code-box";
import { Slider } from "@/components/ui/range";

const MoreSettingDialog = () => {
  const {
    changeControlTheme,
    showControlTheme,
    toggleControlTheme,
    defaultValues: { defaultControlTheme },
    toggleBoxTitle,
    showBoxTitle,
    changeBackgroundOpacity,
    backgroundOpacity,
  } = useCodeBox();
  console.log("backgroundOpacity", backgroundOpacity);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="control-trigger flex justify-center items-center gap-2 group [&:nth-child(3)]:[&_span]:data-[state=open]:-translate-x-24"
          aria-label="Settings"
        >
          <span className="text-sm">More</span>
          <MdKeyboardArrowDown className="size-5" />

          <span className="control-trigger-sine"></span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="dark:bg-zinc-900 bg-zinc-300">
        <div className="space-y-3">
          <p className="mb-2.5 text-[15px] font-medium leading-[19px] text-mauve12 flex gap-2">
            Settings
            <IoSettingsSharp className="size-5" />
          </p>
          {/* window contorls theme */}
          <div className="bg-gray-400 dark:bg-zinc-800 p-2 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm pb-1">Controls Theme</p>
              <div className="checkbox-wrapper-51">
                <input
                  type="checkbox"
                  id="show-controls"
                  className="invisible hidden"
                  checked={showControlTheme}
                  onChange={(e) => {
                    toggleControlTheme(e.target.checked);
                  }}
                />
                <label
                  htmlFor="show-controls"
                  className="toggle before:content-[''] before:relative before:top-px before:left-px before:w-10 before:h-[22px] before:block before:bg-[#c8ccd4] before:rounded-xl before:[transition:background_0.2s_ease] relative block w-10 h-6 cursor-pointer [transform:translate3d(0,_0,_0)]"
                >
                  <span className="absolute top-[0] left-[0] w-[24px] h-[24px] block bg-[#fff] rounded-[50%] [box-shadow:0_2px_6px_rgba(154,153,153,0.75)] [transition:all_0.2s_ease]">
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 10 10"
                      className="fill-none m-2"
                    >
                      <path
                        d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"
                        className="stroke-[#c8ccd4] stroke-[2] [transition:all_0.5s_linear] [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:24] [stroke-dashoffset:0]"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
            <ControlThemeRadio
              onChange={changeControlTheme}
              defaultValue={defaultControlTheme}
            />
          </div>
          {/* text tab */}
          <div className="flex items-start justify-between bg-gray-400 dark:bg-zinc-800 p-2 rounded-md">
            <p className="text-sm pb-1 pt-2">Text Tab</p>
            <FormatTabs />
          </div>
          {/* code box title */}
          <div className="flex items-start justify-between bg-gray-400 dark:bg-zinc-800 p-2 rounded-md">
            <p className="text-sm pb-1 pt-2">Title</p>
            <div className="checkbox-wrapper-51">
              <input
                type="checkbox"
                id="show-title"
                className="invisible hidden"
                checked={showBoxTitle}
                onChange={(e) => {
                  toggleBoxTitle(e.target.checked);
                }}
              />
              <label
                htmlFor="show-title"
                className="toggle before:content-[''] before:relative before:top-px before:left-px before:w-10 before:h-[22px] before:block before:bg-[#c8ccd4] before:rounded-xl before:[transition:background_0.2s_ease] relative block w-10 h-6 cursor-pointer [transform:translate3d(0,_0,_0)]"
              >
                <span className="absolute top-[0] left-[0] w-[24px] h-[24px] block bg-[#fff] rounded-[50%] [box-shadow:0_2px_6px_rgba(154,153,153,0.75)] [transition:all_0.2s_ease]">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 10 10"
                    className="fill-none m-2"
                  >
                    <path
                      d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"
                      className="stroke-[#c8ccd4] stroke-[2] [transition:all_0.5s_linear] [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:24] [stroke-dashoffset:0]"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          {/* watermark */}
          <div className="space-y-2 bg-gray-400 dark:bg-zinc-800 p-2 rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-sm pb-1 pt-2">Watermark</p>
              <BrandTagSwticher />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm pb-1">Watermark position</p>
              <SelectBrandTagPosition />
            </div>
          </div>
          {/*  code box background */}
          <div className="flex flex-col items-start justify-between bg-gray-400 dark:bg-zinc-800 px-2 pt-2 pb-4 rounded-md gap-2">
            <p className="text-sm pb-1 pt-2">Bcakgound Opacity</p>
            <Slider
              defaultValue={[backgroundOpacity]}
              max={100}
              step={5}
              onValueChange={(v) => {
                changeBackgroundOpacity(v[0]);
              }}
              className=""
              minStepsBetweenThumbs={5}
              min={45}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MoreSettingDialog;
