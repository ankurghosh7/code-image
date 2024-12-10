import React from "react";

export const LeftResizeBtn = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="hidden sm:block absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 size-6 bg-transparent select-none cursor-col-resize after:absolute after:content-[''] after:rounded-full after:bg-white after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 z-[1]"
      {...props}
    />
  );
});
LeftResizeBtn.displayName = "LeftResizeBtn";
export const RightResizeBtn = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="hidden sm:block absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 size-6 bg-transparent z-[1] select-none cursor-col-resize after:absolute after:content-[''] after:rounded-full after:bg-white after:size-2 after:-translate-x-1/2 after:-translate-y-1/2"
      {...props}
    />
  );
});

RightResizeBtn.displayName = "RightResizeBtn";
