"use client";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { MdCancel } from "react-icons/md";
import React from "react";
import { defaultLogos } from "@/constants";
import { LogoType } from "@/types";

export default function WatermarkPopover() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [selectedLogo, setSelectedLogo] = React.useState<LogoType | string>(
    "/target.png"
  );
  const removeImageUrl = () => {
    setImageUrl("");
  };
  const onSubmit = () => {
    setOpenPopup(false);
    setSelectedLogo(imageUrl);
    removeImageUrl();
  };
  const onSelect = (logo: LogoType) => {
    setSelectedLogo(logo);
  };
  const selectLocalFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedLogo(URL.createObjectURL(file));
      removeImageUrl();
      setOpenPopup(false);
    }
  };
  return (
    <Popover.Root onOpenChange={setOpenPopup} open={openPopup}>
      <Popover.Trigger asChild>
        <button
          role="button"
          className="hover:bg-zinc-300/40 px-[2px] rounded-sm"
        >
          <TriggerImage child={selectedLogo} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded w-[360px] bg-zinc-900 will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-[2]"
          sideOffset={5}
        >
          <Tabs.Root className="flex w-full flex-col " defaultValue="tab1">
            <Tabs.List
              className="flex shrink-0 w-full px-3 py-2 border-b border-zinc-500 gap-2 relative"
              aria-label="Tabs"
            >
              <Tabs.Trigger
                className="relative h-fit w-fit cursor-pointer select-none bg-transparent text-sm outline-none px-2 py-1 rounded-lg text-zinc-500 data-[state=active]:text-white data-[state=inactive]:hover:bg-zinc-600/30 transition-all duration-300 ease-in-out data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:-bottom-[9px] data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-white"
                value="logos"
              >
                Logos
              </Tabs.Trigger>
              <Tabs.Trigger
                className="relative h-fit w-fit cursor-pointer select-none bg-transparent text-sm outline-none px-2 py-1 rounded-lg text-zinc-500 data-[state=active]:text-white data-[state=inactive]:hover:bg-zinc-600/30 transition-all duration-300 ease-in-out data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:-bottom-[9px] data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-white"
                value="custom"
              >
                Custom
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow rounded-b-md bg-transparent px-5 py-7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black xl:min-h-44"
              value="logos"
            >
              <div className="flex gap-3 flex-wrap">
                {defaultLogos.map((logo) => {
                  const Icon = logo.icon;
                  return (
                    <button
                      key={logo.name}
                      className="border p-2 rounded-md"
                      type="button"
                      onClick={() => {
                        onSelect(logo);
                        setOpenPopup(false);
                      }}
                    >
                      <Icon className="size-3.5" />
                    </button>
                  );
                })}
              </div>
            </Tabs.Content>
            <Tabs.Content
              className="grow rounded-b-md bg-transparent px-5 py-7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black xl:min-h-44"
              value="custom"
            >
              <div className="space-y-6">
                <div className="flex gap-2">
                  <div className="flex-1 flex items-center text-[14px] leading-[20px] relative rounded-[6px] [box-shadow:rgba(255,_255,_255,_0.075)_0px_0px_0px_1px_inset] focus-within:[box-shadow:rgba(37,_99,_255,_0.5)_0px_0px_0px_1px_inset,rgba(37,_99,_255,_0.25)_0px_0px_0px_3px] bg-[rgba(255,_255,_255,_0.055)] cursor-text px-[6px] py-[3px] h-8 select-text">
                    <input
                      className="border-none bg-transparent flex-1 block min-w-0 shrink-0 focus:outline-none placeholder:text-zinc-500"
                      placeholder="Enter link to an image"
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                    {imageUrl?.trim().length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          removeImageUrl();
                        }}
                      >
                        <MdCancel className="size-4 text-zinc-600 hover:text-zinc-500" />
                      </button>
                    )}
                  </div>
                  <button
                    className=" select-none transition-all duration-300 ease-in-out inline-flex items-center justify-center shrink-0 whitespace-nowrap h-8 rounded-md bg-blue-600 text-white px-3 text-sm font-medium disabled:cursor-not-allowed disabled:bg-blue-800 disabled:text-zinc-400"
                    disabled={imageUrl?.trim().length <= 0}
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="">
                    <input
                      type="file"
                      id="uploadFile1"
                      className="hidden"
                      onChange={selectLocalFile}
                    />
                    <label
                      htmlFor="uploadFile1"
                      className="select-none inline-flex items-center justify-center w-full px-3 py-2.5 rounded-full text-sm tracking-wider font-semibold border-none outline-none cursor-pointer border-[1px] border-[rgba(255,255,255,0.13)] bg-blue-600 text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-800 disabled:text-zinc-400 transition-all duration-300 ease-in-out"
                    >
                      Upload file
                    </label>
                  </div>

                  <div className="flex justify-center items-center text-[12px] leading-[120%] w-full select-none bg-none text-[rgba(255,_255,_255,_0.443)]">
                    <span> Recommended size is 280 × 280 pixels</span>
                  </div>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function TriggerImage({ child }: { child: string | LogoType }) {
  const type = typeof child === "string";

  if (type) {
    return (
      <Image
        alt="logo"
        width={100}
        height={100}
        className="size-3.5 max-w-3.5 max-h-3.5"
        src={child}
      />
    );
  }
  return (
    <div className="w-fit h-fit">
      <child.icon className="size-3.5 max-w-3.5 max-h-3.5 invert" />
    </div>
  );
}
