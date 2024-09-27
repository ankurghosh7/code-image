"use client";
import ImageBox from "@/components/ImageBox";
import ImageBoxControls from "@/components/ImageBoxControls";
import { ImageBoxSettingsProvider } from "@/providers/imagebox-settings";
import GetCode from "@/utils/chose-random-code-snippet";
import React, { Suspense, useMemo } from "react";

export default function Home() {
  const defaultCode = useMemo(() => {
    const code = GetCode();
    return {
      code: code.code,
      lang: code.lang,
    };
  }, []);
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading...</h1>
        </div>
      }
    >
      <ImageBoxSettingsProvider>
        <div className="w-full space-y-4">
          {/* box nav */}
          <div className="w-fit mx-auto ">
            <ImageBoxControls defaultLean={defaultCode.lang} />
          </div>
          {/* image box */}
          <div className="w-fit mx-auto ">
            <ImageBox
              defaultCode={defaultCode.code}
              language={defaultCode.lang}
            />
          </div>
        </div>
      </ImageBoxSettingsProvider>
    </Suspense>
  );
}
