import { CodeBoxProvider } from "@/services/code-editor.provider";
import { ImageBoxProvider } from "@/services/code-image.provider";
import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <ImageBoxProvider>
          <CodeBoxProvider>{children}</CodeBoxProvider>
        </ImageBoxProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;
