import ImageBox from "@/components/ImageBox";
import ImageBoxControls from "@/components/ImageBoxControls";
import { CodeImageProvider } from "@/providers/code-image";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading...</h1>
        </div>
      }
    >
      <CodeImageProvider>
        <ImageBoxControls />
        <div className="w-full space-y-4 mt-14 bg-transparent">
          <div className="flex justify-center bg-transparent relative">
            <ImageBox />
          </div>
        </div>
      </CodeImageProvider>
    </Suspense>
  );
}
