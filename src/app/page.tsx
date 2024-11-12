import ImageBox from "@/components/ImageBox";
import ImageBoxControls from "@/components/ImageBoxControls";
import { CodeBoxProvider } from "@/providers/code-box";
import { ImageBoxProvider } from "@/providers/image-box";
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
      <ImageBoxProvider>
        <CodeBoxProvider>
          <ImageBoxControls />
          <div className="w-full space-y-4 mt-14 bg-transparent sm:min-h-[calc(100vh-3rem)]">
            <div className="flex justify-center bg-transparent relative">
              <ImageBox />
            </div>
          </div>
        </CodeBoxProvider>
      </ImageBoxProvider>
    </Suspense>
  );
}
