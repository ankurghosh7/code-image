import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";
import { FaCircle as Circle } from "react-icons/fa6";
import { controlThemes } from "@/constants";

const ControlThemeRadio = ({
  onChange,
  defaultValue,
}: {
  onChange: (v: string) => void;
  defaultValue: string;
}) => {
  return (
    <RadioGroup.Root
      className="flex w-full h-fit overflow-x-scroll justify-start items-center gap-2 pb-3"
      defaultValue={defaultValue}
      aria-label="Control Theme"
      onValueChange={onChange}
    >
      {controlThemes.map((item, index) => (
        <ControlThemeRadioBtn
          value={item.name}
          className="w-20 h-16 overflow-hidden shrink-0"
          key={index}
        >
          <Image
            alt={`${item.name} theme`}
            src={item.imageUrl}
            className="w-full h-full"
            height={100}
            width={100}
          />
        </ControlThemeRadioBtn>
      ))}
    </RadioGroup.Root>
  );
};

export default ControlThemeRadio;

interface ControlThemeRadioProps {
  children: React.ReactNode;
}

const ControlThemeRadioBtn = React.forwardRef<
  React.ElementRef<typeof RadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroup.Item> &
    ControlThemeRadioProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroup.Item
      {...props}
      className={`flex items-center gap-2 cursor-pointer rounded-md overflow-hidden relative  ${className} border-2 border-zinc-700 data-[state=checked]:border-white select-none`}
      ref={ref}
    >
      <div className="items-center rounded-md  bg-popover hover:bg-accent hover:text-accent-foreground ">
        <div className="space-y-2 rounded-sm bg-slate-950">{children}</div>
      </div>

      <div className="absolute right-1 bottom-1 h-4 w-4 rounded-full border border-primary flex items-center justify-center overflow-hidden">
        <RadioGroup.Indicator className="size-3">
          <Circle className="w-full h-full text-primary" />
        </RadioGroup.Indicator>
      </div>
    </RadioGroup.Item>
  );
});

ControlThemeRadioBtn.displayName = RadioGroup.Item.displayName;
