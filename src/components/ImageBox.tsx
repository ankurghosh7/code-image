"use client";
import React, { useEffect, useState } from "react";
import "@/styles/code-editor.css";
import { cn } from "@/utils/cn";
import CodeBoxHeader from "./ui/code-box-header";
import CodeBox from "./EditorBox";
import Watermark from "./Watermark";
import { useCodeBox } from "@/services/editor.provider";
import { filterColor } from "@/utils/theme";
import { LeftResizeBtn, RightResizeBtn } from "./ui/code-image-resize-btns";
import { useImageBox } from "@/services/image.provider";
import { useMediaQuery } from "@mantine/hooks";

const ImageBox = () => {
  const {
    mode,
    language: la,
    tab,
    defaultValues,
    setDefaultCode,
    backgroundOpacity,
  } = useCodeBox();

  const { canvasRef, theme, padding } = useImageBox();

  // Responsive resizing
  const isMobile = useMediaQuery("(max-width: 768px)", true, {
    getInitialValueInEffect: false,
  });
  // Minimum and maximum width for the resizable box
  const MIN_WIDTH = isMobile ? 100 : 520;
  const MAX_WIDTH = 920;

  // State to track the width of the resizable box
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
    }

    // Cleanup function to remove event listeners when component unmounts or dragging stops
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragDirection]);

  return (
    <div
      className="resizable-box relative select-none drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] w-full lg:w-auto"
      style={{
        filter: `drop-shadow(0 20px 25px ${theme.dropColor}40)`,
      }}
    >
      <LeftResizeBtn onMouseDown={() => handleMouseDown("left")} />
      <RightResizeBtn onMouseDown={() => handleMouseDown("right")} />

      <div
        className={cn(
          "rounded-lg h-auto min-w-full md:min-w-[520px] max-w-[920px] relative "
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
            "codebox w-full rounded-lg p-4 shadow-2xl shadow-zinc-900/50 min-h-32 select-none relative overflow-hidden"
          )}
          style={{
            backgroundColor:
              mode === "dark"
                ? `rgba(0, 0, 0, ${backgroundOpacity / 100})`
                : `rgba(255, 225, 255, ${backgroundOpacity / 100})`,
          }}
          data-mode={mode}
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
          <Watermark />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
