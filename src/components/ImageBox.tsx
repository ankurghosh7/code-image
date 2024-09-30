"use client";
import { useCodeImage } from "@/providers/code-image";
import { cn } from "@/utils/cn";
import { filterColor } from "@/utils/theme";
import React, { useEffect, useState } from "react";
import CodeBox from "./CodeBox";

import { LeftResizeBtn, RightResizeBtn } from "./ui/code-image-resize-btns";
// import Draggable from "react-draggable";

const ImageBox = () => {
  const {
    theme,
    padding,
    mode,
    language: la,
    tab,
    defaultValues,
    canvasRef,
    setDefaultCode,
  } = useCodeImage();

  const MIN_WIDTH = 520;
  const MAX_WIDTH = 920;

  const [width, setWidth] = useState(MIN_WIDTH); // Initial width
  const [isDragging, setIsDragging] = useState(false); // To track if dragging is happening
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(
    null
  ); // Direction of drag

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
    <div className="resizable-box relative">
      <LeftResizeBtn onMouseDown={() => handleMouseDown("left")} />

      <RightResizeBtn onMouseDown={() => handleMouseDown("right")} />

      <div
        className={cn("rounded-lg h-auto min-w-[520px] max-w-[920px]", {})}
        style={{
          background: filterColor(theme.color, theme.deg),
          padding: `${padding}px`,
          width: `${width}px`,
        }}
        ref={canvasRef}
      >
        <div
          className={cn(
            "w-full rounded-lg p-4 space-y-3 shadow-2xl shadow-zinc-900/50 min-h-32  ",
            {
              "bg-black/70 ": mode === "dark",
              "bg-white/80": mode === "light",
            }
          )}
        >
          <div className="grid grid-cols-[50px_1fr_50px]">
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="size-3 rounded-full bg-zinc-600/80"
                ></div>
              ))}
            </div>
            <input
              placeholder="Untitled"
              className="w-full border-none text-center placeholder:text-center focus:outline-none bg-transparent text-sm"
            />
          </div>

          <CodeBox
            code={defaultValues.defaultCode}
            language={la.value}
            setEditorValue={setDefaultCode}
            tab={tab}
            mode={mode}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
