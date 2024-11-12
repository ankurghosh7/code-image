"use client";
import { useCodeBox } from "@/providers/code-box";
import { cn } from "@/utils/cn";
import { filterColor } from "@/utils/theme";
import React, { useEffect, useState } from "react";
import CodeBox from "./CodeBox";

import { LeftResizeBtn, RightResizeBtn } from "./ui/code-image-resize-btns";
import BrandPopover from "./ui/brand-popover";
import { useImageBox } from "@/providers/image-box";
import CodeBoxHeader from "./ui/code-box-header";

const ImageBox = () => {
  const {
    mode,
    language: la,
    tab,
    defaultValues,
    setDefaultCode,
    backgroundOpacity,
  } = useCodeBox();
  const { canvasRef, theme, padding, watermark, watermarkPosition } =
    useImageBox();
  const MIN_WIDTH = 520;
  const MAX_WIDTH = 920;

  const [width, setWidth] = useState(MIN_WIDTH); // Initial width
  const [isDragging, setIsDragging] = useState(false); // To track if dragging is happening
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(
    null
  ); // Direction of drag
  const [inputBrandTagValue, setInputBrandTagValue] = useState<string>("");

  const inputWidth = `${Math.max(40, 20 + inputBrandTagValue.length * 7)}px`; // Adjust the multiplier as needed

  // Handle mouse down event when starting the drag
  const handleMouseDown = (direction: "left" | "right") => {
    setIsDragging(true);
    setDragDirection(direction);
  };

  // Handle mouse move event for resizing
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !dragDirection) return;

    const movementX = e.movementX; // Get the horizontal movement of the mouse

    if (dragDirection === "left") {
      // Left button: Drag left to increase width, drag right to decrease width
      if (movementX < 0) {
        setWidth((prevWidth) => Math.min(prevWidth - movementX, MAX_WIDTH)); // Increase width on left drag
      } else if (movementX > 0) {
        setWidth((prevWidth) => Math.max(prevWidth - movementX, MIN_WIDTH)); // Decrease width on right drag
      }
    } else if (dragDirection === "right") {
      // Right button: Drag right to increase width, drag left to decrease width
      if (movementX > 0) {
        setWidth((prevWidth) => Math.min(prevWidth + movementX, MAX_WIDTH)); // Increase width on right drag
      } else if (movementX < 0) {
        setWidth((prevWidth) => Math.max(prevWidth + movementX, MIN_WIDTH)); // Decrease width on left drag
      }
    }
  };

  // Handle mouse up event to stop the drag
  const handleMouseUp = () => {
    setIsDragging(false);
    setDragDirection(null);
  };

  // Attach and remove event listeners for mouse movement and release
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup function to remove event listeners when component unmounts or dragging stops
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragDirection]);

  return (
    <div
      className="resizable-box relative select-none drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
      style={{
        filter: `drop-shadow(0 20px 25px ${theme.dropColor}40)`,
      }}
    >
      <LeftResizeBtn onMouseDown={() => handleMouseDown("left")} />

      <RightResizeBtn onMouseDown={() => handleMouseDown("right")} />

      <div
        className={cn(
          "rounded-lg h-auto min-w-[520px] max-w-[920px] relative ",
          {}
        )}
        style={{
          background: filterColor(theme.color, theme.deg),
          padding: `${padding}px`,
          width: `${width}px`,
        }}
        ref={canvasRef}
      >
        <div
          className={cn(
            "w-full rounded-lg p-4 shadow-2xl shadow-zinc-900/50 min-h-32 select-none relative overflow-hidden"
          )}
          style={{
            backgroundColor:
              mode === "dark"
                ? `rgba(0, 0, 0, ${backgroundOpacity / 100})`
                : `rgba(255, 225, 255, ${backgroundOpacity / 100})`,
          }}
        >
          <div className="w-full h-full relative z-10 space-y-2">
            <CodeBoxHeader />

            <CodeBox
              code={defaultValues.defaultCode}
              language={la.value}
              setEditorValue={setDefaultCode}
              tab={tab}
              mode={mode}
            />
          </div>
        </div>
        <div
          className={cn("flex w-full absolute bottom-3 left-0 px-5", {
            "justify-center": watermarkPosition === "center",
            "justify-end": watermarkPosition === "right",
            "justify-start": watermarkPosition === "left",
          })}
        >
          <div
            className={cn("flex gap-[2px] items-stretch min-w-20 max-w-full", {
              "hidden invisible opacity-0": !watermark,
            })}
          >
            <BrandPopover />
            <input
              id="brandInput"
              className="flex-1 bg-transparent border-none outline-none focus:outline-none text-sm min-w-0  text-black placeholder:text-black font-medium transition-all duration-300 ease-in-out"
              placeholder="Brand table"
              value={inputBrandTagValue}
              style={{ width: inputWidth }}
              onChange={(e) => setInputBrandTagValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
