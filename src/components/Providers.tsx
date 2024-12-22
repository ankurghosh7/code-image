import { CodeBoxProvider } from "@/services/editor.provider";
import { ImageBoxProvider } from "@/services/image.provider";
import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ImageBoxProvider>
          <CodeBoxProvider>{children}</CodeBoxProvider>
        </ImageBoxProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;
