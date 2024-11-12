import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useImageBox } from "@/providers/image-box";

export const BrandTagSwticher = () => {
  const { ToggleWatermark, watermark } = useImageBox();
  return (
    <div className="checkbox-wrapper-51">
      <input
        type="checkbox"
        id="cbx-1"
        className="invisible hidden"
        checked={watermark}
        onChange={(e) => {
          console.log(e.target.checked);
          ToggleWatermark(e.target.checked);
        }}
      />
      <label
        htmlFor="cbx-1"
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
  );
};

export function SelectBrandTagPosition() {
  const { watermarkPosition, changeWatermarkPosition, watermark } =
    useImageBox();
  return (
    <Select onValueChange={changeWatermarkPosition} value={watermarkPosition}>
      <SelectTrigger
        className="control-trigger group min-w-20 [&:nth-child(2)]:[&_span]:data-[state=open]:-translate-x-40"
        disabled={!watermark}
      >
        <SelectValue />
        <span className="control-trigger-sine"></span>
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-900 bg-zinc-300">
        <SelectItem value="center">Center</SelectItem>
        <SelectItem value="right">Right</SelectItem>
        <SelectItem value="left">Left</SelectItem>
      </SelectContent>
    </Select>
  );
}
